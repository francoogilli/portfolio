import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "emailjs-com";
import SendIcon from "../icons/SendIcon.jsx";
import LoadingIcon from "../icons/LoadingIcon.jsx";
import GmailIcon from "../icons/GmailIcon.jsx";
import WhatsAppIcon from "../icons/WhatsAppIcon.jsx";
import LinkedInIcon from "../icons/LinkedInIcon.jsx";
import EmailIcon from "../icons/EmailIcon.jsx";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState({ text: "", color: "" });

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: "Franco Gilli",
          from_email: form.email,
          to_email: "francogilli10@gmail.com",
          message: form.message,
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setLoading(false);
          setMessage({ text: "Thank you. I will get back to you as soon as possible.", color: "text-green-500" });

          setForm({
            name: "",
            email: "",
            message: "",
          });

          // Clear the success message after 5 seconds
          setTimeout(() => {
            setMessage({ text: "", color: "" });
          }, 5000);
        },
        (error) => {
          setLoading(false);
          console.error(error);

          setMessage({ text: "Ahh, something went wrong. Please try again.", color: "text-red-500" });
        }
      );
  };

  return (
    <section id="contact" className="bg-[#14181a] rounded-3xl mb-7 mx-5 mt-32 max-w-[40rem] lg:mx-auto scroll-mt-28 sm:mb-4 ">
      <motion.div className="flex-[0.75] bg-black-100 p-8 rounded-2xl">
        <div className="flex flex-col gap-4">
          <h3 className="text-white text-center font-black md:text-[45px] sm:text-[45px] xs:text-[40px] text-[40px] flex items-center justify-center gap-4"><EmailIcon/>Contact</h3>

          <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col gap-6">
            <label className="flex flex-col">
              <span className="text-white font-medium mb-4">Your Name</span>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Enter your name"
                className="bg-zinc-800 py-3 px-5 text-[.9375rem] placeholder:text-secondary text-white rounded-2xl outline-none border-none font-medium"
              />
            </label>
            <label className="flex flex-col">
              <span className="text-white font-medium mb-4">Your email</span>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Enter your email address"
                className="bg-zinc-800 py-3 px-5 text-[.9375rem] placeholder:text-secondary text-white rounded-2xl outline-none border-none font-medium"
              />
            </label>
            <label className="flex flex-col">
              <span className="text-white font-medium mb-4">Your Message</span>
              <textarea
                rows={3}
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Type your message here"
                className="bg-zinc-800 py-3 px-5 text-[.9375rem] placeholder:text-secondary text-white rounded-2xl outline-none border-none font-medium "
              />
            </label>

            <div className="flex items-center justify-center">
              <button
                type="submit"
                className="flex justify-center align-center  py-3.5 px-14 rounded-full outline-none w-fit gap-1 text-white font-semibold bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br  shadow-sm  shadow-blue-800/80"
              >
                {loading ? <LoadingIcon/> : (<>Send<SendIcon/></>)}
              </button>
            </div>
          </form>

          {message.text && (
            <div className={`${message.color} font-semibold text-center mt-2`}>{message.text}</div>
          )}        
        </div>
        <div className="text-white font-semibold text-2xl text-center pt-7">or</div>
          <div className="flex items-center justify-center pt-7 gap-4">
            <a href="https://wa.me/543563491814" className="text-white bg-white/5 
              border border-white/10 rounded-full
              flex justify-center items-center gap-x-2
              py-1 px-2 md:py-2 md:px-4
              text-xs md:text-sm
              transition
              hover:scale-110 hover:bg-white/10" target="_blank" rel="noopener noreferrer">
              <WhatsAppIcon/>
              WhatsApp</a>
            <a href="mailto:francogilli10@gmail.com" className="text-white bg-white/5 
              border border-white/10 rounded-full
              flex justify-center items-center gap-x-2
              py-1 px-2 md:py-2 md:px-4
              text-xs md:text-sm
              transition
              hover:scale-110 hover:bg-white/10" target="_blank" rel="noopener noreferrer">
              <GmailIcon/>
            Gmail</a>
            <a href="https://www.linkedin.com/in/franco-gilli/" className="
            text-white bg-white/5 
              border border-white/10 rounded-full
              flex justify-center items-center gap-x-2
              py-1 px-2 md:py-2 md:px-4
              text-xs md:text-sm
              transition
              hover:scale-110 hover:bg-white/10"
              target="_blank" 
              rel="noopener noreferrer">
              <LinkedInIcon/>
            LinkedIn</a>
          </div>     
      </motion.div>
      
    </section>
  );
};

export default Contact;
