import React from 'react';

interface VideoSectionProps {
  id?: string;
}

const VideoSection: React.FC<VideoSectionProps> = ({ id }) => {
  return (
    <section id={id} className="py-20 bg-white">
      <div className="container mx-auto px-6 md:px-12 max-w-4xl text-center">

        {/* Short Headline above the video */}
        <h2
          data-aos="fade-up"
          className="font-heading font-bold text-2xl md:text-4xl text-dark mb-12 max-w-2xl mx-auto leading-tight"
        >
          Um convite para a sua reconstrução emocional.
        </h2>

        <div
          data-aos="zoom-in"
          className="relative w-full max-w-[500px] mx-auto shadow-2xl rounded-2xl overflow-hidden bg-black"
        >
          {/* Wistia Player Element */}
          <div dangerouslySetInnerHTML={{
            __html: `
            <wistia-player media-id="6pj5uv62ku" aspect="0.75">
              <div class="wistia_preload_transcript_outer_wrapper" style="width: 100%; height: 100%; display:flex; justify-content:center; align-items: center; margin-top:-133.33%;">
                <div class="wistia_preload_transcript_inner_wrapper" style=" overflow: auto;">
                  <p class="wistia_preload_transcript_text" aria-hidden="true" tabindex="-1" style="text-align: justify; font-size: 5px !important;">
                    Olá, que alegria ter você por aqui. Preencher esse formulário, foi o primeiro ato de coragem que você teve por você mesma, em muito tempo. Eu sei que provavelmente, todo mundo aí fora te vê como a mulher forte. Aquela que cuida de todos, que dá conta de tudo, que carrega o mundo nas costas. Eu também já fui essa mulher. Eu sei exatamente o peso do silêncio que você sente quando deita a cabeça no travesseiro, mas eu preciso te dizer uma verdade com todo carinho. O caos que está aí fora só vai parar quando a gente tiver coragem de organizar a casa aqui de dentro. Eu não tenho uma pílula mágica para salvar o seu casamento ou tirar a sua dor amanhã, eu não vendo milagres, mas eu tenho caminho de maturidade, responsabilidade e fé. O mesmo caminho que eu trilhei quando parei de apenas sobreviver ao caos. Eu sou Rose Ribeiro, terapeuta de mulheres. E se você está cansada de tentar sozinha e está disposta a viver esse processo de verdade, eu estou pronta pra te ajudar. Toque no botão que aparece aqui embaixo agora e me chame no WhatsApp. Vamos conversar e entender se esse é o seu momento. Eu estou te esperando. Até mais.
                  </p>
                </div>
              </div>
            </wistia-player>
          `}} />
        </div>

        <div className="mt-8">
          <p className="text-sm text-gray-400 italic font-light">
            Toque no play para ouvir o que a Rose tem a te dizer.
          </p>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;