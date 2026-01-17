import { useState } from "react";
import { useTranslation } from "react-i18next";
import ReactCountryFlag from "react-country-flag";

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const languages = [
    { code: "en", name: "English", country: "GB" },
    { code: "de", name: "Deutsch", country: "DE" },
  ];

  const currentLanguage =
    languages.find((lang) => lang.code === i18n.language) || languages[0];

  const changeLanguage = (code) => {
    i18n.changeLanguage(code);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-gray-100 transition"
      >
        <ReactCountryFlag
          svg
          countryCode={currentLanguage.country}
          style={{ width: "1.5em", height: "1.5em" }}
        />
        <span className="hidden md:inline text-gray-700">
          {currentLanguage.name}
        </span>
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 bg-white rounded-lg shadow-xl border z-50 min-w-[160px]">
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => changeLanguage(lang.code)}
              className={`w-full px-4 py-3 flex items-center gap-3 text-left hover:bg-gray-50 ${
                i18n.language === lang.code
                  ? "bg-sunsetYellow/10 text-sunsetOrange font-semibold"
                  : "text-gray-700"
              }`}
            >
              <ReactCountryFlag
                svg
                countryCode={lang.country}
                style={{ width: "1.5em", height: "1.5em" }}
              />
              <span>{lang.name}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default LanguageSwitcher;
