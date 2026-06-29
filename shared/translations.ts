export type Language = "en" | "ru" | "es" | "fr";

export interface Translations {
  title: string;
  subtitle: string;
  inputPlaceholder: string;
  workingMode: string;
  characters: {
    stoic: {
      desc: string;
      greeting: string;
    };
    mom: {
      desc: string;
      greeting: string;
    };
    coach: {
      desc: string;
      greeting: string;
    };
  };
  modes: Array<{
    id: string;
  }>;
}

// Persona names and mode labels are kept in English across all languages
export const PERSONA_NAMES = {
  stoic: "Stoic Philosopher",
  mom: "Caring Mom",
  coach: "Bold Coach",
} as const;

export const MODE_LABELS = {
  near: "Be near",
  deep: "Deep dive",
  view: "Outside view",
  blind: "Blind spots",
  question: "Only question",
} as const;

export const translations: Record<Language, Translations> = {
  en: {
    title: "🌙 Your Psychologist",
    subtitle: "Choose your guide",
    inputPlaceholder: "Write a message...",
    workingMode: "Alright, working in this mode.",
    characters: {
      stoic: {
        desc: "Calm, clear, unflappable. Speaks little but precisely.",
        greeting: "Greetings. What brings you here?",
      },
      mom: {
        desc: "Warm, accepting, attentive. You can exhale next to her.",
        greeting: "Hello, sunshine. How are you feeling?",
      },
      coach: {
        desc: "Straightforward, energetic, honest. Tells the truth to your face.",
        greeting: "Hey! Ready to dig deeper? What's on your mind?",
      },
    },
    modes: [
      { id: "near" },
      { id: "deep" },
      { id: "view" },
      { id: "blind" },
      { id: "question" },
    ],
  },
  ru: {
    title: "🌙 Твой Психолог",
    subtitle: "Выбери своего проводника",
    inputPlaceholder: "Напиши сообщение...",
    workingMode: "Хорошо, работаем в этом режиме.",
    characters: {
      stoic: {
        desc: "Спокойный, ясный, невозмутимый. Говорит мало, но точно.",
        greeting: "Приветствую. Что привело тебя сюда?",
      },
      mom: {
        desc: "Тёплая, принимающая, внимательная. Рядом с ней можно выдохнуть.",
        greeting: "Здравствуй, солнышко. Как ты себя чувствуешь?",
      },
      coach: {
        desc: "Прямолинейный, энергичный, честный. Говорит правду в лицо.",
        greeting: "Привет! Ну что, готова копнуть глубже? Что у тебя на уме?",
      },
    },
    modes: [
      { id: "near" },
      { id: "deep" },
      { id: "view" },
      { id: "blind" },
      { id: "question" },
    ],
  },
  es: {
    title: "🌙 Tu Psicólogo",
    subtitle: "Elige tu guía",
    inputPlaceholder: "Escribe un mensaje...",
    workingMode: "Muy bien, trabajando en este modo.",
    characters: {
      stoic: {
        desc: "Calmado, claro, imperturbable. Habla poco pero con precisión.",
        greeting: "Saludos. ¿Qué te trae por aquí?",
      },
      mom: {
        desc: "Cálida, aceptadora, atenta. A su lado puedes relajarte.",
        greeting: "Hola, sol. ¿Cómo te sientes?",
      },
      coach: {
        desc: "Directo, enérgico, honesto. Te dice la verdad a la cara.",
        greeting: "¡Hola! ¿Listo para profundizar? ¿Qué tienes en mente?",
      },
    },
    modes: [
      { id: "near" },
      { id: "deep" },
      { id: "view" },
      { id: "blind" },
      { id: "question" },
    ],
  },
  fr: {
    title: "🌙 Votre Psychologue",
    subtitle: "Choisissez votre guide",
    inputPlaceholder: "Écrivez un message...",
    workingMode: "D'accord, on travaille dans ce mode.",
    characters: {
      stoic: {
        desc: "Calme, clair, imperturbable. Parle peu mais avec précision.",
        greeting: "Salutations. Qu'est-ce qui vous amène ici ?",
      },
      mom: {
        desc: "Chaleureuse, acceptante, attentive. À ses côtés, on peut souffler.",
        greeting: "Bonjour, mon soleil. Comment te sens-tu ?",
      },
      coach: {
        desc: "Direct, énergique, honnête. Dit la vérité en face.",
        greeting: "Salut ! Prêt à creuser ? Qu'as-tu en tête ?",
      },
    },
    modes: [
      { id: "near" },
      { id: "deep" },
      { id: "view" },
      { id: "blind" },
      { id: "question" },
    ],
  },
};

export function getTranslations(lang: Language): Translations {
  return translations[lang] || translations.en;
}
