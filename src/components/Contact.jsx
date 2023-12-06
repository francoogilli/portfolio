import React from "react";
import { motion } from "framer-motion";

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.02 * index,
    },
  }),
};

function Contact() {
  return (
    <section
      id="contact"
      className="mb-28 max-w-[53rem] mx-auto scroll-mt-28 text-center sm:mb-40 p-6"
    >
      <motion.h2
        className="font-bold text-6xl text-white pb-10 items-center pt-10"
        variants={fadeInAnimationVariants}
        initial="initial"
        whileInView="animate"
        viewport={{
          once: true,
        }}
      >
        Contact me
      </motion.h2>

      {/* Contact Links */}
      <div className="flex justify-center gap-2 space-x-4">
        
      <a
          href="https://wa.me/543563491814"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-[#515157] font-semibold text-lg rounded-full px-3 py-1  text-white  mb-2"
        >
          WhatsApp
        </a>

        <a
          href="mailto:francogilli10@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-[#515157] rounded-full px-3 py-1 font-semibold text-lg text-white mr-2 mb-2"
        >
          Gmail
        </a>

        
        <a
          href="https://www.linkedin.com/in/franco-gilli/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-[#515157] rounded-full px-3 py-1 font-semibold text-lg text-white mr-2 mb-2"
        >
          LinkedIn
        </a>

        
      </div>
    </section>
  );
}

export default Contact;
