
export default function BackgroundAnimation() {

    return (

        <div className="absolute overflow-hidden inset-0 w-full h-dvh bg-[#05070f]">

            <div data-organizer="background-shapes"
                 className="relative w-full h-full">
                <div
                className="
                            absolute inset-0 z-0
                            bg-[linear-gradient(180deg,#020617_0%,#050816_50%,#020617_100%)]
                        "
                />
                <div
                className="
                            absolute inset-0 z-0
                            bg-flow
                            bg-[radial-gradient(800px_circle_at_20%_30%,rgba(99,102,241,0.35),transparent_40%),
                                radial-gradient(700px_circle_at_80%_40%,rgba(56,189,248,0.30),transparent_42%),
                                radial-gradient(600px_circle_at_50%_70%,rgba(139,92,246,0.22),transparent_45%)]
                        "
                />
                <div
                className="
                            absolute inset-0 z-0
                            bg-light-sweep
                            pointer-events-none
                            mix-blend-screen
                            bg-[linear-gradient(115deg,transparent_35%,rgba(125,211,252,0.18),transparent_55%)]
                            blur-3xl
                        "
                />
            </div>
        </div>
    );
}