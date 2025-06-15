import { useTranslation } from "react-i18next";
import "./MoreReasons.css";

const MoreReasons = () => {
  const { t } = useTranslation();

  const reasons = [
    {
      title: t("reasonsCard1Title"),
      description: t("reasonsCard1Content"),
      icon: "/assets/icons/tv-icon.svg",
      alt: "TV icon representing watching on multiple devices",
    },
    {
      title: t("reasonsCard2Title"),
      description: t("reasonsCard2Content"),
      icon: "/assets/icons/download-icon.svg",
      alt: "Download icon representing offline viewing",
    },
    {
      title: t("reasonsCard3Title"),
      description: t("reasonsCard3Content"),
      icon: "/assets/icons/watch-icon.svg",
      alt: "Device icon representing watch anywhere feature",
    },
    {
      title: t("reasonsCard4Title"),
      description: t("reasonsCard4Content"),
      icon: "/assets/icons/kids-icon.svg",
      alt: "Kids icon representing children-friendly content",
    },
  ];

  return (
    <section className="more-reasons-wrapper" aria-labelledby="more-reasons-heading">
      <h2 id="more-reasons-heading">{t("reasonsTitle")}</h2>

      <div className="reasons-grid">
        {reasons.map((reason, index) => (
          <article key={index} className="reason-card">
            <h3>{reason.title}</h3>
            <p>{reason.description}</p>
            <img
              src={reason.icon}
              alt={reason.alt}
              className="reason-icon"
              loading="lazy"
              width="64"
              height="64"
            />
          </article>
        ))}
      </div>
    </section>
  );
};

export default MoreReasons;
