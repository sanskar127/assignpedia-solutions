import { useEffect, useState } from 'react';
import { getFaqContent } from './getFaqContent';
import FaqFeature from './FaqFeature';
import SectionTitle from 'components/common/SectionTitle';

const FaqSection = ({ faqHtmlContent = '' }) => {
  const [faqsContent, setfaqsContent] = useState([]);
  const [openIndex, setOpenIndex] = useState(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const parsed = getFaqContent(faqHtmlContent);
    setfaqsContent(parsed);
  }, [faqHtmlContent]);

  const toggleIndex = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  if (!faqsContent) {
    return null;
  }

  return (
    <section id="features" className="bg-primary/5 overflow-hidden py-16 md:py-20 lg:py-20">
      <div className="container">
        <div className="text-center text-primary pb-5">Faqs</div>
        <SectionTitle
          title="FAQ"
          paragraph="Here’s how I would rephrase your questions with a touch of personalization and clarity"
          center
        />

        <div className="w-full md:max-w-[800px] mx-auto grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-1 gap-2 mt-10">
          {faqsContent.map((faq, index) => (
            <FaqFeature key={index} faq={faq} index={index} isOpen={openIndex === index} toggleIndex={toggleIndex} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
