import { useState, useRef, useEffect } from "react";
import { trpc } from "@/lib/trpc";
import { getTranslations, type Language, PERSONA_NAMES, MODE_LABELS } from "@shared/translations";
import { personaConfigs, type PersonaType } from "../../../server/personas";

type Message = {
  id: string;
  sender: "user" | "bot";
  content: string;
};

export default function ChatApp() {
  const [currentLanguage, setCurrentLanguage] = useState<Language>("en");
  const [currentPersona, setCurrentPersona] = useState<PersonaType | null>(null);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [selectedMode, setSelectedMode] = useState<string>("near");
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const t = getTranslations(currentLanguage);
  const sendMessageMutation = trpc.chat.sendMessage.useMutation();

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleOpenChat = (persona: PersonaType) => {
    setCurrentPersona(persona);
    setMessages([
      {
        id: "greeting",
        sender: "bot",
        content: personaConfigs[persona].greeting,
      },
    ]);
  };

  const handleGoBack = () => {
    setCurrentPersona(null);
    setMessages([]);
    setInputValue("");
  };

  const handleSendMessage = async () => {
    if (!inputValue.trim() || !currentPersona) return;

    const userMessage = inputValue.trim();
    setInputValue("");

    // Add user message to UI
    const userMsgId = `msg-${Date.now()}`;
    setMessages((prev) => [
      ...prev,
      { id: userMsgId, sender: "user", content: userMessage },
    ]);

    setIsLoading(true);

    try {
      const response = await sendMessageMutation.mutateAsync({
        persona: currentPersona,
        language: currentLanguage,
        mode: selectedMode,
        message: userMessage,
      });

      // Add AI response to UI
      setMessages((prev) => [
        ...prev,
        { id: `msg-${Date.now()}`, sender: "bot", content: response.response },
      ]);
    } catch (error) {
      console.error("Error sending message:", error);
      setMessages((prev) => [
        ...prev,
        {
          id: `msg-${Date.now()}`,
          sender: "bot",
          content: "Sorry, I encountered an error. Please try again.",
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleModeClick = (modeId: string) => {
    setSelectedMode(modeId);
    const modeText = MODE_LABELS[modeId as keyof typeof MODE_LABELS] || modeId;

    // Add mode selection as user message
    setMessages((prev) => [
      ...prev,
      { id: `msg-${Date.now()}`, sender: "user", content: modeText },
    ]);

    // Add confirmation from bot
    setMessages((prev) => [
      ...prev,
      {
        id: `msg-${Date.now()}`,
        sender: "bot",
        content: t.workingMode,
      },
    ]);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  // Main screen - character selection
  if (!currentPersona) {
    return (
      <div className="min-h-screen" style={{
        background: "linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)",
      }}>
        <div className="max-w-md mx-auto px-5 py-5 min-h-screen flex flex-col">
          {/* Language Switcher */}
          <div className="flex justify-end gap-2 mb-5">
            {(["en", "ru", "es", "fr"] as Language[]).map((lang) => (
              <button
                key={lang}
                onClick={() => setCurrentLanguage(lang)}
                className={`px-2.5 py-1.5 rounded text-xs font-medium transition-all ${
                  currentLanguage === lang
                    ? "bg-blue-600 border-blue-600 text-white"
                    : "bg-white/10 border border-white/20 text-white/90 hover:bg-white/20"
                }`}
              >
                {lang.toUpperCase()}
              </button>
            ))}
          </div>

          {/* Header */}
          <div className="text-center py-8 mb-8">
            <h1 className="text-2xl font-bold text-white mb-2">{t.title}</h1>
            <p className="text-sm text-gray-400">{t.subtitle}</p>
          </div>

          {/* Character Cards */}
          <div className="grid gap-5 flex-1">
            {(["stoic", "mom", "coach"] as PersonaType[]).map((persona) => (
              <div
                key={persona}
                onClick={() => handleOpenChat(persona)}
                className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-6 cursor-pointer transition-all duration-300 hover:translate-y-[-5px] hover:bg-white/8"
              >
                <div className="text-5xl mb-4">
                  {personaConfigs[persona].icon}
                </div>
                <div className="text-xl font-semibold text-white mb-2">
                  {PERSONA_NAMES[persona]}
                </div>
                <div className="text-sm text-gray-400 leading-relaxed">
                  {t.characters[persona].desc}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  // Chat screen
  const persona = currentPersona;
  const personaConfig = personaConfigs[persona];

  return (
    <div className="h-screen flex flex-col" style={{
      background: "linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)",
    }}>
      {/* Chat Header */}
      <div
        className="px-5 py-5 flex items-center gap-4 border-b"
        style={{
          background: "rgba(0, 0, 0, 0.3)",
          borderColor: "rgba(255, 255, 255, 0.1)",
        }}
      >
        <button
          onClick={handleGoBack}
          className="text-2xl text-white cursor-pointer p-1 hover:opacity-80"
        >
          ←
        </button>
        <div className="text-3xl">{personaConfig.icon}</div>
        <div className="text-white font-semibold">
          {PERSONA_NAMES[persona]}
        </div>
      </div>

      {/* Messages */}
      <div
        className="flex-1 overflow-y-auto px-5 py-5 flex flex-col gap-4"
        style={{ color: "#e0e0e0" }}
      >
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
          >
            <div
              className={`max-w-xs px-4 py-3 rounded-3xl text-sm leading-relaxed ${
                msg.sender === "user"
                  ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white"
                  : "bg-white/10 text-gray-200"
              }`}
            >
              {msg.content}
            </div>
          </div>
        ))}

        {isLoading && (
          <div className="flex justify-start">
            <div
              className="px-4 py-3 rounded-3xl text-sm"
              style={{ background: "rgba(255, 255, 255, 0.1)" }}
            >
              <div className="flex gap-2">
                <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></span>
                <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-100"></span>
                <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-200"></span>
              </div>
            </div>
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>

      {/* Mode Buttons */}
      <div
        className="px-5 py-2.5 flex gap-2 overflow-x-auto border-t"
        style={{
          background: "rgba(0, 0, 0, 0.2)",
          borderColor: "rgba(255, 255, 255, 0.1)",
        }}
      >
        {t.modes.map((mode) => (
          <button
            key={mode.id}
            onClick={() => handleModeClick(mode.id)}
            className={`px-4 py-2 rounded-full text-xs font-medium whitespace-nowrap transition-all ${
              selectedMode === mode.id
                ? "bg-blue-600 text-white"
                : "bg-white/10 border border-white/20 text-gray-300 hover:bg-white/20"
            }`}
          >
            {MODE_LABELS[mode.id as keyof typeof MODE_LABELS]}
          </button>
        ))}
      </div>

      {/* Input Area */}
      <div
        className="px-5 py-4 flex gap-2 border-t"
        style={{
          background: "rgba(0, 0, 0, 0.3)",
          borderColor: "rgba(255, 255, 255, 0.1)",
        }}
      >
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder={t.inputPlaceholder}
          className="flex-1 bg-white/10 border border-white/20 rounded-full px-5 py-3 text-white placeholder-gray-500 outline-none focus:bg-white/20 transition-colors"
        />
        <button
          onClick={handleSendMessage}
          disabled={isLoading || !inputValue.trim()}
          className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 text-white flex items-center justify-center cursor-pointer hover:opacity-90 disabled:opacity-50 transition-opacity"
        >
          ➤
        </button>
      </div>
    </div>
  );
}
