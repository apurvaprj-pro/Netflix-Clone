import { useTranslation } from "react-i18next";
import "./Footer.css";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="footer" role="contentinfo" aria-label="Site footer">
      <p className="footer-text" aria-label={t("footerCopyright")}>
        {t("footerCopyright")}
      </p>
    </footer>
  );
};

export default Footer;
