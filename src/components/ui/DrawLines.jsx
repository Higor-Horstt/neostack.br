import { forwardRef } from "react";

const config = {
    cardHeight: 140,
    gap: 200,
    alignCenter: 100,
    cardWidth: "560px",
    beginSide: "right",
}

function getSpaceLines(nCards) {
  return Array.from({ length: nCards }, (_, i) =>
    `${i * config.gap + i * config.cardHeight + config.alignCenter }px`
  );
}

function startOn(n) {
    if(n % 2 === 0) return "left"
    else return "right";
}

const DrawLines = forwardRef(({ nCards }, ref) => {

    const spaces = getSpaceLines(nCards);
    ref.current ||= [];

    return (
        <>
            {spaces.map((space, i) => (
            <div
                key={`line-${i}`}
                ref={(el) => (ref.current[i] = el)}
                className="absolute z-10 h-1 rounded-2xl bg-[#0097D3] w-[calc(50%-320px)] lg:w-[calc(50%-360px)] xl:w-[calc(50%-360px)]"
                style={{ 
                    top: space, 

// ---------------------------------------------------------------------------------------------//
//             | O PROBLEMA ESTÁ QUI, NESSE calc(50% - ${config.cardWidth}) ABAIXO |
// ---------------------------------------------------------------------------------------------//

                    // width: `calc(50% - ${config.cardWidth} )`, 
                    insetInline: startOn(i) === config.beginSide 
                        ? "auto 50%" 
                        : "50% auto",
                }}
                data-side={startOn(i)}
            />
            ))}
        </>
    );
});

DrawLines.displayName = "DrawLines";
export default DrawLines;