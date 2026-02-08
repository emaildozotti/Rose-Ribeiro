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
          <div className="w-full md:w-1/2 text-left order-1">
            <div data-aos="fade-right" data-aos-duration="1000">
              <span className="inline-block px-4 py-1.5 mb-6 text-xs font-bold tracking-widest text-primary uppercase bg-primary/10 rounded-full">
                Terapia & Maturidade
              </span>
              <h1 className="font-heading font-bold text-3xl md:text-5xl lg:text-6xl leading-tight mb-6 text-dark">
                {CONTENT.hero.headline}
              </h1>

              <p className="font-sans text-lg md:text-xl font-light mb-10 leading-relaxed text-gray-800 max-w-xl">
                {CONTENT.hero.subheadline}
              </p>

              <div className="flex flex-col sm:flex-row items-center gap-4">
                <div className="w-full sm:w-auto">
                  <Button onClick={scrollToNext} className="w-full sm:min-w-[280px]">
                    {CONTENT.hero.cta}
                  </Button>
                  <p className="mt-4 text-xs md:text-sm text-gray-600 font-light tracking-wide text-center md:text-left">
                    {CONTENT.hero.subCta}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Image Placeholder */}
          <div className="w-full md:w-1/2 order-2 mt-8 md:mt-0" data-aos="fade-left" data-aos-delay="200" data-aos-duration="1000">
            <div className="relative mx-auto w-full max-w-md lg:max-w-lg aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl border-8 border-white bg-gray-100">
              <img
                src="https://i.pinimg.com/736x/c1/c9/04/c1c904661f90f48ceeef167f3336cb75.jpg"
                alt="Luz e Ordem Interior"
                className="w-full h-full object-cover"
              />
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