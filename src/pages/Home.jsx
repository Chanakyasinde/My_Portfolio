import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Hero from '../components/Hero';
import Skills from '../components/Skills';
import ProjectCard from '../components/ProjectCard';
import { projects } from '../data/projects';
import SEO from '../components/SEO';

const Home = () => {
    const featuredProjects = projects.slice(0, 3);

    return (
        <div className="bg-surface overflow-hidden">
            <SEO
                title="Home"
                description="Chanakya Sinde - Programmer & Full Stack Developer specializing in React, Node.js, and modern web technologies."
            />

            <Hero />

            <Skills />

            <section className="py-20 bg-background relative">
                {/* Decorative Background Elements */}
                <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />

                <div className="container mx-auto px-6 relative z-10">
                    <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <h2 className="text-accent font-medium mb-4 tracking-wide uppercase text-sm">
                                Portfolio
                            </h2>
                            <h2 className="text-4xl font-bold text-primary mb-4">Featured Projects</h2>
                            <p className="text-secondary text-lg max-w-xl">
                                A selection of my recent work, showcasing my expertise in full-stack development and UI design.
                            </p>
                        </motion.div>

                        <Link
                            to="/projects"
                            className="hidden md:inline-flex items-center gap-2 px-6 py-3 bg-white border border-gray-200 rounded-full font-medium text-primary hover:border-accent hover:text-accent transition-all shadow-sm hover:shadow-md group"
                        >
                            View All Projects
                            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {featuredProjects.map((project, index) => (
                            <ProjectCard key={project.id} project={project} index={index} />
                        ))}
                    </div>

                    <div className="mt-12 text-center md:hidden">
                        <Link
                            to="/projects"
                            className="inline-flex items-center gap-2 px-6 py-3 bg-white border border-gray-200 rounded-full font-medium text-primary hover:border-accent hover:text-accent transition-all shadow-sm hover:shadow-md group"
                        >
                            View All Projects
                            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
