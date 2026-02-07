import React from 'react';
import { CONTENT } from '../constants';

interface StoryProps {
  id?: string;
}

const Story: React.FC<StoryProps> = ({ id }) => {
  return (
    <section id={id} className="py-24 md:py-32 bg-[#FAF8F6] relative overflow-hidden">
      {/* Decorative background quote mark */}
      <div className="absolute top-0 right-0 text-[#E07A5F] opacity-[0.03] select-none pointer-events-none transform translate-x-1/4 -translate-y-1/4">
        <svg width="400" height="400" fill="currentColor" viewBox="0 0 24 24">
          <path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H16.017C15.4647 8 15.017 8.44772 15.017 9V12C15.017 12.5523 14.5693 13 14.017 13H13.017V21H14.017ZM6.017 21L6.017 18C6.017 16.8954 6.91243 16 8.017 16H11.017C11.5693 16 12.017 15.5523 12.017 15V9C12.017 8.44772 11.5693 8 11.017 8H8.017C7.46472 8 7.017 8.44772 7.017 9V12C7.017 12.5523 6.56929 13 6.017 13H5.017V21H6.017Z" />
        </svg>
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">

          {/* Image with Decorative Frame */}
          <div
            data-aos="fade-right"
            className="w-full lg:w-5/12"
          >
            <div className="relative">
              {/* Decorative border behind image */}
              <div className="absolute -top-6 -left-6 w-full h-full border border-primary/20 rounded-2xl hidden md:block"></div>

              <div className="relative rounded-2xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.1)] aspect-[4/5]">
                <img
                  src="https://picsum.photos/600/750"
                  alt="Rose Ribeiro Casual"
                  className="object-cover w-full h-full hover:scale-105 transition-transform duration-1000"
                />
                {/* Subtle overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
              </div>

              {/* Floating detail */}
              <div className="absolute -bottom-8 -right-8 bg-white p-6 rounded-xl shadow-xl hidden md:block max-w-[200px] border border-gray-50">
                <p className="text-primary font-heading font-bold text-sm uppercase tracking-tighter">Missão</p>
                <p className="text-dark text-xs mt-2 italic font-light">"Transformar dores em degraus para a maturidade."</p>
              </div>
            </div>
          </div>

          {/* Text Content */}
          <div
            data-aos="fade-left"
            className="w-full lg:w-7/12"
          >
            <div className="max-w-2xl">
              <span className="text-primary font-bold tracking-[0.2em] text-xs uppercase mb-4 block">Sobre a Travessia</span>

              <h2 className="font-heading font-extrabold text-3xl md:text-4xl lg:text-5xl mb-10 text-dark leading-[1.15]">
                {CONTENT.connection.title}
              </h2>

              <div className="space-y-8 text-gray-600 font-sans text-lg md:text-xl font-light leading-relaxed text-left">
                {/* Individual paragraphs for better control */}
                <p className="border-l-2 border-primary/30 pl-6 italic text-gray-500">
                  {CONTENT.connection.body[0]}
                </p>

                <p>
                  {CONTENT.connection.body[1]} {CONTENT.connection.body[2]}
                </p>

                <div className="bg-white/50 backdrop-blur-sm p-8 rounded-2xl border border-primary/5 shadow-sm my-10">
                  <p className="text-primary font-semibold mb-2 uppercase text-sm tracking-widest">{CONTENT.connection.body[4]}</p>
                  <p className="text-dark font-medium text-xl leading-relaxed">
                    "{CONTENT.connection.body[5]}"
                  </p>
                </div>

                <p>
                  {CONTENT.connection.body[3]}
                </p>

                <p className="font-medium text-dark">
                  {CONTENT.connection.body[6]}
                </p>

                <p className="text-gray-700 bg-primary/5 p-6 rounded-lg border-l-4 border-primary">
                  {CONTENT.connection.body[7]}
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Story;