import { forwardRef, useImperativeHandle, useMemo, useRef } from "react";
import clsx from "clsx";

const CardService = forwardRef(
  (
    {
      side = "right",
      pathIcon,
      viewBox,
      hash,
      subtitle,
      cards = [],
      description = "",
      autoScrollOnFocus = false
    },
    ref
  ) => {
    const isLeft = side === "left";
    const localRef = useRef(null);

    const styles = useMemo(
      () => ({
        article: clsx(
          "card-service",
          "relative overflow-hidden group z-10",
          "flex flex-col text-[var(--text-secondary-white)]",
          "bg-gradient-to-r rounded-[40px]",
          "transition-all duration-300 ease-in-out",
          "w-60 h-13 max-w-120 hover:w-full hover:h-min hover:rounded-3xl hover:pb-4 hover:px-6",
          "sm:w-70 sm:h-14",
          "lg:hover:px-8",
          "2xl:w-90 2xl:h-16 xl:rounded-4xl xl:hover:pb-6",
          isLeft
            ? "from-[#0011AC] to-[#0097D3]"
            : "from-[#0097D3] to-[#0011AC]"
        ),

        header: clsx(
          "absolute top-0 left-0 w-full h-13 flex items-center",
          "sm:h-14",
          "2xl:h-16",
          isLeft ? "flex-row-reverse pr-1 pl-5 group-hover:px-0" : "flex-row pr-5 pl-1 group-hover:px-0"
        ),

        iconWrapper: clsx(
          "flex justify-center",
          "py-3 h-11 rounded-full bg-[#011743] aspect-square",
          "transition-all duration-400 ease-in-out",
          "group-hover:translate-y-2",
          "sm:h-12 sm:py-3.5",
          "2xl:h-14 2xl:py-4",
          isLeft 
            ? "group-hover:mr-5 lg:group-hover:mr-6" 
            : "group-hover:ml-5 lg:group-hover:ml-6"
        ),

        title: clsx(
          "mx-auto flex items-center gap-1",
          "font-[Orbitron] font-medium text-sm",
          "text-[var(--text-primary-white)]",
          "transition-all duration-400 ease-in-out",
          "group-hover:translate-y-2 group-hover:text-base",
          "sm:text-base",
          "md:group-hover:text-lg",
          "2xl:text-xl xl:group-hover:text-xl",
          isLeft 
            ? "group-hover:ml-6 lg:group-hover:ml-8" 
            : "group-hover:ml-6"
        ),

        reveal: clsx(
          "opacity-0 translate-y-2 group-hover:opacity-100 group-hover:-translate-y-2",  
          "group-focus:opacity-100 group-focus:-translate-y-2 transition-all duration-400",
        ),

        side: {
          right: "self-end",
          left: "self-start",
        },

      }),
      [isLeft]
    );

    useImperativeHandle(ref, () => localRef.current)

    const handleFocus = () => {
      if (!autoScrollOnFocus) return;

      localRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "center"
      });
    };

    return (

      <article
        ref={localRef}
        className={clsx(styles.article, styles.side[side])}
        tabIndex={0}
        aria-labelledby={`service-${hash}`}
        onFocus={handleFocus}
        data-side={side}
      >
        {/* Header */}
        <header className={styles.header}>
          <div className={styles.iconWrapper}>
            <svg
              className="h-full stroke-[#109CFF] stroke-12"
              viewBox={viewBox}
              fill="none"
              xmlns="http://www.w3.org/2000/svg"  
              aria-hidden="true"
            >
              <path d={pathIcon} strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>

          <h2 id={`service-${hash}`} className={styles.title}>
            <span className="text-lg font-normal sm:text-xl xl:text-2xl">#</span>
            <span>{hash}</span>
          </h2>
        </header>

        {/* Description */}
        <p className={clsx("text-sm mx-0 mt-20 text-justify md:text-base md:mt-22 lg:mt-24", styles.reveal)}>
          {description}
        </p>

        {/* Subtitle */}
        <h3 className={clsx("mx-0 text-base mt-5 font-semibold", styles.reveal)}>
          {subtitle}
        </h3>

        {/* Cards */}
        <ul className={clsx("w-full mx-0 mt-5 flex flex-col gap-2 lg:w-90 lg:mx-auto", styles.reveal)}>
          {cards.map((item, idx) => (
            <li key={`${item}-${idx}`}
              className="flex h-10 w-full items-center justify-center rounded-md bg-[#01174366] text-sm lg:text-base lg:h-12"
            >
              {item}
            </li>
          ))}
        </ul>
      </article>
    );
  }
);

CardService.displayName = "CardService";
export default CardService;