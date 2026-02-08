import React from 'react';
import { CONTENT } from '../constants';

interface BioProps {
  id?: string;
}

const Bio: React.FC<BioProps> = ({ id }) => {
  return (
    <section id={id} className="py-20 bg-dark text-white">
      <div className="container mx-auto px-6 md:px-12 max-w-5xl">
        <div className="flex flex-col md:flex-row items-center gap-12">

          {/* Circular/Rounded Image */}
          <div
            data-aos="zoom-in"
            className="w-48 h-48 md:w-64 md:h-64 flex-shrink-0 bg-primary/10 rounded-full border-4 border-primary flex items-center justify-center shadow-2xl"
          >
            <svg className="w-24 h-24 text-primary opacity-40" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
            </svg>
          </div>

          <div
            data-aos="fade-up"
            className="text-center md:text-left"
          >
            <h2 className="font-heading font-bold text-3xl mb-6 text-white">
              {CONTENT.bio.title}
            </h2>
            <div className="space-y-4 text-gray-100 font-light leading-relaxed text-lg">
              {CONTENT.bio.body.map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Bio;