import weatherApp from '../assets/img/weather-app-image.jpg';
import ecommerceApp from '../assets/img/E-Commerce.jpg';
import ticTacToeImage from '../assets/img/Tic-Tac-Toe.jpg';

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
      imageUrl: ecommerceApp,
      demoUrl: "https://ecommerce-fg.vercel.app/",
      githubRepo: "https://github.com/francoogilli/ecommerce-nextjs"
    },
    {
      title: "Weather App",
      techStack: ["Vue.js", "JavaScript", "Visual Crossing API", "CSS"],
      description: "Quick Search: Enter a place name and get instant results with our search function. Select your desired location and access accurate forecasts.\nIntuitive Visualization: The sleek and modern user interface offers you a pleasant visual experience. From weather icons to graphs, the app presents information clearly and concisely.\nDetailed Forecasts: Plan your day or week with accurate and detailed forecasts. Switch between hourly view and 5-day view with a single click for specific information.\nHighlights of the Day: Discover essential data of the day, such as wind chill, wind speed, highs and lows, humidity and atmospheric pressure, all presented in a clear and concise manner.",
      imageUrl: weatherApp,
      demoUrl: "https://francogilli-weatherapp.netlify.app/#/",
      githubRepo: "https://github.com/francoogilli/WeatherApp"
    },
    {
      title: "Tic Tac Toe",
      techStack: ["React.js", "Tailwind", "JavaScript"],
      description: "Overview: \nExperience the classic Tic Tac Toe game in a modern and interactive way with this web application built using React, JavaScript, and Tailwind CSS. This project showcases my proficiency in front-end development and my ability to create engaging user interfaces. \nKey Features: \nResponsive Design: The Tic Tac Toe game is designed to be fully responsive, ensuring an optimal viewing and playing experience across various devices, including desktops, tablets, and smartphones. \nInteractive Gameplay: Enjoy a seamless and interactive gaming experience. Users can make their moves by simply clicking on the desired grid cell, with real-time updates reflecting the game state. \nState Management with React: Leveraging the power of React, the application efficiently manages the game state, ensuring a dynamic and reactive interface. React components are employed to modularize the codebase, promoting maintainability and scalability. \nStylish UI with Tailwind CSS: The user interface is crafted with the help of Tailwind CSS, a utility-first CSS framework. The result is a visually appealing and modern design that enhances the overall user experience. \nWinning Logic: The application incorporates winning logic to determine the winner of each game. When a player achieves victory, the app visually highlights the winning combination, providing a clear indication of the result.",
      imageUrl: ticTacToeImage,
      demoUrl: "https://tres-enraya.vercel.app/",
      githubRepo: "https://github.com/francoogilli/Tic-Tac-Toe"
    }
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
  