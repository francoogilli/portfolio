import React from 'react';
import { motion } from "framer-motion";
import User from '../icons/User';
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
        duration: 0.5,  // Ajusta este valor según tus preferencias
      },
    }),
  };
  function About({ }) {
    
    return(
        <section
            id="about" 
            className="mb-28 max-w-[45rem] mx-auto text-center leading-9 px-6 sm:mb-40 scroll-mt-28"
        >            
            <motion.h2 
                variants={fadeInAnimationVariants}
                initial="initial"
                whileInView="animate"
                viewport={{
                  once: true,
                }}
            className='font-bold text-4xl text-white justify-center gap-3 flex pb-7 items-center pt-15'><><User/></>Perfil</motion.h2>
            <motion.p 
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            viewport={{
              once: true,
            }}
            className=" text-gray-300">
                Después de completar la escuela Secundaria, decidí seguir mi pasión por la programación. Me inscribí en la carrera de <span className='font-semibold'>Técnico en Programación</span>, donde profundicé en el mundo del <span className="font-semibold">Desarrollo Web</span>. <span className="italic">Mi parte favorita de la programación</span> es el aspecto de resolución de problemas. Me encanta la sensación de finalmente encontrar una solución a un problema. Mi conjunto de tecnologías abarca tanto el <span className="font-medium">Frontend</span> como el <span className="font-medium">Backend</span>, y he aplicado el patrón de arquitectura MVC en .NET, integrando APIs externas y bases de datos.
            </motion.p>
            <motion.p
             variants={fadeInAnimationVariants}
             initial="initial"
             whileInView="animate"
             viewport={{
               once: true,
             }}
             className='mt-3 text-gray-300'>
                Siempre ansioso por adquirir nuevas habilidades. Actualmente estoy buscando una posición como <span className='font-semibold'>desarrollador</span> de software.
            </motion.p>
        </section>
    );

}
export default About;