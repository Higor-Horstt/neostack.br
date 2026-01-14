import ChartIcon from "../../assets/icons/chartIcon.tsx";
import CSSIcon from "../../assets/icons/CSSIcon.tsx";
import FigmaIcon from "../../assets/icons/figmaIcon.tsx";
import GitHubIcon from "../../assets/icons/GitHubIcon.tsx";
import GitIcon from "../../assets/icons/GitIcon.tsx";
import GraphGlIcon from "../../assets/icons/GraphGlIcon.tsx";
import GsapIcon from "../../assets/icons/GsapIcon.tsx";
import HTMLIcon from "../../assets/icons/HTMLIcon.tsx";
import JavaScriptIcon from "../../assets/icons/javaScriptIcon.tsx";
import MySQLIcon from "../../assets/icons/MySQLIcon.tsx";
import NodeIcon from "../../assets/icons/NodeIcon.tsx";
import ReactIcon from "../../assets/icons/ReactIcon.tsx";
import VSCodeIcon from "../../assets/icons/VSCodeIcon.tsx";


export default function SectionTechLoop() {

    return (

        <section className="w-full flex h-16 bg-(--bg-1) sm:h-18 md:h-20">

            <div className="flex w-auto h-full items-center overflow-x-scroll [&::-webkit-scrollbar]:hidden pointer-events-none">

                <div className="w-min flex h-6 gap-18 pr-18 grayscale-100 sm:h-7 sm:gap-22 sm:pr-22 md:gap-24 md:pr-24 lg:gap-26 lg:pr-26 xl:h-8 xl:gap-32 xl:pr-32" style={{animation: "infiniteScrollLine 25s infinite linear"}}>

                    <GsapIcon className="h-full brightness-80 fill-white" />
                    <FigmaIcon className="h-full" />
                    <JavaScriptIcon className="h-full brightness-80" />
                    <HTMLIcon className="h-full brightness-80" />
                    <CSSIcon className="h-full" />
                    <ReactIcon className="h-full" />
                    <ChartIcon className="h-full" />
                    <NodeIcon className="h-full" />
                    <GitHubIcon className="h-full invert-60" />
                    <GitIcon className="h-full brightness-125" />
                    <MySQLIcon className="h-full brightness-200" />
                    <GraphGlIcon className="h-full" />
                    <VSCodeIcon className="h-full brightness-90" />

                </div>

                <div aria-hidden className="w-min flex h-6 gap-18 pr-18 grayscale-100 sm:h-7 sm:gap-22 sm:pr-22 md:gap-24 md:pr-24 lg:gap-26 lg:pr-26 xl:h-8 xl:gap-32 xl:pr-32" style={{animation: "infiniteScrollLine 25s infinite linear"}}>

                    <GsapIcon className="h-full brightness-80 fill-white" />
                    <FigmaIcon className="h-full" />
                    <JavaScriptIcon className="h-full brightness-80" />
                    <HTMLIcon className="h-full brightness-80" />
                    <CSSIcon className="h-full" />
                    <ReactIcon className="h-full" />
                    <ChartIcon className="h-full" />
                    <NodeIcon className="h-full" />
                    <GitHubIcon className="h-full invert-60" />
                    <GitIcon className="h-full brightness-125" />
                    <MySQLIcon className="h-full brightness-200" />
                    <GraphGlIcon className="h-full" />
                    <VSCodeIcon className="h-full brightness-90" />

                </div>

            </div>
            
        </section>
    );
}