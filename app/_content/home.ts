export const homeCopy = {
  en: {
    tagline: "Massachusetts-licensed architect based in Boston.",
    cta: { linkedin: "LinkedIn", instagram: "Instagram", email: "Email" },
    switchLabel: "中文",
    switchHref: "/zh",
  },
  zh: {
    tagline: "注册建筑师，常驻波士顿，专注清晰与可建造的设计。",
    cta: { linkedin: "领英", instagram: "Instagram", email: "邮箱" },
    switchLabel: "EN",
    switchHref: "/",
  },
} as const;

export type HomeLang = keyof typeof homeCopy;