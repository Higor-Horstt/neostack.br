import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import SplitText from "gsap/SplitText";

import DrawCardsServices from "../ui/DrawCardServices";

gsap.registerPlugin(ScrollTrigger, SplitText);

// Data
const data = [
  {
    text: "Comece com uma",
    card: {
      title: "LandingPage",
      description:
        "É criada para ser direta: ideal para apresentar uma oferta específica, divulgar um serviço ou lançar algo novo, focando no que realmente importa e facilitando a ação do usuário.",
      subtitle: "Uma landing page bem pensada ajuda você a:",
      features: [
        "Atrair o público certo",
        "Gerar confiança logo no primeiro contato",
        "Apresentar sua oferta com clareza",
      ],
      side: "right",
      icon: "M102.66 21.2608L86.2771 36.52M29.7565 52.5823L6.00146 46.1574M37.1287 84.7069L21.5651 100.769M46.9584 6.00159L53.5115 29.2919M62.006 66.1549C61.6884 65.4213 61.6015 64.6114 61.7566 63.829C61.9117 63.0467 62.3017 62.3276 62.8765 61.7641C63.4513 61.2005 64.1847 60.8182 64.9827 60.6661C65.7806 60.514 66.6067 60.5992 67.355 60.9106L157.46 97.0508C158.262 97.3733 158.939 97.937 159.393 98.6607C159.848 99.3844 160.056 100.231 159.989 101.078C159.922 101.925 159.582 102.73 159.019 103.376C158.455 104.022 157.697 104.476 156.854 104.672L121.23 113.033C119.759 113.377 118.414 114.114 117.345 115.161C116.275 116.209 115.521 117.526 115.168 118.968L106.649 153.903C106.451 154.733 105.988 155.479 105.328 156.034C104.669 156.589 103.846 156.923 102.98 156.989C102.113 157.056 101.248 156.85 100.509 156.402C99.7692 155.954 99.1944 155.287 98.8672 154.498L62.006 66.1549Z",
      viewBox: "0 0 166 163",
    },
  },

  {
    text: "Evolua para uma",
    card: {
      title: "AplicaçãoWeb",
      description:
        "É desenvolvida para atender às necessidades específicas do seu negócio. Ela funciona direto no navegador e ajuda a organizar processos, simplificar tarefas e ganhar mais controle no dia a dia.",
      subtitle: "Com uma aplicação web você pode:",
      features: [
        "Automatizar tarefas repetitivas",
        "Facilitar o trabalho da equipe",
        "Acompanhar o crescimento do negócio",
      ],
      side: "left",
      icon: "M67.6 6V36.75M6 36.75H160M36.8 6V36.75M21.4 6H144.6C153.105 6 160 12.8836 160 21.375V113.625C160 122.116 153.105 129 144.6 129H21.4C12.8948 129 6 122.116 6 113.625V21.375C6 12.8836 12.8948 6 21.4 6Z",
      viewBox: "0 0 166 135",
    },
  },

  {
    text: "Domine com um",
    card: {
      title: "E-commerce",
      description:
        "Um e-commerce leva seus produtos para o online de forma prática e acessível. Ele organiza sua vitrine, facilita a compra e cria uma experiência simples e segura para quem compra.",
      subtitle: "Uma loja virtual bem construída permite:",
      features: [
        "Apresentar produtos de forma clara",
        "Tornar a compra simples e rápida",
        "Expandir suas vendas no digital",
      ],
      side: "right",
      icon: "M117.222 74.4C117.222 83.4704 113.617 92.1693 107.199 98.5831C100.781 104.997 92.0763 108.6 83 108.6C73.9237 108.6 65.2191 104.997 58.8012 98.5831C52.3833 92.1693 48.7778 83.4704 48.7778 74.4M6.88122 40.4907H159.119M9.42222 35.6428C7.20082 38.6028 6 42.2029 6 45.9028V159.9C6 164.435 7.80277 168.785 11.0117 171.992C14.2207 175.198 18.573 177 23.1111 177H142.889C147.427 177 151.779 175.198 154.988 171.992C158.197 168.785 160 164.435 160 159.9V45.9028C160 42.2029 158.799 38.6028 156.578 35.6428L139.467 12.84C137.873 10.7162 135.806 8.99251 133.43 7.8053C131.054 6.61808 128.434 6 125.778 6H40.2222C37.5658 6 34.9459 6.61808 32.5699 7.8053C30.1939 8.99251 28.1272 10.7162 26.5333 12.84L9.42222 35.6428Z",
      viewBox: "0 0 166 183",
    },
  },

];

export default function SectionServices() {

  const refSection = useRef(null);
  const refTitles = useRef([]);

  useLayoutEffect(
    () => {

      // Split Text
      const splits = refTitles.current
        .filter(Boolean)
        .map((el) => new SplitText(el, { 
          type: "words, chars",
          wordsClass: "word", 
        }));

      const ctx = gsap.context(() => {

        // Content Animation
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: refTitles.current[0],
            start: "top 20%",
            end: "+=200%",
            scrub: true,
            pin: refSection.current,
            pinSpacing: true,
            markers: true,
          },
        });

        tl.from(splits[0].chars,
          {
            opacity: 0,
            stagger: 0.1,
            ease: "steps(1)",
          },
        );

        tl.from(splits[1].chars,
          {
            opacity: 0,
            stagger: 0.1,
            ease: "steps(1)",
            delay: 3,
          },
        );

        tl.from(splits[2].chars,
          {
            opacity: 0,
            stagger: 0.1,
            ease: "steps(1)",
            delay: 1,
          },
        );

      }, refSection);

      return () => {
        splits.forEach(split => split.revert());
        ctx.revert();
      };
    }, []
  );

  return (
    <section
      id="services"
      className="relative flex flex-col w-full h-auto pt-30 pb-100 bg-transparent sm:pt-40"
    >

      <DrawCardsServices services={data} /> 

      <div ref={refSection} className="mt-40 z-10 flex flex-col w-full font-[Orbitron] font-medium text-(--text-primary-white) sm:mt-0">
        <p
          ref={(el) => (refTitles.current[0] = el)}
          className="mx-auto mt-0 text-2xl md:text-3xl 2xl:text-4xl"
        >
          Seja qual for...
        </p>
        <div className="flex flex-col mt-50 mx-4 items-center gap-6 sm:mt-60 sm:items-end sm:mr-6 sm:gap-4 xl:mr-20">
          <p ref={(el) => (refTitles.current[1] = el)} className="text-right text-lg md:text-xl lg:text-2xl 2xl:text-3xl">
            Não é só sobre ter um site.
          </p>
          <p ref={(el) => (refTitles.current[2] = el)} className="text-center text-xl md:text-2xl lg:text-3xl 2xl:text-4xl sm:text-right">
            É sobre como sua empresa é percebida.
          </p>
        </div>
      </div>
    </section>
  );
}
