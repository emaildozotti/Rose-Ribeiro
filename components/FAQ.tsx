import React, { useState } from 'react';
import { CONTENT } from '../constants';
import { ChevronDown, ChevronUp } from 'lucide-react';
import Button from './Button';

interface FAQProps {
  id?: string;
  nextSectionId?: string;
}

const FAQ: React.FC<FAQProps> = ({ id, nextSectionId }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const scrollToNext = () => {
    if (nextSectionId) {
      const element = document.getElementById(nextSectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <section id={id} className="py-20 md:py-28 bg-lightGray">
      <div className="container mx-auto px-6 md:px-12 max-w-3xl">
        <h2
          data-aos="fade-up"
          className="text-center font-heading font-bold text-3xl mb-12 text-dark"
        >
          {CONTENT.faq.title}
        </h2>

        <div className="space-y-4 mb-16">
          {CONTENT.faq.questions.map((item, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden"
            >
              <button
                onClick={() => toggleAccordion(index)}
                className="w-full px-6 py-5 text-left flex justify-between items-center focus:outline-none hover:bg-gray-50 transition-colors"
              >
                <span className="font-heading font-medium text-dark text-lg pr-4">
                  {item.q}
                </span>
                <span className="text-primary flex-shrink-0">
                  {openIndex === index ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                </span>
              </button>

              <div
                className={`transition-all duration-300 ease-in-out overflow-hidden ${openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}
              >
                <div className="px-6 pb-6 text-gray-600 font-sans font-light leading-relaxed">
                  {item.a}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default FAQ;