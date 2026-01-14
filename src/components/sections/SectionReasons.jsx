import { useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import SplitText from "gsap/SplitText";

import CardAdvantage from "../ui/CardAdvantage";

import professionalImage from "../../assets/images/professional.png";
import reliableImage from "../../assets/images/reliable.jpg";
import authorityImage from "../../assets/images/authority.png";

gsap.registerPlugin(ScrollTrigger, SplitText);

const dataCards = [
  {
    title: "Profissionalismo",
    image: professionalImage,
    description:
      "Um site bem desenvolvido transmite mais credibilidade, reforça sua imagem profissional e melhora a confiança dos clientes.",
  },

  {
    title: "Confiança",
    image: reliableImage,
    description:
      "Uma experiência consistente gera segurança. Design, organização e funcionamento trabalham juntos para mostrar que sua empresa é confiável.",
  },

  {
    title: "Autoridade",
    image: authorityImage,
    description:
      "Quando a mensagem é clara, a decisão fica mais fácil. O visitante entende rapidamente quem você é, o que faz e como entrar em contato.",
  },
];

export default function SectionReasons() {
  const refSection = useRef(null);
  const refTitle = useRef(null);
  const refSubtitle = useRef([]);
  const refCards = useRef([]);
  const refCaptions = useRef([]);
  const refTexts = useRef([]);

  useLayoutEffect(() => {
    const splitsTitle = new SplitText(refTitle.current, {
      type: "words, chars",
      wordsClass: "word",
    });
    const splitsTextOne = new SplitText(refTexts.current[0], { type: "chars" });
    const splitsTextThree = new SplitText(refTexts.current[2], {
      type: "chars",
    });

    const ctx = gsap.context(
      () => {
        gsap.from(refTitle.current, {
          opacity: 0,

          scrollTrigger: {
            trigger: refTitle.current,
            start: "top 20%",
            end: "+=20%",
            scrub: true,
          },
        });

        ScrollTrigger.create({
          trigger: refSection.current,
          start: "top top",
          end: "+=800%",
          pin: true,
          pinSpacing: true,
        });

        // Timeline

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: refSection.current,
            start: "top top",
            end: "+=600%",
            scrub: true,
          },
        });

        tl.to(
          splitsTitle.chars,
          {
            color: "var(--text-secondary-white)",
            stagger: 0.05,
          },
          ">"
        );

        dataCards.forEach((card, i) => {
          tl.from(
            refCards.current[i],
            {
              opacity: 0,
              y: 50,
              duration: 1,
              ease: "power1.inOut",
            },
            "-=.5"
          );

          tl.from(
            refCaptions.current[i],
            {
              opacity: 0,
              y: 50,
              duration: 0.5,
            },
            ">-=.5"
          );

          tl.fromTo(
            refSubtitle.current[i],
            {
              clipPath: "polygon(0 0, 0 0, 0 100%, 0% 100%)",
            },
            {
              clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
              duration: 1.5,
              ease: "power4.inOut",
            },
            "<"
          );

          tl.to(
            refSubtitle.current[i],
            {
              opacity: 0,
              ease: "power1.inOut",
            },
            ">+=1"
          );

          tl.to(
            refCaptions.current[i],
            {
              opacity: 0,
              y: -50,
              duration: 0.5,
            },
            "<"
          );

          tl.to(
            refCards.current[i],
            {
              opacity: 0,
              y: -50,
              duration: 0.5,
            },
            ">"
          );
        });

        tl.to(refTitle.current, {
          opacity: 0,
          y: -50,
          duration: 1,
        });

        tl.from(splitsTextOne.chars, {
          opacity: 0,
          y: -20,
          rotate: "-6 6",
          stagger: 0.1,
        });

        tl.from(refTexts.current[1], {
          opacity: 0,
          y: 20,
          ease: "power1.inOut",
          duration: 0.5,
          delay: 1,
        });

        tl.from(refTexts.current[2], {
          opacity: 0,
          y: 10,
          duration: 0.5,
          delay: 1,
        });

        tl.from(
          splitsTextThree.chars,
          {
            color: "#eeeeee11",
            stagger: 0.1,
            ease: "steps(1)",
          },
          "<"
        );

        // End

        refTexts.current.forEach((text) => {
          tl.to(text, {
            opacity: 0,
          });
        });
      },
      refSection,
      refTexts
    );

    return () => ctx.revert();
  }, []);

  return (
    <section ref={refSection} className="z-20 flex flex-col w-full h-dvh pt-10">
      <div className="flex flex-col w-11/12 mx-4 sm:mx-6 sm:mt-5 md:flex-row md:mx-auto md:gap-20 lg:mt-0  xl:px-5">
        <h1
          ref={refTitle}
          className="w-full font-[Orbitron] font-semibold text-lg text-[#eeeeee22] text-nowrap md:text-xl md:w-max lg:text-3xl xl:text-4xl"
        >
          Com a NeoStack, <br />
          sua presença digital transmite:
        </h1>

        <div id="purpose" className="relative flex flex-col w-full z-20 self-end h-18 overflow-hidden mt-10 md:mt-0 lg:w-100">
          {dataCards.map((card, i) => (
            <span
              ref={(el) => (refSubtitle.current[i] = el)}
              key={"card-title" + i}
              className="absolute top-0 left-1/2 -translate-x-1/2 font-[Orbitron] font-semibold text-xl mix-blend-screen leading-10 px-4 rounded-sm bg-(--text-tertiary-white) sm:top-5 sm:px-6 lg:left-0 lg:translate-0 lg:text-3xl lg:leading-12 xl:leading-14 xl:top-4 xl:px-8"
            >
              {card.title}
            </span>
          ))}
        </div>
      </div>

      <div className="relative w-full h-dvh mt-0 overflow-hidden sm:mt-10 xl:mt-10">
        {dataCards.map((card, i) => (
          <>
            <div
              ref={(el) => (refCards.current[i] = el)}
              key={"card-image" + i}
              className="absolute w-full h-auto px-1 overflow-hidden mx-auto sm:px-2 md:w-11/12 md:left-1/2 md:-translate-x-1/2 md:px-0  xl:px-5"
            >
              <img
                src={card.image}
                alt="Confiável"
                className="mt-0 rounded-xl brightness-70 opacity-30 grayscale-50 shadow-[0_0_10px_#0a0a0a] xl:rounded-2xl"
              />
            </div>

            <div
              ref={(el) => (refCaptions.current[i] = el)}
              key={"card-description" + i}
              className="fixed left-1/2 bottom-6 -translate-x-1/2 z-10 py-2 w-full px-6 sm:bottom-15 md:w-11/12 md:left-1/2 md:-translate-x-1/2 md:px-10 md:py-4 xl:max-w-4xl xl:bottom-6"
            >
              <p className="z-10 font-[Inter] text-sm text-(--text-secondary-white) leading-6 w-full  text-justify opacity-80 sm:text-center md:text-base xl:text-lg">
                {card.description}
              </p>
              <div className="absolute top-0 left-0 -z-10 h-full w-full bg-black opacity-30 rounded-lg" />
            </div>
          </>
        ))}
      </div>

      <div className="absolute top-1/2 -translate-y-1/2 w-full h-dvh px-5 flex flex-col items-center justify-center font-[Orbitron] font-medium text-(--text-primary-white)">
        <p
          ref={(el) => (refTexts.current[0] = el)}
          className="text-xl font-semibold md:text-2xl xl:text-3xl"
        >
          Tecnologia não é detalhe
        </p>
        <p
          ref={(el) => (refTexts.current[1] = el)}
          className="text-lg text-center mt-30 opacity-80 font-medium lg:text-xl xl:text-2xl xl:mt-50"
        >
          É o que separa empresas comuns
        </p>
        <p
          ref={(el) => (refTexts.current[2] = el)}
          className="text-2xl text-center mt-10 font-semibold lg:text-3xl xl:text-4xl xl:mt-10"
        >
          de marcas que se <span className="text-[#589DC1]">destacam</span>
        </p>
      </div>
    </section>
  );
}
