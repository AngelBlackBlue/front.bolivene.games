import { useTranslation } from "react-i18next";
import EnglishIcon from "@/icons/English";
import SpanishIcon from "@/icons/Spanish";
import PortugueseIcon from "@/icons/Portuguese";
import ChineseIcon from "@/icons/Chinese";
import { useState, JSX, useEffect } from "react";

interface Language {
  code: string;
  name: string;
  icon: JSX.Element;
}

function Language() {
  const { i18n } = useTranslation();
  const [currentIcon, setCurrentIcon] = useState<JSX.Element>(<EnglishIcon />);
  const [showLanguages, setShowLanguages] = useState(false);

  const languages: Language[] = [
    {
      code: "en",
      name: "English",
      icon: <EnglishIcon />,
    },
    {
      code: "es",
      name: "Español",
      icon: <SpanishIcon />,
    },
    {
      code: "pt",
      name: "Português",
      icon: <PortugueseIcon />,
    },
    {
      code: "zh",
      name: "中文",
      icon: <ChineseIcon />,
    },
  ];

  useEffect(() => {
    const currentLanguage = i18n.language;
    const selectedLanguage = languages.find(
      (lang) => lang.code === currentLanguage
    );
    if (selectedLanguage) {
      setCurrentIcon(selectedLanguage.icon);
    }
  }, [i18n.language]);

  const changeLanguage = (lng: string, icon: JSX.Element) => {
    i18n.changeLanguage(lng);
    setCurrentIcon(icon);
    setShowLanguages(false); // Oculta las opciones después de seleccionar un idioma
  };

  return (
    <div className="relative z-20">
      <button
        className="bg-transparent flex items-center justify-center"
        onClick={() => setShowLanguages(!showLanguages)}
      >
        <div className="w-[30px] h-[30px]">{currentIcon}</div>
      </button>

      {showLanguages && (
        <div className="absolute mt-2 w-48 bg-[#220874] text-white rounded-[5px] shadow-lg">
          {languages.map((lang) => (
            <div
              key={lang.code}
              onClick={() => changeLanguage(lang.code, lang.icon)}
              className="px-4 py-2 hover:bg-[#39009d] rounded-[5px] cursor-pointer flex items-center"
            >
              <div className="w-[30px] h-[30px]">{lang.icon}</div>
              <span className="ml-2 text-[16px]">{lang.name}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Language;
