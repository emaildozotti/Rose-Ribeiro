import React from 'react';
import { CONTENT } from '../constants';
import Button from './Button';

interface HeroProps {
  id?: string;
  nextSectionId?: string;
}

const Hero: React.FC<HeroProps> = ({ id, nextSectionId }) => {
  const scrollToNext = () => {
    if (nextSectionId) {
      const element = document.getElementById(nextSectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <section id={id} className="relative min-h-[90vh] md:h-screen w-full flex items-center bg-offWhite overflow-hidden pt-20 md:pt-0">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-lightGray hidden lg:block -skew-x-6 transform origin-right"></div>

      <div className="container mx-auto px-6 md:px-12 z-10">
        <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-20">

          {/* Left Column: Text Content */}
          <div className="w-full md:w-1/2 text-left order-2 md:order-1">
            <div data-aos="fade-right" data-aos-duration="1000">
              <span className="inline-block px-4 py-1.5 mb-6 text-xs font-bold tracking-widest text-primary uppercase bg-primary/10 rounded-full">
                Terapia & Maturidade
              </span>
              <h1 className="font-heading font-bold text-3xl md:text-5xl lg:text-6xl leading-tight mb-6 text-dark">
                {CONTENT.hero.headline}
              </h1>

              <p className="font-sans text-lg md:text-xl font-light mb-10 leading-relaxed text-gray-600 max-w-xl">
                {CONTENT.hero.subheadline}
              </p>

              <div className="flex flex-col sm:flex-row items-center gap-4">
                <div className="w-full sm:w-auto">
                  <Button onClick={scrollToNext} className="w-full sm:min-w-[280px]">
                    {CONTENT.hero.cta}
                  </Button>
                  <p className="mt-4 text-xs md:text-sm text-gray-400 font-light tracking-wide text-center md:text-left">
                    {CONTENT.hero.subCta}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Image Placeholder */}
          <div className="w-full md:w-1/2 order-1 md:order-2" data-aos="fade-left" data-aos-delay="200" data-aos-duration="1000">
            <div className="relative mx-auto w-full max-w-md lg:max-w-lg aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl bg-gray-200 border-8 border-white">
              {/* Placeholder showing where the expert's photo will be */}
              <div className="absolute inset-0 flex flex-col items-center justify-center text-gray-400 p-8 text-center bg-gradient-to-br from-gray-100 to-gray-300">
                <svg className="w-20 h-20 mb-4 opacity-20" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                </svg>
                <p className="font-heading font-medium text-lg text-gray-500 uppercase tracking-widest">Foto da Expert</p>
                <p className="text-sm mt-2 opacity-60">A imagem da Rose Ribeiro será posicionada aqui</p>
              </div>

              {/* Overlay highlight for premium look */}
              <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/20 to-transparent pointer-events-none"></div>
            </div>

            {/* Subtle decorative circles behind image */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary/10 rounded-full blur-3xl -z-10"></div>
            <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-primary/5 rounded-full blur-2xl -z-10"></div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;