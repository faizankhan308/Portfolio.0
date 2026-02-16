
import { Project, Experience, Skill } from './types';
import profileImage from "./assets/profile.png";

export const FAIZAN_DATA = {
  name: "Faizan Khan",
  location: "Delhi, India",
  email: "khanfaizan68397@gmail.com",
  phone: "8874917623",
  linkedin: "linkedin.com/in/faizan-khan308/",
  github: "github.com/faizankhan308",
  profileImage: profileImage,
  objective: "Motivated and detail-oriented Computer Science student with strong skills in Frontend Development, Java Programming, and Data Structures & Algorithms. Passionate about building interactive web applications and exploring backend technologies. Seeking opportunities to apply technical expertise in real-world projects and grow as a Full Stack Developer.",
  education: [
    {
      institution: "Galgotias University",
      degree: "B.Tech in Computer Science and Engineering",
      period: "July 2022 - June 2026",
      details: "GPA: 8.46"
    },
    {
      institution: "A T L School",
      degree: "Higher Secondary Education",
      period: "2020 - 2022",
      details: "Percentage: 83"
    }
  ],
  experience: [
    {
      role: "Frontend Developer Intern",
      company: "CodeSoft",
      period: "Sep 2024 - Oct 2024",
      description: [
        "Built a professional resume website using React.js, HTML, CSS, and JavaScript.",
        "Designed and implemented a responsive user interface aligned with modern web design principles.",
        "Developed reusable components, applied semantic HTML, and ensured cross-device responsiveness to optimize user experience.",
        "Collaborated in a remote environment and utilized Git/GitHub for version control during the project lifecycle."
      ]
    }
  ] as Experience[],
  projects: [
    {
      title: "AI Finance Platform",
      description: "An AI-powered finance management platform to track expenses, analyze spending patterns, and generate smart financial insights.",
      features: [
        "Personalized financial dashboards with secure user authentication.",
        "AI-based prediction models for budget recommendations and expense forecasting.",
        "Interactive data visualization using charts for real-time tracking.",
        "RESTful API implementation for seamless frontend-backend communication."
      ],
      tools: ["React.js", "Node.js", "Express.js", "MongoDB", "AI/ML Models", "REST API"],
      github: "github.com/faizankhan308/Ai-Finance-Platform-",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1200"
    },
    {
      title: "Text To Image Generator",
      description: "A creative AI tool that transforms user-written prompts into high-quality visual art using neural networks.",
      features: [
        "Integration with OpenAI API for state-of-the-art image generation.",
        "Real-time rendering engine for immediate visual feedback.",
        "Dynamic prompt handling with an intuitive, responsive user interface.",
        "Optimized performance ensuring high-speed delivery across all device types."
      ],
      tools: ["React", "OpenAI API", "Express.js", "Tailwind CSS"],
      github: "github.com/faizankhan308/Image-Generator",
      image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=1200"
    }
  ] as Project[],
  skills: [
    // Languages
    { name: "Java", category: "Language", icon: "☕" },
    { name: "JavaScript(ES6)", category: "Language", icon: "JS" },
    { name: "SQL", category: "Language", icon: "DB" },
    // Frontend
    { name: "React.js", category: "Frontend", icon: "⚛️" },
    { name: "HTML5/CSS3", category: "Frontend", icon: "🎨" },
    { name: "Tailwind CSS", category: "Frontend", icon: "🌊" },
    { name: "Bootstrap", category: "Frontend", icon: "B" },
    // Backend
    { name: "Node.js", category: "Backend", icon: "🟢" },
    { name: "Express.js", category: "Backend", icon: "🚂" },
    { name: "MongoDB", category: "Backend", icon: "🍃" },
    // Fundamentals
    { name: "Data Structures & Algorithms", category: "Fundamental", icon: "🔗" },
    { name: "Object Oriented Programming", category: "Fundamental", icon: "🧱" },
    { name: "Computer Network", category: "Fundamental", icon: "🌐" },
    { name: "Operating System", category: "Fundamental", icon: "💻" },
    { name: "DBMS", category: "Fundamental", icon: "🗄️" },
    // Tools
    { name: "VS Code", category: "Tool", icon: "💻" },
    { name: "Git/GitHub", category: "Tool", icon: "🐙" }
  ] as Skill[]
};

export const RESUME_SYSTEM_PROMPT = `
You are the AI Assistant for Faizan Khan's personal portfolio. 
Faizan is a B.Tech CSE student at Galgotias University (2022-2026) with a GPA of 8.46.

Key Skills & Fundamentals:
- Core: Java, JavaScript, SQL.
- Frontend: React.js, Tailwind, HTML/CSS.
- Backend: Node.js, Express, MongoDB.
- CS Fundamentals: DSA, OOPs, Computer Networks, OS, DBMS.
- Tools: VS Code, Git, GitHub.

Key Projects:
1. AI Finance Platform: An AI-powered finance tool for expense tracking and financial insights using React, Node.js, and AI models.
2. Text To Image Generator: A tool that converts text prompts to images using OpenAI's API.

Experience: Frontend Intern at CodeSoft (Sep-Oct 2024).

Socials:
GitHub: https://${FAIZAN_DATA.github}
LinkedIn: https://${FAIZAN_DATA.linkedin}

Answer questions as if you are Faizan's professional agent. Be concise, friendly, and professional. 
If someone asks about hiring him, guide them to his email: ${FAIZAN_DATA.email} or his LinkedIn.
`;
