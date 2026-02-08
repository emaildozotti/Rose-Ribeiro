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
            className="w-56 h-56 md:w-64 md:h-64 flex-shrink-0"
          >
            <img
              src="https://i.imgur.com/pkhqq69.jpeg"
              alt="Rose Ribeiro"
              className="w-full h-full object-cover rounded-full border-4 border-primary shadow-2xl"
            />
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