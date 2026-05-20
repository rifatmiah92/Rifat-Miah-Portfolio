export const portfolioData = {
  name: "Rifat Miah",
  designation: "Junior Frontend Developer",
  summary: "Dynamic MERN Stack Developer and CS student at Presidency University with a powerhouse portfolio of 40+ GitHub projects. I bridge the gap between creative UI/UX and efficient logic, backed by 50+ LeetCode problem-solving experience. From a 19-hour consecutive coding marathon to mastering Harvard SPR leadership modules, I bring grit, technical agility, and a passion for building future-proof web solutions.",
  photo: "/images/profile.jpg",
  resumeLink: "https://drive.google.com/file/d/1y1sYXNE9BFRmRmdhpwI6ig73pnE8SpbP/view?usp=sharing",
  socials: {
    github: "https://github.com/rifatmiah92",
    linkedin: "https://linkedin.com/in/rifat-miah-web-dev",
    leetcode: "https://leetcode.com/u/oSqxNX2Db0/",
    facebook: "https://www.facebook.com/rif.at.877570"
  },
  about: {
    journey: "Bridging the gap between creative frontend design and efficient algorithmic logic. Currently a CS student at Presidency University, I have spent the last few years mastering the MERN stack through 40+ real-world projects and sharpening my analytical skills with 50+ LeetCode challenges. My background in Cyber Security and Harvard SPR leadership modules allows me to approach software development with a strategic and secure mindset. I am a high-persistence developer ready to tackle challenging technical bottlenecks.",
    hobbies: ["Coding", "Problem Solving", "Learning New Technologies"]
  },
  skills: [
    { category: "Frontend", items: ["JavaScript (ES6+)", "React.js", "HTML5", "CSS3", "Tailwind CSS"] },
    { category: "Backend & Databases", items: ["Node.js", "Express.js", "MongoDB", "Firebase"] },
    { category: "Languages & Tools", items: ["Python", "C++", "Git", "GitHub", "Figma", "Adobe XD"] }
  ],
  education: [
    { 
      degree: "B.Sc. in Computer Science and Engineering", 
      institution: "Presidency University, Bangladesh", 
      year: "Expected Graduation: 2028",
      description: "Focused on core computer science concepts, algorithms, and software engineering."
    },
    { 
      degree: "Higher Secondary School Certificate", 
      institution: "Government Murapara College", 
      year: "Batch 2021-2022",
      description: "Group: Science | CGPA: 4.50 out of 5.00"
    }
  ],
  projects: [
    {
      id: 1,
      name: "TechCore (Tactical Gear)",
      image: "/images/project-techcore.jpg",
      tech: "Next.js 14, Tailwind CSS, Firebase",
      description: "A responsive full-stack web application allowing users to browse items, with seamless Firebase authentication for users to manage their catalogs.",
      liveLink: "https://tactical-gear.netlify.app/",
      githubLink: "https://github.com/rifatmiah92/Tactical-Gear",
      challenges: "Implementing secure Firebase authentication (Email/Google), protecting routes like /items/add, and handling dynamic details routing in Next.js App Router.",
      futurePlans: "Enhancing the category filtering, search functionality, and adding more action feedbacks like advanced toast notifications."
    },
    {
      id: 2,
      name: "Tech Gadget Store",
      image: "/images/project-tech-store.jpg",
      tech: "Next.js 14, Tailwind CSS, Firebase Auth",
      description: "A smart gadget store offering a wide variety of tech products. Features a clean UI, real-time search, category filtering, and protected management routes.",
      liveLink: "https://rifat-tech-store-bd.netlify.app/",
      githubLink: "https://github.com/rifatmiah92/Rifat-Tech-Store",
      challenges: "Building a complex layout with 7 premium sections, implementing real-time search, filtering, and securing /items/add and /items/manage routes for authenticated users.",
      futurePlans: "Integrating a secure payment gateway and expanding the inventory management system with detailed analytics."
    },
    {
      id: 3,
      name: "Book Nest",
      image: "/images/project-book-nest.jpg",
      tech: "Next.js 14, Tailwind CSS, Firebase",
      description: "A Neubrutalist bookstore platform with bold borders and a bento-box layout to showcase a specialized book catalog.",
      liveLink: "https://book-nest-bd.netlify.app/",
      githubLink: "https://github.com/rifatmiah92/BOOK-NEST",
      challenges: "Implementing hard-shadow grid layouts while ensuring mobile responsiveness. Secured routes for inventory management.",
      futurePlans: "Integration of Stripe for secure payments and activity tracking for admin management."
    },
    {
      id: 4,
      name: "SkillSwap - Learning Platform",
      image: "/images/project-skillswap.jpg",
      tech: "React.js, Tailwind CSS, DaisyUI, Firebase",
      description: "A modern and user-friendly learning platform that provides a wide collection of courses to help learners improve their skills.",
      liveLink: "https://skills-wap-learning.netlify.app/",
      githubLink: "https://github.com/rifatmiah92/Skill-Sawp",
      challenges: "Built a fast and optimized UI using React.js, Tailwind CSS, and DaisyUI. Implemented secure Firebase Authentication and a robust Firestore cloud database.",
      futurePlans: "Adding integrated live demos, personalized course content badges, and more."
    },
    {
      id: 5,
      name: "FinEase",
      image: "/images/project-finease.jpg",
      tech: "React.js, Express.js, MongoDB, Tailwind CSS",
      description: "A full-stack personal finance management application designed to help users track income, expenses, budgets, and financial goals.",
      liveLink: "https://finease-app.netlify.app/",
      githubLink: "https://github.com/rifatmiah92/FinEase-Finances-Repo",
      challenges: "Delivering a smooth, secure, and scalable financial tracking experience with dynamic category-wise charts using Recharts.",
      futurePlans: "Real-time financial summaries and enhanced security with JWT/Firebase authentication options."
    },
    {
      id: 6,
      name: "Hero App Store",
      image: "/images/project-hero-store.jpg",
      tech: "React.js, Tailwind CSS, DaisyUI, Recharts",
      description: "A modern web application letting users explore popular apps, install them, and manage their installed ones easily.",
      liveLink: "https://hero-app-store-09.netlify.app/",
      githubLink: "https://github.com/rifatmiah92/Hero-App-Store",
      challenges: "Managing Local Storage for saving data alongside comprehensive sorting options and interactive data charts.",
      futurePlans: "Adding more dynamic insights, improving user toast notifications, and supporting advanced analytics."
    }
  ],
  certificates: [
    {
      id: 1,
      name: "2024 Aspire Leaders Program",
      image: "/images/cert-aspire.jpg",
      tech: "Aspire Institute (Founded by Harvard University Professors)",
      description: "Successfully Completed (30 hours of rigorous coursework)",
      date: "November 2024",
      learned: "Leadership Development: Cultivated essential leadership qualities and significantly increased self-confidence for professional environments. Critical Thinking & Problem Solving: Sharpened analytical skills to evaluate complex global issues and formulate strategic solutions. Effective Communication: Refined professional communication skills to articulate ideas clearly and persuasively to diverse audiences. Social Impact & Global Citizenship: Developed a strong foundation in social responsibility with a deep desire to create a positive, sustainable impact within a global community."
    },
    {
      id: 2,
      name: "Complete Web Development Course",
      image: "/images/cert-web-dev.jpg",
      tech: "Programming Hero",
      description: "Completed with Excellence (Batch-12)",
      date: "Recent",
      learned: "Core Web Technologies: Mastered the foundational building blocks of the web, including advanced HTML5 and CSS3 for responsive and accessible web design. Advanced JavaScript: Gained deep knowledge of JavaScript (ES6+), DOM manipulation, and asynchronous programming. Frontend Framework (React JS): Learned to build dynamic, single-page applications (SPAs) using React, including component-based architecture and state management. Practical Project Implementation: Applied theoretical knowledge to build several real-world, functional web projects from scratch."
    },
    {
      id: 3,
      name: "Basics of Machine Learning Algorithms (CR640)",
      image: "/images/cert-ml.jpg",
      tech: "Cambridge International Qualifications (via Athena Global Education)",
      description: "Passed with Distinction (100/100 Marks, Level 7 Qualification)",
      date: "May 2026",
      learned: "Algorithmic Foundations: Gained a high-level (Master's level/Level 7) understanding of core machine learning algorithms and their practical applications. Decision Tree Modeling: Learned how to build, train, and evaluate Decision Trees for data-driven decision-making and predictive modeling. Classification Functionality: Mastered techniques for categorizing complex datasets and solving real-world classification problems systematically. Naive Bayes Analysis: Developed proficiency in probabilistic machine learning models, specifically using Naive Bayes classifiers for statistical analysis and predictive accuracy."
    },
    {
      id: 4,
      name: "Learning from Major Cyber Security Incidents",
      image: "/images/cert-cyber.jpg",
      tech: "OpenLearn (The Open University)",
      description: "Completed (8-Hour Course)",
      date: "July 2024",
      learned: "Threat Analysis & Case Studies: Analyzed real-world, large-scale cyber-attacks and security breaches to understand how threats evolve. Vulnerability Assessment: Learned how attackers exploit system vulnerabilities and the common entry points used in cyber incidents. Risk Mitigation & Defense: Gained foundational knowledge on how organizations can improve their IT infrastructure, implement robust security protocols, and prevent future digital compromises."
    },
    {
      id: 5,
      name: "Net Zero 101: What, Why and How",
      image: "/images/cert-netzero.jpg",
      tech: "United Nations University (Institute for the Advanced Study of Sustainability - UNU-IAS)",
      description: "Successfully Completed",
      date: "November 2025",
      learned: "Climate Action & Net Zero Fundamentals: Explored the scientific and environmental necessity of achieving 'Net Zero' greenhouse gas emissions to combat global warming. Decarbonization Strategies: Learned the practical steps, policies, and technologies required to transition to a low-carbon economy. Global Sustainability: Understood the intersection of environmental policy, international climate agreements (like the Paris Agreement), and sustainable development goals (SDGs) to protect the planet's future."
    },
    {
      id: 6,
      name: "An Introduction to Human Rights",
      image: "/images/cert-human-rights.jpg",
      tech: "Amnesty International (Human Rights Academy)",
      description: "Successfully Completed",
      date: "January 2024",
      learned: "Core Human Rights Principles: Gained a comprehensive understanding of universal human rights, dignity, equality, and justice. Identifying Violations: Learned how to recognize human rights abuses and injustices occurring globally across different societies. Advocacy & Protection: Explored the mechanisms of international human rights law, freedom of expression, and how global organizations like Amnesty International work to defend the rights of marginalized communities."
    }
  ],
  contact: {
    email: "hrrifat92@gmail.com",
    phone: "+8801314078510",
    whatsapp: "+8801314078510"
  }
};
