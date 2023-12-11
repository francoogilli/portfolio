// projectsData.js
// Importa las imágenes
import weatherAppImage from '../assets/img/weather-app-image.jpg';
import ecommerceAppImage from '../assets/img/E-Commerce.jpg';
// ... otras importaciones

// Resto del código

const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },  
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Projects",
    hash: "#projects",
  },

  {
    name: "Contact",
    hash: "#contact",
  },
];
export { links }; 

const projectsData = [
    {
      title: "E-Commerce App",
      techStack: ["Next.js", "Tailwind", "Sanity", "Stripe"],
      description: "Web description:\nIn this development project, he created a sportswear commerce website, using the power of Next.js 14, Stripe, and Sanity.io.\nFeatured Technologies:\nNext.js 14: The latest version of Next.js provides optimized performance, cleaner code structure, and faster navigation. I took advantage of the latest features of Next.js to build a modern and efficient website.\nSanity.io CMS: I used Sanity.io as a flexible and powerful CMS (Content Management System). This makes it easier to manage and update products, categories and content in general, providing efficient administration of the online store.\nHighlighted features:\nIntuitive User Interface: I designed an intuitive and attractive user interface to provide a pleasant shopping experience. Easy navigation and carefully structured pages allow users to find and explore products with ease.\nEfficient Content Management: Using Sanity.io, content management becomes efficient and accessible. Store owners can easily update product details, images and categories without requiring technical knowledge.",
      imageUrl: ecommerceAppImage,
      demoUrl: "https://ecommerce-fg.vercel.app/",
      githubRepo: "https://github.com/francoogilli/ecommerce-nextjs"
    },
    {
      title: "Weather App",
      techStack: ["Vue.js", "JavaScript", "Visual Crossing API", "CSS"],
      description: "Quick Search: Enter a place name and get instant results with our search function. Select your desired location and access accurate forecasts.\nIntuitive Visualization: The sleek and modern user interface offers you a pleasant visual experience. From weather icons to graphs, the app presents information clearly and concisely.\nDetailed Forecasts: Plan your day or week with accurate and detailed forecasts. Switch between hourly view and 5-day view with a single click for specific information.\nHighlights of the Day: Discover essential data of the day, such as wind chill, wind speed, highs and lows, humidity and atmospheric pressure, all presented in a clear and concise manner.",
      imageUrl: weatherAppImage,
      demoUrl: "https://francogilli-weatherapp.netlify.app/#/",
      githubRepo: "https://github.com/francoogilli/WeatherApp"
    },
  ];
  
  export { projectsData }; 
  
  const skillsData = [
    
    "HTML",
    "CSS",
    "JavaScript",
    "Python",
    "React.js",
    "Vue.js",
    "MySQL",
    "Git",
    "Tailwind",
    "SQL Server",
    "PostgreSQL",
    ".NET Framework",
    "Framer Motion",
    "MVC ASP.NET Core",
    "Blazor"
    
  ];
  
  export { skillsData };  
  