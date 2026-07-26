import React, { createContext, useContext, useEffect, useState } from "react";

export type Language = "en" | "ur";

type LanguageProviderProps = {
  children: React.ReactNode;
  defaultLang?: Language;
};

type LanguageProviderState = {
  language: Language;
  setLanguage: (lang: Language) => void;
  dir: "ltr" | "rtl";
  t: (key: string) => string;
};

const translations: Record<string, Record<Language, string>> = {
  "nav.home": { en: "Home", ur: "ہوم" },
  "nav.about": { en: "About", ur: "ہمارے بارے میں" },
  "nav.services": { en: "Services", ur: "خدمات" },
  "nav.booking": { en: "Booking", ur: "بکنگ" },
  "nav.book_appointment": { en: "Book Appointment", ur: "اپوائنٹمنٹ بک کریں" },
  
  "hero.subtitle": { en: "Premium Physiotherapy & Rehabilitation", ur: "پریمیم فزیوتھراپی اور بحالی" },
  "hero.title": { en: "Restore Your Movement, Reclaim Your Life.", ur: "اپنی حرکت بحال کریں، اپنی زندگی واپس پائیں" },
  "hero.cta_primary": { en: "Book Appointment", ur: "اپوائنٹمنٹ بک کریں" },
  "hero.cta_whatsapp": { en: "WhatsApp Us", ur: "واٹس ایپ کریں" },
  "hero.cta_call": { en: "Call Now", ur: "ابھی کال کریں" },

  "stats.patients": { en: "Patients Treated", ur: "علاج شدہ مریض" },
  "stats.experience": { en: "Years Experience", ur: "سال کا تجربہ" },
  "stats.success": { en: "Success Rate", ur: "کامیابی کی شرح" },
  "stats.conditions": { en: "Conditions Treated", ur: "علاج شدہ بیماریاں" },

  "about.title": { en: "Meet Your Expert", ur: "اپنے ماہر سے ملیے" },
  "about.name": { en: "Dr. Ayesha Jamshed", ur: "ڈاکٹر عائشہ جمشید" },
  "about.creds": { en: "DPT, MSPT", ur: "ڈی پی ٹی، ایم ایس پی ٹی" },
  
  "services.title": { en: "Premium Services", ur: "پریمیم خدمات" },
  
  "conditions.title": { en: "Conditions We Treat", ur: "ہم جن بیماریوں کا علاج کرتے ہیں" },
  
  "booking.title": { en: "Schedule Your Visit", ur: "اپنا وقت طے کریں" },
  "booking.name": { en: "Full Name", ur: "پورا نام" },
  "booking.phone": { en: "Phone Number", ur: "فون نمبر" },
  "booking.email": { en: "Email", ur: "ای میل" },
  "booking.condition": { en: "Condition / Problem", ur: "مسئلہ / بیماری" },
  "booking.date": { en: "Preferred Date", ur: "پسندیدہ تاریخ" },
  "booking.time": { en: "Preferred Time", ur: "پسندیدہ وقت" },
  "booking.submit": { en: "Book via WhatsApp", ur: "واٹس ایپ کے ذریعے بک کریں" },
  "booking.email_fallback": { en: "Or send an email", ur: "یا ای میل بھیجیں" },
};

const initialState: LanguageProviderState = {
  language: "en",
  setLanguage: () => null,
  dir: "ltr",
  t: (key: string) => key,
};

const LanguageContext = createContext<LanguageProviderState>(initialState);

export function LanguageProvider({
  children,
  defaultLang = "en",
}: LanguageProviderProps) {
  const [language, setLanguage] = useState<Language>(
    () => (localStorage.getItem("app-language") as Language) || defaultLang
  );

  const dir = language === "ur" ? "rtl" : "ltr";

  useEffect(() => {
    const root = window.document.documentElement;
    root.dir = dir;
    root.lang = language;
    localStorage.setItem("app-language", language);
  }, [language, dir]);

  const t = (key: string): string => {
    if (translations[key] && translations[key][language]) {
      return translations[key][language];
    }
    return key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, dir, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined)
    throw new Error("useLanguage must be used within a LanguageProvider");
  return context;
};
