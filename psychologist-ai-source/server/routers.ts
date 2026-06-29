import { COOKIE_NAME } from "@shared/const";
import { getSessionCookieOptions } from "./_core/cookies";
import { systemRouter } from "./_core/systemRouter";
import { publicProcedure, protectedProcedure, router } from "./_core/trpc";
import { z } from "zod";
import { invokeLLM } from "./_core/llm";
import { buildSystemPrompt } from "./personas";
import { getChatHistory, saveChatMessage } from "./db";
import { LLM_CONFIG } from "./_core/llm-config";

export const appRouter = router({
  system: systemRouter,
  auth: router({
    me: publicProcedure.query((opts) => opts.ctx.user),
    logout: publicProcedure.mutation(({ ctx }) => {
      const cookieOptions = getSessionCookieOptions(ctx.req);
      ctx.res.clearCookie(COOKIE_NAME, { ...cookieOptions, maxAge: -1 });
      return {
        success: true,
      } as const;
    }),
  }),

  chat: router({
    sendMessage: protectedProcedure
      .input(
        z.object({
          persona: z.enum(["stoic", "mom", "coach"]),
          language: z.enum(["en", "ru", "es", "fr"]).default("en"),
          mode: z.string().optional(),
          message: z.string().min(1),
        })
      )
      .mutation(async ({ ctx, input }) => {
        const { persona, language, mode, message } = input;

        // Build system prompt with persona, mode, and language
        const systemPrompt = buildSystemPrompt(persona, mode || "near", language);

        // Call LLM with the system prompt
        const response = await invokeLLM({
          messages: [
            {
              role: "system",
              content: systemPrompt,
            },
            {
              role: "user",
              content: message,
            },
          ],
          model: LLM_CONFIG.model,
          maxTokens: LLM_CONFIG.maxTokens,
        });

        const content = response.choices[0]?.message?.content;
        const aiResponse =
          typeof content === "string" ? content : "I'm thinking...";

        // Save to database
        if (aiResponse) {
          await saveChatMessage({
            userId: ctx.user.id,
            persona,
            language,
            mode: mode || "near",
            userMessage: message,
            aiResponse,
          });
        }

        return {
          response: aiResponse,
        };
      }),

    getHistory: protectedProcedure
      .input(
        z.object({
          persona: z.enum(["stoic", "mom", "coach"]),
        })
      )
      .query(async ({ ctx, input }) => {
        return getChatHistory(ctx.user.id, input.persona);
      }),
  }),
});

export type AppRouter = typeof appRouter;
