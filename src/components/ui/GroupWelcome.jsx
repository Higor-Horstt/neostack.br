import { landing } from "../../data/landing";

import ArrowRightIcon from "../../assets/icons/ArrowRightIcon.tsx";

import gsap from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollToPlugin, ScrollTrigger);


const handleNavClick = (e, target) => {
  e.preventDefault();

  const element = document.querySelector(target);
  if (!element) return;

  const y = element.getBoundingClientRect().top + window.pageYOffset;

  gsap.to(window, {
    duration: 1,
    scrollTo: {
      y,
      autoKill: false
    },
    ease: "power3.inOut"
  });
};

export default function GroupWelcome() {

  return (

    <div className="relative z-10 w-full px-5 mx-auto my-auto h-max sm:max-w-xl sm:ml-0 lg:max-w-2xl xl:max-w-3xl">

      <div className="flex flex-col items-center max-w-md sm:mx-auto xl:max-w-lg 2xl:max-w-xl">

        <h1 className="text-3xl font-[Orbitron] font-bold leading-9 text-(--text-primary-white) whitespace-pre-line self-start sm:text-4xl sm:leading-11 xl:text-5xl xl:leading-15 ">
          {landing.hero.title} 
          <span className="bg-linear-to-r from-(--accent-a) to-(--accent-b) bg-clip-text text-transparent">
            {landing.hero.companyName}
          </span>
        </h1>
        
        <p className="w-full text-base text-(--text-secondary-white) text-justify leading-7 mt-6 xl:text-lg">
          {landing.hero.description}
        </p>

        <div className="flex flex-wrap w-max max-w-full font-[Orbitron] font-normal gap-x-10 gap-y-8 mt-15 justify-center md:flex-row self-start">
          
          <a href="https://wa.me/5533988182635" className="px-10 py-3 my-auto rounded-3xl bg-linear-to-r from-(--accent-a) to-(--accent-b) text-(--text-primary-white) text-sm hover:brightness-110 hover:-translate-y-0.5 xl:text-base">
            {landing.hero.cta1}
          </a>

          <a
            href={"#services"} 
            onClick={(e) => handleNavClick(e, "#services")} 
            className="flex flex-row items-center w-auto h-min text-sm text-(--text-secondary-white) my-auto gap-1 xl:text-base">
            <span className="">{landing.hero.cta2}</span>

            <ArrowRightIcon className="fill-(--text-secondary-white) h-3 stroke-2 xl:h-4" />
          </a>
        </div>

      </div>

    </div>
  );
}