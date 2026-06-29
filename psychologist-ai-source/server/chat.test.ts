import { describe, it, expect } from "vitest";
import { buildSystemPrompt, personaConfigs } from "./personas";

describe("Persona System Prompts", () => {
  it("should build system prompt for Stoic Philosopher in English", () => {
    const prompt = buildSystemPrompt("stoic", "near", "en");
    expect(prompt).toContain("Stoic Philosopher");
    expect(prompt).toContain("IMPORTANT: Respond ONLY in English");
    expect(prompt).toContain("Just be present and supportive");
  });

  it("should build system prompt for Caring Mom in Russian", () => {
    const prompt = buildSystemPrompt("mom", "deep", "ru");
    expect(prompt).toContain("Caring Mom");
    expect(prompt).toContain("IMPORTANT: Respond ONLY in Russian");
    expect(prompt).toContain("Dig deep");
  });

  it("should build system prompt for Bold Coach in Spanish", () => {
    const prompt = buildSystemPrompt("coach", "view", "es");
    expect(prompt).toContain("Bold Coach");
    expect(prompt).toContain("IMPORTANT: Respond ONLY in Spanish");
    expect(prompt).toContain("outside perspective");
  });

  it("should build system prompt with blind spots mode in French", () => {
    const prompt = buildSystemPrompt("stoic", "blind", "fr");
    expect(prompt).toContain("IMPORTANT: Respond ONLY in French");
    expect(prompt).toContain("blind spots");
  });

  it("should build system prompt with question-only mode", () => {
    const prompt = buildSystemPrompt("mom", "question", "en");
    expect(prompt).toContain("thoughtful questions");
  });

  it("should have all personas configured", () => {
    expect(personaConfigs.stoic).toBeDefined();
    expect(personaConfigs.mom).toBeDefined();
    expect(personaConfigs.coach).toBeDefined();
  });

  it("should have correct persona icons", () => {
    expect(personaConfigs.stoic.icon).toBe("🏛️");
    expect(personaConfigs.mom.icon).toBe("🤱");
    expect(personaConfigs.coach.icon).toBe("🔥");
  });

  it("should have correct persona names", () => {
    expect(personaConfigs.stoic.name).toBe("Stoic Philosopher");
    expect(personaConfigs.mom.name).toBe("Caring Mom");
    expect(personaConfigs.coach.name).toBe("Bold Coach");
  });
});
