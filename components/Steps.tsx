import React from 'react';
import { CONTENT } from '../constants';
import Button from './Button';
import { ChevronRight } from 'lucide-react';

interface StepsProps {
  id?: string;
  nextSectionId?: string;
}

const Steps: React.FC<StepsProps> = ({ id, nextSectionId }) => {
  const scrollToNext = () => {
    if (nextSectionId) {
      const element = document.getElementById(nextSectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <section id={id} className="py-20 md:py-28 bg-white">
      <div className="container mx-auto px-6 md:px-12 max-w-4xl text-center">
        <h2
          data-aos="fade-up"
          className="font-heading font-bold text-3xl md:text-4xl mb-6 text-dark"
        >
          {CONTENT.steps.title}
        </h2>
        <p
          data-aos="fade-up"
          className="text-gray-800 font-light text-lg mb-16 max-w-2xl mx-auto"
        >
          {CONTENT.steps.intro}
        </p>

        <div className="grid md:grid-cols-3 gap-8 mb-16 relative">
          {CONTENT.steps.steps.map((step, idx) => (
            <div
              key={idx}
              data-aos="fade-up"
              data-aos-delay={idx * 200}
              className="relative bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center hover:shadow-md transition-shadow group"
            >
              <div className="w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold text-xl mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                {idx + 1}
              </div>
              <h3 className="font-heading font-bold text-lg text-dark mb-4 uppercase tracking-wide">
                {step.title}
              </h3>
              <p className="font-sans text-gray-700 text-sm md:text-base leading-relaxed">
                {step.desc}
              </p>

              {/* Arrow for desktop visualization */}
              {idx < 2 && (
                <div className="hidden md:block absolute top-1/2 -right-6 transform -translate-y-1/2 text-primary/20 z-10">
                  <ChevronRight size={32} />
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Steps;