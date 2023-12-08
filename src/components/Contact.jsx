import React, { useRef, useState } from "react";
import { motion } from "framer-motion";


const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

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
  };

  return (
    <section id="contact" className="bg-[#14181a] rounded-3xl mb-7 mx-5 max-w-[40rem] lg:mx-auto scroll-mt-28 sm:mb-4 ">
      <motion.div
        className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
      >
        <div className="flex flex-col gap-4">
          <h3 className="text-white text-center font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[40px]">Contact.</h3>

          <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col gap-6">
            <label className="flex flex-col">
              <span className="text-white font-medium mb-4">Your Name</span>
              <input type="text" name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="What's your name?"
                className="bg-zinc-800 py-3 px-6 text-[.9375rem] placeholder:text-secondary text-white rounded-2xl outline-none border-none font-medium"
              />
            </label>
            <label className="flex flex-col">
              <span className="text-white font-medium mb-4">Your email</span>
              <input type="email" name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="What's your email address?"
                className="bg-zinc-800 py-3 px-6 text-[.9375rem] placeholder:text-secondary text-white rounded-2xl outline-none border-none font-medium"
              />
            </label>
            <label className="flex flex-col">
              <span className="text-white font-medium mb-4">Your Message</span>
              <textarea
                rows={7}
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="What you want to say?"
                className="bg-zinc-800 py-3 px-6 text-[.9375rem] placeholder:text-secondary text-white rounded-2xl outline-none border-none font-medium "
              />
            </label>

            <div className="flex items-center justify-center">
              <button
                type="submit"
                className="bg-zinc-800 py-3 px-8 rounded-2xl outline-none w-fit text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 font-bold shadow-md shadow-primary"
              >
                {loading ? "Sending..." : "Send"}
              </button>
            </div>
          </form>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
