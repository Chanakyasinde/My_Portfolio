import React from 'react';
import { motion } from 'framer-motion';
import ProjectCard from '../components/ProjectCard';
import { projects } from '../data/projects';
import SEO from '../components/SEO';

const Projects = () => {
    return (
        <div className="min-h-screen bg-surface py-20 relative overflow-hidden">
            <SEO
                title="Projects"
                description="Explore my portfolio of projects including full-stack applications, UI designs, and open source contributions."
            />

            {/* Decorative Background Elements */}
            <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-accent/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-primary/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="mb-16"
                >
                    <h2 className="text-accent font-medium mb-4 tracking-wide uppercase text-sm">
                        Portfolio
                    </h2>
                    <h1 className="text-4xl md:text-6xl font-bold text-primary mb-6 leading-tight">
                        Featured <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                            Projects
                        </span>
                    </h1>
                    <p className="text-secondary text-lg max-w-2xl leading-relaxed">
                        A collection of my work, ranging from full-stack applications to open source contributions.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <ProjectCard key={project.id} project={project} index={index} animateOnRender={true} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Projects;
