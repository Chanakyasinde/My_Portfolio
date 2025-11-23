import furnitureImg from '../assets/furniture-project.png';
import shuttleTrackerImg from '../assets/shuttle-tracker.png';
import nsatImg from '../assets/nsat.png';

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
    // {
    //     id: "travelsquad",
    //     title: "TravelSquad",
    //     description: "A travel companion app for planning group trips. Includes itinerary planning, and expense splitting.",
    //     tech: ["React Native", "Firebase", "Google Maps API"],
    //     github: "https://github.com/chanakyasinde/travelsquad",
    //     demo: null
    // }
];
