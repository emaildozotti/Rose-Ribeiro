import React from 'react';
import { CONTENT } from '../constants';
import { Heart, BookOpen, ShieldCheck } from 'lucide-react';

const icons = [Heart, BookOpen, ShieldCheck];

interface MethodProps {
  id?: string;
}

const Method: React.FC<MethodProps> = ({ id }) => {
  return (
    <section id={id} className="py-20 md:py-28 bg-white">
      <div className="container mx-auto px-6 md:px-12 max-w-6xl">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2
            data-aos="fade-up"
            className="font-heading font-bold text-3xl md:text-4xl mb-6 text-dark"
          >
            {CONTENT.method.title}
          </h2>
          <p
            data-aos="fade-up"
            data-aos-delay="100"
            className="text-lg text-gray-800 font-light"
          >
            {CONTENT.method.intro}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          {CONTENT.method.pillars.map((pillar, idx) => {
            const Icon = icons[idx];
            return (
              <div
                key={idx}
                data-aos="fade-up"
                data-aos-delay={idx * 150}
                className="bg-offWhite p-10 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col items-center text-center border-t-4 border-primary"
              >
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-primary mb-6 shadow-sm">
                  <Icon size={32} strokeWidth={1.5} />
                </div>
                <h3 className="font-heading font-semibold text-xl mb-4 text-dark">
                  {pillar.title}
                </h3>
                <p className="font-sans text-gray-800 leading-relaxed">
                  {pillar.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Method;