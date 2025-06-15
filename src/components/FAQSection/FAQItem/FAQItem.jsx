import { useRef, useEffect, useState } from 'react';
import './FAQItem.css';

const FAQItem = ({ question, answer, isOpen, onToggle }) => {
  const contentRef = useRef(null);
  const [maxHeight, setMaxHeight] = useState('0px');

  useEffect(() => {
    const el = contentRef.current;
    if (el) {
      if (isOpen) {
        requestAnimationFrame(() => {
          setMaxHeight(el.scrollHeight + 'px');
        });
      } else {
        setMaxHeight('0px');
      }
    }
  }, [isOpen, answer]); 

  return (
    <div className="faq-item">
      <div className="faq-question" onClick={onToggle}>
        <h2>{question}</h2>
        <span className={`faq-icon ${isOpen ? 'rotated' : ''}`}>+</span>
      </div>
      <div
        className="faq-answer-wrapper"
        style={{ maxHeight, transition: 'max-height 0.7s ease-in-out', overflow: 'hidden' }}
        ref={contentRef}
      >
        <div className="faq-answer">
          <p dangerouslySetInnerHTML={{ __html: answer }} />
        </div>
      </div>
    </div>
  );
};

export default FAQItem;
