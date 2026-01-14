import { forwardRef, useImperativeHandle, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const CardAdvantage = forwardRef(({ description, image }, ref) => {

    const refCaption = useRef(null);
    const refLocal = useRef(null);

    useImperativeHandle(ref, () => ({ el: refLocal.current }));

    return (

      <div ref={refLocal} className="w-full h-auto px-12 overflow-hidden flex flex-col items-center mt-5 mx-auto z-20">

        <div ref={refCaption} className="fixed left-1/2 bottom-1/2 translate-y-1/2 -translate-x-1/2 z-10 py-2 px-6">
          <p className="z-10 font-[Orbitron] text-lg text-(--text-secondary-white) font-medium max-w-3xl text-center opacity-80">
            {description}
          </p>
          <div className="absolute top-0 left-0 -z-10 h-full w-full bg-black opacity-30 rounded-lg" />
        </div>

        <img src={image} alt="Confiável" className="mt-0 rounded-2xl brightness-80 opacity-40 grayscale-80 shadow-[0_0_10px_#0a0a0a]" />

      </div>
      
    );
})

export default CardAdvantage;