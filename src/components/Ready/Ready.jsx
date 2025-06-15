import { useTranslation } from "react-i18next";
import "./Ready.css";

const Ready = () => {
  const { t } = useTranslation();

  return (
    <section className="ready-2" aria-labelledby="ready-heading">
      <p id="ready-heading" className="ready-p">
        {t("readyP")}
      </p>

      <form
        className="email-form"
        onSubmit={(e) => {
          e.preventDefault();
        }}
        role="form"
        aria-label="Sign-up form to create or restart your membership"
      >
        <input
          id="email"
          name="email"
          type="email"
          placeholder={t("emailPlaceholder")}
          className="email-input"
          required
          aria-required="true"
          autoComplete="email"
          inputMode="email"
        />

        <button
          type="submit"
          className="get-started-btn"
          aria-label={t("getStarted")}
          title={t("getStarted")}
        >
          {t("getStarted")}
          <img
            src="/assets/icons/arrow-right.svg"
            alt=""
            role="presentation"
            aria-hidden="true"
          />
        </button>
      </form>
    </section>
  );
};

export default Ready;
