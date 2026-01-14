// LIBRARIES
import { clsx } from "../../lib";
import { landing } from "../../data/landing.js";
import PhoneIcon from "../../assets/icons/PhoneIcon.js";

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

// STYLES //
const styles = {

  header: clsx(
    "z-10",
    "flex flex-row",
    "w-full h-max px-5 mt-2 mb-0 mx-auto",
    "sm:w-10/12 sm:px-0",
    "md:w-full md:px-8 md:mt-0",
    "lg:px-15",
    "2xl:px-20",
  ),

  wrapperLogo: clsx(
    "md:flex-1",
  ),

  logo: clsx(
    "w-12 min-w-12 mt-4 aspect-square",
    "rounded-md drop-shadow-[0_0_8px_rgba(0,0,0,0.25)]",
    "sm:w-13 sm:mt-4",
    "lg:mt-6"
  ),

  wrapperNav: clsx(
    "relative",
    "hidden",
    "px-20 pt-7 mx-auto",
    "md:block",
    "lg:px-25 lg:pt-8",
  ),

  bgShape: clsx(
    "absolute top-0 left-1/2 -translate-x-1/2",
    "w-full h-full",
    "fill-[var(--bg-1)] drop-shadow-[0px_10px_100px_#5d697d80]",
  ),

  navList: clsx(
    "flex flex-row gap-10 justify-between",
    "text-sm text-[var(--text-secondary-white)] lg:text-base",
  ),

  navItem: clsx(
    "relative cursor-pointer",
    "hidden md:list-item",
    "transition-colors",
    "after:absolute after:left-0 after:-bottom-0.5",
    "after:w-full after:h-0.5",
    "after:bg-gray-400 after:rounded-2xl after:scale-x-0",
    "after:transition-transform after:duration-300 after:origin-left",
    "hover:after:scale-x-100",
    "hover:text-[var(--text-secondary-white)] hover:scale-105",
  ),

  wrapperBtn: clsx(
    "flex flex-1 justify-end",
    "mt-6",
    "text-nowrap",
    "lg:mt-8",
  ),

  button: clsx(
    "cursor-pointer",
    "w-auto h-min px-4 py-2",
    "font-[Orbitron] font-medium text-[#C6DBFF] text-sm",
    "bg-[#0e2f55e6] rounded-lg shadow-lg",
    "sm:px-5 sm:py-2.5",
    "lg:text-base",
  ),
}

export default function Header() {

  return (
    <header className={styles.header}>

      <div className={styles.wrapperLogo}>
        <a href="#home">
          <img
            src={landing.header.logo}
            alt="Logo da empresa"
            className={styles.logo}
          />
        </a>
      </div>

      <div className={styles.wrapperNav}>

        {/* BACKGROUND */}
        <svg
          className={styles.bgShape}
          viewBox="100 0 640 75"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path
            d="M736.828 0C737.358 0 737.434 0.667448 737.185 1.13604L703.595 64.3812C700.124 70.9155 693.33 75 685.931 75H151.532C144.133 75 137.339 70.9155 133.869 64.3814L100.082 0.768721C99.9089 0.441957 100.01 0.000115258 100.38 0H736.828Z"
          />
        </svg>

        <nav aria-label="Menu principal">
          <ul className={styles.navList}>

            {landing.header.nav.map(({ label, href }) => (
              <li key={label}>
                <a
                  href={href} 
                  onClick={(e) => handleNavClick(e, href)}
                  className={styles.navItem}
                >
                  {label}
                </a>
              </li>
            ))}

          </ul>
        </nav>

      </div>

      {/* BUTTON */}
      <div className={styles.wrapperBtn}>
        <a 
          href={"#contact"} 
          onClick={(e) => handleNavClick(e, "#contact")} 
          className={styles.button}>
          {landing.header.cta}

        </a>
      </div>
      
    </header>
  );
}