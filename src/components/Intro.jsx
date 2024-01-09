import React from "react";
import { motion } from "framer-motion";
import SectionContainer from "./SectionContainer";
import foto from "../assets/img/profile.webp";
import LinkedIn from "../icons/LinkedIn";
import Email from "../icons/Email";
import Github from "../icons/Github";

function Intro() {
  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };
  const fallIn = {
    hidden: { y: -200, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.7, ease: "easeOut" } },
  };
  const riseIn = {
    hidden: { y: 200, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.4, ease: "easeOut" } },
  };
  const slideIn = {
    hidden: { y: -50, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5, ease: "easeInOut" } },
  };

  return (
    <motion.main
      id="home"
      className="px-4 pb-8"
      variants={fadeIn}
      initial="hidden"
      animate="visible"
    >
      <SectionContainer className="py-44 pb-32 text-center flex flex-col items-center justify-center">
        <motion.img
          src={foto}
          alt="Franco Gilli photo"
          className="rounded-full w-24 h-24 mb-6"
          variants={fallIn}
          initial="hidden"
          animate="visible"
        />
        <motion.h1
          className="text-white text-[2.3rem] md:text-6xl lg:text-7xl font-bold flex flex-row gap-x-4 pb-6 lg:pb-10"
          variants={slideIn}
        >
          Hey, I'm Franco
        </motion.h1>
        <motion.h2
          className="text-lg lg:text-xl text-balance max-w-[700px] text-white"
          variants={slideIn}
        >
          <span>
            My name is <span className="font-medium">Franco Gilli</span>,
            residing in{" "}
          </span>
          <span class="text-red-200">San Francisco, Córdoba, Argentina</span>.{" "}
          <span class="text-yellow-200">Full Stack developer</span>.{" "}
          <span class="text-sky-200">Specialized in creating unique applications.</span>
        </motion.h2>
        <nav class="flex gap-1 sm:gap-4 mt-8 flex-wrap justify-center">
          <motion.a
            target="_blank"
            href="https://www.linkedin.com/in/franco-gilli/"
            className="bg-white/10 border border-white/10 rounded-full flex
                         justify-center items-center gap-x-2 py-1 px-2 md:py-2 md:px-4 text-[.6875rem] md:text-base 
                         text-white/60 transition hover:scale-110 hover:bg-white/10 hover:text-white"
            variants={riseIn}
          >
            <LinkedIn />LinkedIn
          </motion.a>
          <motion.a
            target="_blank"
            href="https://github.com/francoogilli"
            className="bg-white/10 border border-white/10 rounded-full flex
                         justify-center items-center gap-x-2 py-1 px-2 md:py-2 md:px-4 text-[.6875rem] md:text-base 
                         text-white/60 transition hover:scale-110 hover:bg-white/10 hover:text-white"
            variants={riseIn}
          >
            <Github />GitHub
          </motion.a>
          <motion.a
            target="_blank"
            href="mailto:francogilli10@gmail.com"
            className="bg-white/10 border border-white/10 rounded-full flex
                         justify-center items-center gap-x-2 py-1 px-2 md:py-2 md:px-4 text-[.6875rem] md:text-base 
                         text-white/60 transition hover:scale-110 hover:bg-white/10 hover:text-white"
            variants={riseIn}
          >
            <Email />Gmail
          </motion.a>
        </nav>
      </SectionContainer>
    </motion.main>
  );
}

export default Intro;
