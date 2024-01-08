import React from "react";
import SectionContainer from "./SectionContainer";
import foto from "../assets/img/midudev2.png";
import LinkedIn from "../icons/LinkedIn";
import Email from "../icons/Email";
import Github from "../icons/Github";

function Intro() {
    return (
        <main id="home" className="px-4 pb-8">
            <SectionContainer className="py-44 pb-32 text-center flex flex-col items-center justify-center">
                <img 
                    src={foto} 
                    alt="Franco Gilli photo" 
                    className="rounded-full  w-24 h-24 mb-6 transition duration-700 ease-in-out hover:scale-110"
                />
                <h1 className="text-white text-[2.3rem] md:text-6xl lg:text-7xl font-bold flex flex-row gap-x-4 pb-6 lg:pb-10">
                    Hey, I'm Franco
                </h1>
                <h2 class="text-xl lg:text-xl text-balance max-w-[700px] text-white">
                <span>My name is <span className="font-medium ">Franco Gilli</span>, residing in </span><span
                    class="text-red-200">
                San Francisco, Córdoba, Argentina</span>
                . <span class="text-yellow-200">
                Full Stack developer</span>. <span class="text-sky-200"> 
                Specialized in creating unique applications.</span>
                </h2>
                <nav class="flex gap-1 sm:gap-4 mt-8 flex-wrap justify-center">
                    <a target="_blank" href="https://www.linkedin.com/in/franco-gilli/" className="bg-white/10 border border-white/10 rounded-full flex
                         justify-center items-center gap-x-2 py-1 px-2 md:py-2 md:px-4 text-[.6875rem] md:text-base 
                         text-white/60 transition hover:scale-110 hover:bg-white/10 hover:text-white">
                            <LinkedIn/>LinkedIn
                    </a>
                    <a target="_blank" href="https://github.com/francoogilli" className="bg-white/10 border border-white/10 rounded-full flex
                         justify-center items-center gap-x-2 py-1 px-2 md:py-2 md:px-4 text-[.6875rem] md:text-base 
                         text-white/60 transition hover:scale-110 hover:bg-white/10 hover:text-white">
                            <Github/>GitHub
                    </a>
                    <a target="_blank" href="mailto:francogilli10@gmail.com" className="bg-white/10 border border-white/10 rounded-full flex
                         justify-center items-center gap-x-2 py-1 px-2 md:py-2 md:px-4 text-[.6875rem] md:text-base 
                         text-white/60 transition hover:scale-110 hover:bg-white/10 hover:text-white"><Email/>francogilli10@gmail.com
                    </a>
                </nav>
            </SectionContainer>
        </main>
    );
}

export default Intro;
