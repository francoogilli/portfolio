import GmailIcon from "../icons/GmailIcon.jsx";
import WhatsAppIcon from "../icons/WhatsAppIcon.jsx";
import LinkedInIcon from "../icons/LinkedInIcon.jsx";
import EmailIcon from "../icons/EmailIcon.jsx";
import GitHubIcon from "../icons/GitHubIcon.jsx";

export default function Component() {
  return (
    <section id="contact" className="w-full py-12 md:py-24 mb-20">
      <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6 lg:gap-10">
        <div className="space-y-3">
          <h2 className="font-bold text-[2.5rem] text-white justify-center gap-3 flex pb-3 items-center pt-7"><EmailIcon />Contacto</h2>
          <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mx-auto dark:text-gray-400">
            Por cualquier duda o consulta no dudes en contactarme.
          </p>
        </div>
        <div className="grid grid-cols-1 pt-7 sm:pt-1 lg:grid-cols-4 gap-x-2 gap-y-3 w-40 mx-auto sm:w-full">
        <a
            className="bg-white/10 border border-white/10 rounded-full flex
            justify-center items-center gap-x-2 py-2 px-2 md:py-2 md:px-4 text-base md:text-base 
            text-white/70 transition hover:scale-110 hover:bg-white/10 hover:text-white"
            href="#"
          >
            <WhatsAppIcon className="h-5 w-5" />
            WhatsApp
          </a>
          <a
            className="bg-white/10 border border-white/10 rounded-full flex
            justify-center items-center gap-x-2 py-2 px-2 md:py-2 md:px-4 text-base md:text-base 
            text-white/70 transition hover:scale-110 hover:bg-white/10 hover:text-white"
            href="#"
          >
            <GmailIcon className="h-4 w-4" />
            Gmail
          </a>
          <a
            className="bg-white/10 border border-white/10 rounded-full flex
            justify-center items-center gap-x-2 py-2 px-2 md:py-2 md:px-4 text-base md:text-base 
            text-white/70 transition hover:scale-110 hover:bg-white/10 hover:text-white"
            href="#"
          >
            <GitHubIcon className="h-4 w-4" />
            GitHub
          </a>
          <a
            className="bg-white/10 border border-white/10 rounded-full flex
            justify-center items-center gap-x-2 py-2 px-2 md:py-2 md:px-4 text-base md:text-base 
            text-white/70 transition hover:scale-110 hover:bg-white/10 hover:text-white"
            href="#"
          >
            <LinkedInIcon className="h-4 w-4" />
            LinkedIn
          </a>
          
          
          
        </div>
      </div>
    </section>
  )
}

function GithubIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  )
}


function LinkedinIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  )
}


function MailIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  )
}


function TwitterIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
    </svg>
  )
}
