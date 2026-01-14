import { forwardRef } from "react";

const CardProject = forwardRef((props, ref) => {

    return (

        <article data-organizer="project" 
                 ref={ref}
                 className="absolute w-11/12 h-auto aspect-none flex flex-col bg-gray-800 m-auto rounded-2xl p-2 xl:w-3/4 lg:aspect-video"
        >

            <div className="relative w-full h-full">

                <div className="relative w-full h-auto aspect-video bg-cover bg-no-repeat rounded-xl after:absolute after:w-full after:h-1/3 after:bg-linear-to-b after:from-transparent after:to-gray-900 after:to-50% after:bottom-0 after:rounded-b-xl after:opacity-95 lg:h-full lg:after:h-1/2"
                     style={{ backgroundImage: `url(${props.image})` }} 
                />

                <div className="relative w-auto h-full mx-2 my-4 z-10 px-1 sm:px-2 lg:h-auto lg:absolute lg:inset-x-5 lg:bottom-5 xl:inset-x-10 xl:bottom-8 xl:w-4/5">

                    <h2 className="font-[Orbitron] font-medium text-xl text-(--text-secondary-white) md:text-2xl lg:text-(--text-primary-white)">
                        {props.title}
                    </h2>

                    <p className="font-[Inter] text-sm text-(--text-tertiary-white) mt-2 md:text-base lg:text-left lg:mt-4 truncate line-clamp-8 text-wrap lg:text-(--text-secondary-white)">
                        {props.description}
                    </p>

                </div>
            </div>

        </article>
        
    );
})

export default CardProject;