import React from 'react';
import { CONTENT } from '../constants';
import Button from './Button';

interface CtaSectionProps {
    id?: string;
}

const CtaSection: React.FC<CtaSectionProps> = ({ id }) => {
    const handleWhatsAppClick = () => {
        // Standardizing on the provided WhatsApp format
        const phoneNumber = "5512992518420";
        const message = encodeURIComponent("Olá Rose, assisti ao seu vídeo no site e gostaria de agendar minha Sessão de Clareza para darmos início à minha travessia.");
        window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
    };

    return (
        <section id={id} className="py-24 bg-dark text-white text-center relative overflow-hidden">
            {/* Background Decorative patterns */}
            <div className="absolute inset-0 opacity-5 pointer-events-none">
                <div className="absolute top-0 left-0 w-64 h-64 bg-primary rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2"></div>
                <div className="absolute bottom-0 right-0 w-64 h-64 bg-primary rounded-full blur-[100px] translate-x-1/2 translate-y-1/2"></div>
            </div>

            <div className="container mx-auto px-6 relative z-10 max-w-4xl">
                <h2
                    data-aos="fade-up"
                    className="font-heading font-bold text-3xl md:text-5xl mb-8 leading-tight"
                >
                    {CONTENT.steps.cta}
                </h2>

                <p
                    data-aos="fade-up"
                    data-aos-delay="100"
                    className="text-lg md:text-xl text-gray-100 font-light mb-12 max-w-2xl mx-auto"
                >
                    A maturidade emocional é uma decisão. Toque no botão abaixo para garantir sua vaga e iniciar sua travessia hoje mesmo.
                </p>

                <div data-aos="zoom-in" data-aos-delay="200">
                    <Button
                        pulsing={true}
                        onClick={handleWhatsAppClick}
                        className="text-lg md:text-xl px-12 py-5 bg-primary hover:bg-primaryHover border-none"
                    >
                        AGENDAR MEU HORÁRIO!
                    </Button>
                </div>

                <div className="mt-8 flex flex-col items-center gap-2 text-gray-200 text-sm font-light">
                    <span className="flex items-center gap-2">
                        <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                        </svg>
                        Atendimento 100% Online e Sigiloso
                    </span>
                    <span>Resultados Reais através da Maturidade e Fé</span>
                </div>
            </div>
        </section>
    );
};

export default CtaSection;
