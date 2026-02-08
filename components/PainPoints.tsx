import React from 'react';
import { CONTENT } from '../constants';

interface PainPointsProps {
  id?: string;
}

const PainPoints: React.FC<PainPointsProps> = ({ id }) => {
  return (
    <section id={id} className="py-20 md:py-28 bg-white text-dark">
      <div className="container mx-auto px-6 md:px-12 max-w-4xl">
        <div className="text-center mb-16">
          <h2
            data-aos="fade-up"
            className="font-heading font-bold text-2xl md:text-4xl mb-8 text-dark"
          >
            {CONTENT.mirror.title}
          </h2>
          <div className="space-y-4">
            {CONTENT.mirror.body.map((text, idx) => (
              <p key={idx} className="text-lg md:text-xl font-light leading-relaxed text-gray-800">
                {text}
              </p>
            ))}
          </div>
        </div>

        <div className="grid gap-8 md:grid-cols-2 mb-16">
          {CONTENT.mirror.points.map((point, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              className="bg-offWhite p-8 rounded-lg border-l-4 border-primary shadow-sm hover:shadow-md transition-shadow"
            >
              <h3 className="font-heading font-semibold text-lg mb-3 text-dark">
                {point.title}
              </h3>
              <p className="font-sans text-gray-800 leading-relaxed">
                {point.desc}
              </p>
            </div>
          ))}
        </div>

        <div
          data-aos="zoom-in"
          className="text-center bg-gray-50 p-8 md:p-12 rounded-xl border border-gray-100"
        >
          <p className="font-heading font-medium text-xl md:text-2xl text-primary italic">
            {CONTENT.mirror.impactQuote}
          </p>
        </div>
      </div>
    </section>
  );
};

export default PainPoints;