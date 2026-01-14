import { useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import CardProject from "../ui/CardProject";

import projectOneImage from "../../assets/images/project-1.png";

gsap.registerPlugin(ScrollTrigger);

export default function SectionProjects() {
  const sectionRef = useRef(null);
  const projectOneRef = useRef(null);
  // const projectTwoRef = useRef(null);

  useLayoutEffect(() => {
    const angles = { left: 359, right: 1 };
    const opacity = { value: 0 };

    const ctx = gsap.context(
      () => {
        ScrollTrigger.create({
          trigger: sectionRef.current,
          start: "top top",
          end: "+=900%",
          pin: true,
          pinSpacing: true,
        });

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top top",
            end: "+=800%",
            scrub: 1,
          },
        });

        tl.to(angles, {
          left: 108,
          right: 252,
          ease: "none",
          duration: 1.5,
          delay: 10,
          onUpdate: () => {
            document.documentElement.style.setProperty(
              "--angle-left",
              angles.left + "deg"
            );
            document.documentElement.style.setProperty(
              "--angle-right",
              angles.right + "deg"
            );
          },
        });

        tl.to(
          opacity,
          {
            value: 1,
            duration: 1.5,
            ease: "none",
            onUpdate: () => {
              document.documentElement.style.setProperty(
                "--opacity-level",
                opacity.value
              );
            },
          },
          "<"
        );

        tl.from(
          projectOneRef.current,
          {
            rotateX: 95,
            y: "30vh",
            z: -500,
            opacity: .5,
            duration: 1,
            ease: "power1.inOut",
          },
          ">"
        );

        // tl.to(projectOneRef.current, {
        //     xPercent: -100,
        //     opacity: 0,
        //     scale: 0.8,
        // })

        // tl.from(projectTwoRef.current, {
        //     xPercent: 100,
        //     opacity: 0,
        //     scale: 0.8,
        // }, "-=.5")
      },
      sectionRef,
      angles,
      opacity
    );

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="projects"
      className="absolute bottom-0 z-0 w-full h-dvh flex flex-col bg-(--bg-projects-section) overflow-hidden"
    >
      <div
        data-organizer="container-relative"
        className="relative w-full h-full"
      >
        <div data-organizer="container-background">
          <div className="absolute w-1/2 h-full left-0 bg-[conic-gradient(from_90deg_at_10%_75%,#F8F8F8_0deg,#000000_0deg,#AAAAAA_var(--angle-left),#F8F8F8_360deg)] mix-blend-color-dodge xl:bg-[conic-gradient(from_90deg_at_25%_75%,#F8F8F8_0deg,#000000_0deg,#AAAAAA_var(--angle-left),#F8F8F8_360deg)]" />

          <div className="absolute w-1/2 h-full right-0 bg-[conic-gradient(from_270deg_at_90%_75%,#F8F8F8_0deg,#AAAAAA_var(--angle-right),#000000_360deg,#F8F8F8_360deg)] mix-blend-color-dodge xl:bg-[conic-gradient(from_270deg_at_75%_75%,#F8F8F8_0deg,#AAAAAA_var(--angle-right),#000000_360deg,#F8F8F8_360deg)]" />

          <div className="absolute w-full h-full bg-linear-to-b from-[#08081B] via-80% via-[#08081b00] to-[#08081B] xl:via-75%" />
        </div>

        <h1
          data-organizer="title"
          className="absolute left-1/2 -translate-x-1/2 z-0 font-[Orbitron] font-bold text-7xl text-center h-min top-2/7 bg-linear-to-b from-[#99999900] from-20% to-[#ffffffb0] to-70% bg-clip-text text-transparent mix-blend-luminosity opacity-(--opacity-level) sm:text-[80px] md:text-[160px] lg:text-[190px] 2xl:text-[250px] 2xl:top-16"
        >
          Projetos
        </h1>

        <div
          data-organizer="Projects"
          className="absolute top-0 w-full h-full perspective-[2000px] transform-style-3d flex items-center justify-center"
        >
          <CardProject
            ref={projectOneRef}
            image={projectOneImage}
            title="Biblioteca Coronel"
            description="Biblioteca Coronel é um sistema de gerenciamento bibliotecário desenvolvido para a E. E. Cel. Américo Vespúcio de Carvalho. Algumas das principais ferramentas do projeto são: mutenção do acervo escolar, ranking de leitura, notificações ao expirar o prazo de devolução, entre outras."
          />

          {/* <CardProject 
                        ref={projectTwoRef} 
                        image={projectOneImage} 
                        title="Projeto 2" 
                        description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae porro cupiditate et aliquam quis delectus omnis nostrum nam ratione alias enim veniam, illum quod explicabo? Quisquam vero reprehenderit adipisci. Assumenda error enim iste consequatur asperiores facilis repellendus maiores." 
                    /> */}
        </div>
      </div>
    </section>
  );
}
