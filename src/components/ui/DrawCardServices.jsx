import { useRef, useLayoutEffect } from "react";
import { gsap, SplitText, clsx } from "../../lib";

import CardService from "./CardService";
import AnimationLine from "./AnimationLine";

// Motion config
const motion = {
  text: {
    opacity: 0,
    stagger: 0.08,
    y: -20,
    rotation: 6,
    origin: "0% 100%",
    ease: "sine.inOut",
  },

  card: {
    opacity: 0,
    offsetX: 100,
  },

  container: {
    yPercent: -110,
    ease: "power2.inOut",
  },
};

// Styles
const styles = {
  container: clsx(
    "relative z-10 overflow-visible",
    "grid grid-cols-1 auto-rows-[140px] gap-y-30",
    "w-full sm:gap-y-40",
    "md:gap-y-50 md:w-full",
  ),

  containerGroup: clsx(
    "z-20 hover:z-50",
    "flex flex-col gap-[20px]",
    "w-full h-min px-4",
    "ease-in-out duration-400",
    "has-[.card-service:hover]:-translate-y-10",
    "sm:gap-[25px]",
    "md:gap-[30px] md:px-10",
    "lg:px-20",
    "2xl:px-40"
  ),

  positionContainer: {
    right: "mr-0 ml-auto",
    left: "ml-0 mr-auto",
  },

  text: clsx(
    "mx-2",
    "font-[Orbitron] font-semibold text-lg text-[var(--text-primary-white)]",
    "sm:text-xl",
    "md:text-2xl",
    "2xl:text-3xl",
  ),

  side: {
    right: "self-end",
    left: "self-start",
  },
};

export default function DrawCardsServices({ services = [] }) {
  const refContainer = useRef(null);
  const refText = useRef([]);
  const refCards = useRef([]);

  useLayoutEffect(() => {
    // Content Animation
    const ctx = gsap.context(() => {
      // Split Text
      const splits = refText.current
        .filter(Boolean)
        .map((el) => new SplitText(el, { type: "chars" }));

      refCards.current.forEach((card, i) => {
        const text = refText.current[i];

        const side = card.dataset.side;
        const offsetX =
          side === "right" ? motion.card.offsetX : -motion.card.offsetX;

        gsap.from(splits[i].chars, {
          opacity: motion.text.opacity,
          y: motion.text.y,
          rotation: gsap.utils.random(
            -motion.text.rotation,
            motion.text.rotation
          ),
          transformOrigin: motion.text.origin,
          stagger: motion.text.stagger,
          ease: motion.text.ease,

          scrollTrigger: {
            trigger: text,
            start: "top 80%",
            end: "+=20%",
            scrub: true,
          },
        });

        gsap.fromTo(
          card,
          {
            opacity: motion.card.opacity,
            x: offsetX,
          },
          {
            opacity: 1,
            x: 0,

            scrollTrigger: {
              trigger: card,
              start: "top 80%",
              end: "+=20%",
              scrub: true,
            },
          }
        );
      });

      // gsap.to(refContainer.current, {
      //     yPercent: motion.container.yPercent,
      //     ease: motion.container.ease,

      //     scrollTrigger: {
      //         trigger: refContainer.current,
      //         start: "top 10%",
      //         end: "+=100%",
      //         scrub: true,
      //         markers: false,
      //     },
      // });

      return () => splits.forEach((split) => split.revert());
    }, refContainer);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={refContainer} className={styles.container}>
      {services.map((service, idx) => (
        <div
          key={service.card.title}
          className={clsx(
            styles.containerGroup,
            styles.positionContainer[service.card.side]
          )}
        >
          <p
            className={clsx(styles.text, styles.side[service.card.side])}
            ref={(el) => (refText.current[idx] = el)}
          >
            {service.text}
          </p>

          <CardService
            data-organizer="card"
            hash={service.card.title}
            description={service.card.description}
            subtitle={service.card.subtitle}
            cards={service.card.features}
            side={service.card.side}
            pathIcon={service.card.icon}
            viewBox={service.card.viewBox}
            ref={(el) => (refCards.current[idx] = el)}
          />
        </div>
      ))}

      <AnimationLine />
    </div>
  );
}
