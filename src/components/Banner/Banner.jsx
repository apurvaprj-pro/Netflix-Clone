import { useTranslation } from "react-i18next";
import Navbar from "../Navbar/Navbar";
import "./Banner.css";

const Banner = () => {
  const { t } = useTranslation();
  return (
    <section className="banner" aria-label="banner">
      <Navbar />
      <div className="banner-content">
        <h1 dangerouslySetInnerHTML={{ __html: t("bannerH1") }} />
        <p>{t("bannerP")}</p>
        <p className="ready">{t("readyP")}</p>
        <form className="email-form" onSubmit={(e) => e.preventDefault()}>
          <input
            type="email"
            placeholder={t("emailPlaceholder")}
            className="email-input"
            required
          />
          <button 
            type="submit" 
            className="get-started-btn"
          >
            {t("getStarted" )}
            <img src="/assets/icons/arrow-right.svg" alt="" />
          </button>
        </form>
      </div>
    </section>
  )
}

export default Banner