import { useState } from "react";
import { useTranslation } from "react-i18next";
import "./Navbar.css";

const languages = [
  { code: 'en', label: 'English', icon: '/assets/icons/language.webp' },
  { code: 'hi', label: 'हिन्दी', icon: '/assets/icons/language.webp' },
];

const Navbar = () => {
  const { t, i18n } = useTranslation();
  const [selectedLang, setSelectedLang] = useState(
    languages.find((l) => l.code === i18n.language) || languages[0]
  );
  const [open, setOpen] = useState(false);

  const handleSelect = (lang) => {
    setSelectedLang(lang);
    i18n.changeLanguage(lang.code);
    setOpen(false);
  };

  return (
    <nav className="navbar" aria-label="Navbar">
      <img src="/assets/images/logo.webp" alt="Netflix Logo" className="logo" />

      <div className="group">
        <div className="language-selector" onClick={() => setOpen(!open)}>
          <div className="language-changer">
            {selectedLang.icon && (
              <img
                src={selectedLang.icon}
                alt={selectedLang.label}
                className="lang-icon"
              />
            )}
            <span>{selectedLang.label}</span>
            <span className="arrow-navbar">&#9662;</span>
          </div>

          {open && (
            <ul className="lang-dropdown">
              {languages.map((lang) => (
                <li key={lang.code} onClick={() => handleSelect(lang)}>
                  {lang.icon && (
                    <img
                      src={lang.icon}
                      alt={lang.label}
                      className="lang-icon"
                    />
                  )}
                  <span>{lang.label}</span>
                </li>
              ))}
            </ul>
          )}
        </div>

        <button className="sign-in-btn">{t("navbarSignIn")}</button>
      </div>
    </nav>
  );
};

export default Navbar;
