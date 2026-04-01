import furnitureImg from '../assets/furniture-project.png';
import shuttleTrackerImg from '../assets/shuttle-tracker.png';
import nsatImg from '../assets/nsat.png';
import miniPlacementImg from '../assets/mini-placement-portal.png';
import travelSquadImg from '../assets/travel-squad.png';


export const projects = [
    {
        id: "real-time-shuttle-tracking-system",
        title: "Shuttle Tracker",
        description: "A real-time shuttle tracking system built with React, Node.js, and MongoDB. Features include user authentication, shuttle tracking, and real-time updates.",
        tech: ["React", "Node.js", "Express.js", "Leaflet", "MongoDB", "Google OAuth"],
        github: "https://github.com/Chanakyasinde/Shuttle_Tracker",
        demo: "https://shuttle-tracker-gamma.vercel.app/",
        image: shuttleTrackerImg
    },
    {
        id: "furniture-ui",
        title: "Homehaven",
        description: "A modern, minimalist furniture store interface designed with a focus on aesthetics and user experience. Features smooth animations and a clean layout.",
        tech: ["React", "Tailwind CSS", "Framer Motion"],
        github: "https://github.com/Chanakyasinde/Furniture-E-Commerce-Website",
        demo: "https://chanakyasinde-furniture-e-commerce-website.vercel.app/",
        image: furnitureImg
    },
    {
        id: "nsat-preparation-platform",
        title: "NSAT Preparation",
        description: "Built an online preparation platform with structured study resources and topic-wise practice exercises to strengthen accuracy and boost exam confidence. Integrated mock tests with step-by-step solutions to simulate real exam conditions.",
        tech: ["HTML", "CSS"],
        github: "https://github.com/Uday-Choudhary/NSAT-2.0",
        demo: "https://nsat-2-0.vercel.app/",
        image: nsatImg
    },
    {
        id: "mini-placement-portal",
        title: "Mini Placement Portal",
        description: "A full-stack placement portal designed to connect students and recruiters, featuring role-based dashboards, job listings, and seamless application tracking with a clean and intuitive user interface.",
        tech: ["React.js", "Tailwind CSS", "Node.js", "Express.js", "PostgreSQL", "Prisma ORM", "JWT"],
        github: "https://github.com/amitihere/mini_placement",
        demo: "https://mini-placement-eight.vercel.app/",
        image: miniPlacementImg
    },
    {
        id: "travel-squad",
        title: "TravelSquad (Mobile App)",
        description: "A mobile-first group travel planner designed to manage trips, shared itineraries, and expense splitting in one place, featuring real-time updates and a smooth, user-friendly experience.",
        tech: ["React Native (Expo)", "Node.js", "Express.js", "MySQL", "Firebase Auth"],
        github: "https://github.com/Chanakyasinde/TravelSquad",
        demo: "https://drive.google.com/file/d/1MEKO_N2iFQvjRU6UcvQLiSOYN8rZKhqo/view",
        image: travelSquadImg
    }
];
