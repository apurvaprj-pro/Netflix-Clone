import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import FAQItem from './FAQItem/FAQItem';
import './FAQSection.css';

const FAQSection = () => {
  const { t } = useTranslation();

  const faqData = [
    {
      question: t('faq1Question'),
      answer: t('faq1Answer'),
    },
    {
      question: t('faq2Question'),
      answer: t('faq2Answer'),
    },
    {
      question: t('faq3Question'),
      answer: t('faq3Answer'),
    },
    {
      question: t('faq4Question'),
      answer: t('faq4Answer'),
    },
    {
      question: t('faq5Question'),
      answer: t('faq5Answer'),
    },
    {
      question: t('faq6Question'),
      answer: t('faq6Answer'),
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="faq-section">
      <h1>{t('faqTitle')}</h1>
      {faqData.map((item, index) => (
        <FAQItem
          key={index}
          question={item.question}
          answer={item.answer}
          isOpen={openIndex === index}
          onToggle={() => handleToggle(index)}
        />
      ))}
    </div>
  );
};

export default FAQSection;
