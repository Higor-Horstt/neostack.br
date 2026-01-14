import Header from "./Header";
import Welcome from "../ui/GroupWelcome";

import bgHero from "/src/assets/images/background-hero.jpg"

const heroWrapper =
    "absolute top-0 left-0 z-10 overflow-hidden flex flex-col w-full h-full " +
    "rounded  ";

export default function SectionHero() {
    return(
        
        <section className="relative z-10 w-full h-dvh max-h-275 overflow-hidden bg-(--bg-1) md:px-2">

            <div className="md:mt-3 lg:mt-5 h-full w-full overflow-hidden">
                <img src={bgHero} alt="" className="h-full w-full object-cover object-top-left md:object-[40%_top] lg:md:object-[50%_top]" />
            </div>
            <div className={heroWrapper}>
                <Header />
                <Welcome />
            </div>
        </section>
    );
}