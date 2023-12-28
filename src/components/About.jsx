import React from 'react';
import { motion } from "framer-motion";

function About({ }) {
    
    return(
        <motion.section
            id="about"
            
            className="mb-28 max-w-[45rem] mx-auto text-center leading-9 px-6 sm:mb-40 scroll-mt-28"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.175 }}>
            
            <h2 className='font-bold text-4xl text-white justify-center flex pb-7 items-center pt-15'>About me</h2>
            <p className=" text-gray-300">
                After completing{" "}
                <span className="font-medium">Secondary School</span>, I decided to follow my passion for programming.
                I enrolled in a Programming Technician career, where I delved into the world of{" "}
                <span className="font-medium">Web Development</span>.{" "}
                <span className="italic">My favorite part of programming</span> is the
                problem-solving aspect. I love the
                feeling of finally figuring out a solution to a problem. My tech stack encompasses both{" "}
                <span className="font-medium">Frontend</span> and <span className="font-medium">Backend</span>,
                and I've applied the MVC architecture pattern in .NET, integrating external APIs and databases. 
            </p>
            <p className='mt-3 text-gray-300'>
                Always eager to acquire new skills. I am currently seeking a{" "}
                <span className="font-medium">full-time position</span> as a software developer.
            </p>
        </motion.section>
    );

}
export default About;