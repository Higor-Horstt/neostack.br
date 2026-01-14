import { useRef, useLayoutEffect } from "react";
import { gsap } from "../../lib";

import DrawLines from "./DrawLines";

export default function AnimationLine() {
  const refPoint = useRef(null);
  const refMainLine = useRef(null);
  const refLines = useRef([]);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: refPoint.current,
          start: "top center",
          end: "+=100%",
          scrub: true,
        },
      });

      tl.from(refPoint.current, {
        opacity: 0,
        duration: 1,
      });

      tl.from(
        refMainLine.current,
        {
          scaleY: 0,
          transformOrigin: "top",
          duration: 10,
        },
        "<"
      );

      const tlLines = gsap.timeline({
        scrollTrigger: {
          trigger: refPoint.current,
          start: "top 40%",
          end: "+=80%",
          scrub: true,
        },
      });

      refLines.current.forEach((line) => {
        if (!line) return;
        const side = line.dataset.side;

        tlLines.from(
          line,
          {
            scaleX: 0,
            transformOrigin: side,
          },
          ">"
        );
      });
    }, refPoint);

    return () => ctx.revert();
  }, []);

  return (
    <div className="hidden md:block w-max">
      <div
        ref={refPoint}
        className="absolute z-10 w-5 h-5 -top-12 left-1/2 -translate-1/2 rounded-full border-6 border-[#0097D3] bg-transparent shadow-2xl"
      />
      <div
        ref={refMainLine}
        className="absolute -top-10 left-1/2 -translate-x-1/2 h-11/12 w-1 bg-linear-to-b from-[#0097D3] from-90% to-[#00000000] rounded-2xl"
      />

      <DrawLines ref={refLines} nCards={3} />
    </div>
  );
}
