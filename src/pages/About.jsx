import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Instagram, Mail, ArrowRight } from 'lucide-react';
import SEO from '../components/SEO';
import profileImg from '../assets/profile.png';

const About = () => {
    return (
        <div className="min-h-screen bg-surface py-20 relative overflow-hidden">
            <SEO
                title="About Me"
                description="Learn more about Chanakya Sinde, a passionate Programmer & Full Stack Developer based in India."
            />

            {/* Decorative Background Elements */}
            <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-accent/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-primary/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    {/* Left Column: Text Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h1 className="text-4xl md:text-6xl font-bold text-primary mb-8 leading-tight">
                            I'm Chanakya Sinde. <br />
                            I live in Pune India, where I <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">design the future.</span>
                        </h1>

                        <div className="prose prose-lg text-secondary space-y-6 mb-12">
                            <p>
                                Welcome to my portfolio! I'm a Programmer & Full Stack Developer specializing in the MERN stack and modern web technologies.
                                With a passion for crafting efficient and scalable solutions, I've worked on diverse projects, from dynamic
                                e-commerce platforms to interactive social media applications.
                            </p>
                            <p>
                                My focus is on clean code architecture and user-centric design. I'm open to collaboration and eager to learn
                                from others. Feel free to explore my projects, and don't hesitate to reach out with any ideas or suggestions.
                            </p>
                            <p>
                                My expertise includes React, Next.js, Node.js, Express, Prisma, MySQL, MongoDB, and the broader JavaScript ecosystem.
                                I also actively contribute to open source and participate in community events like Hacktoberfest.
                            </p>
                        </div>

                        <div className="flex flex-wrap gap-4">
                            <a
                                href="https://github.com/Chanakyasinde"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 px-6 py-3 bg-white border border-gray-100 rounded-full shadow-sm hover:shadow-md hover:border-primary/20 transition-all group"
                            >
                                <Github size={20} className="text-secondary group-hover:text-primary transition-colors" />
                                <span className="font-medium text-secondary group-hover:text-primary">GitHub</span>
                            </a>
                            <a
                                href="https://www.linkedin.com/in/chanakya-sinde-7a3989334/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 px-6 py-3 bg-white border border-gray-100 rounded-full shadow-sm hover:shadow-md hover:border-blue-500/20 transition-all group"
                            >
                                <Linkedin size={20} className="text-secondary group-hover:text-blue-600 transition-colors" />
                                <span className="font-medium text-secondary group-hover:text-blue-600">LinkedIn</span>
                            </a>
                            <a
                                href="https://www.instagram.com/chanakyasinde"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 px-6 py-3 bg-white border border-gray-100 rounded-full shadow-sm hover:shadow-md hover:border-pink-500/20 transition-all group"
                            >
                                <Instagram size={20} className="text-secondary group-hover:text-pink-600 transition-colors" />
                                <span className="font-medium text-secondary group-hover:text-pink-600">Instagram</span>
                            </a>
                        </div>
                    </motion.div>

                    {/* Right Column: Image */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="lg:pl-12 relative"
                    >
                        <div className="relative z-10 rotate-3 hover:rotate-0 transition-transform duration-500">
                            <img
                                src={profileImg}
                                alt="Chanakya Sinde"
                                className="w-full max-w-md rounded-3xl shadow-2xl grayscale hover:grayscale-0 transition-all duration-500 mx-auto border-4 border-white"
                            />
                        </div>
                        {/* Abstract shapes behind image */}
                        <div className="absolute top-10 right-10 w-full h-full bg-gray-100 rounded-3xl -z-10 rotate-6" />
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default About;
