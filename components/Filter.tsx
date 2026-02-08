import React from 'react';
import { CONTENT } from '../constants';
import { CheckCircle2, XCircle } from 'lucide-react';
import Button from './Button';

interface FilterProps {
  id?: string;
  nextSectionId?: string;
}

const Filter: React.FC<FilterProps> = ({ id, nextSectionId }) => {
  const scrollToNext = () => {
    if (nextSectionId) {
      const element = document.getElementById(nextSectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <section id={id} className="py-20 md:py-28 bg-offWhite">
      <div className="container mx-auto px-6 md:px-12 max-w-5xl">
        <h2
          data-aos="fade-up"
          className="text-center font-heading font-bold text-3xl md:text-4xl mb-16 text-dark"
        >
          {CONTENT.filter.title}
        </h2>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          {/* YES Column */}
          <div
            data-aos="fade-right"
            className="bg-white p-8 md:p-10 rounded-xl shadow-md border border-green-100"
          >
            <h3 className="font-heading font-bold text-xl text-green-700 mb-8 border-b border-green-100 pb-4">
              SIM, É PARA VOCÊ SE:
            </h3>
            <ul className="space-y-6">
              {CONTENT.filter.yes.map((item, idx) => (
                <li key={idx} className="flex items-start gap-4">
                  <CheckCircle2 className="text-green-600 flex-shrink-0 mt-1" size={24} />
                  <span className="text-gray-800 font-sans leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* NO Column */}
          <div
            data-aos="fade-left"
            className="bg-white p-8 md:p-10 rounded-xl shadow-md border border-red-100"
          >
            <h3 className="font-heading font-bold text-xl text-red-700 mb-8 border-b border-red-100 pb-4">
              NÃO É PARA VOCÊ SE:
            </h3>
            <ul className="space-y-6">
              {CONTENT.filter.no.map((item, idx) => (
                <li key={idx} className="flex items-start gap-4">
                  <XCircle className="text-red-500 flex-shrink-0 mt-1" size={24} />
                  <span className="text-gray-800 font-sans leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="text-center" data-aos="fade-up">
          <Button onClick={scrollToNext}>
            {CONTENT.filter.cta}
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Filter;