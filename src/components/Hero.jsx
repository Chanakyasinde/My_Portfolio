import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, User } from 'lucide-react';

import profileImg from '../assets/profile.png';

const Hero = () => {
    return (
        <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-surface pt-20 md:pt-0">
            {/* Background decorative elements */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

            <div className="container mx-auto px-6 py-12 flex flex-col md:flex-row items-center justify-between gap-16 relative z-10">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    className="flex-1 text-center md:text-left"
                >
                    <div className="inline-block px-4 py-2 bg-white border border-gray-100 rounded-full shadow-sm mb-6">
                        <span className="text-accent font-semibold tracking-wide uppercase text-xs flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-accent animate-pulse"></span>
                            Programmer & Full Stack Developer
                        </span>
                    </div>

                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-primary mb-8 leading-[1.1] tracking-tight">
                        Building digital <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-primary bg-300% animate-gradient">
                            experiences
                        </span> <br />
                        that matter.
                    </h1>

                    <p className="text-secondary text-lg md:text-xl mb-10 max-w-2xl leading-relaxed mx-auto md:mx-0 font-light">
                        I'm Chanakya Sinde, a developer passionate about creating clean, minimal, and performant web applications.
                        Specializing in React, Node.js, and modern web technologies.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center gap-4 justify-center md:justify-start">
                        <Link
                            to="/projects"
                            className="group w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 bg-primary text-white rounded-full font-medium hover:bg-accent transition-all shadow-lg hover:shadow-primary/25 hover:-translate-y-1"
                        >
                            View Projects
                            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                        </Link>
                        <Link
                            to="/about"
                            className="group w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 bg-white text-secondary border border-gray-200 rounded-full font-medium hover:border-primary/20 hover:text-primary transition-all shadow-sm hover:shadow-lg hover:-translate-y-1"
                        >
                            About Me
                            <User size={18} className="group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="flex-1 flex justify-center md:justify-end relative"
                >
                    <div className="relative w-72 h-72 md:w-[450px] md:h-[450px]">
                        <div className="absolute inset-0 bg-gradient-to-tr from-accent/20 to-primary/20 rounded-full blur-2xl transform translate-x-6 translate-y-6 animate-pulse" />
                        <div className="relative w-full h-full rounded-full p-2 bg-white shadow-2xl">
                            <img
                                src={profileImg}
                                alt="Chanakya Sinde"
                                className="w-full h-full object-cover rounded-full border-4 border-gray-50"
                            />
                        </div>

                        {/* Floating badges */}
                        {/* <motion.div
                            animate={{ y: [0, -10, 0] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute -top-4 -right-4 bg-white p-4 rounded-2xl shadow-xl border border-gray-100 hidden md:block"
                        >
                            <span className="text-2xl">🚀</span>
                        </motion.div>
                        <motion.div
                            animate={{ y: [0, 10, 0] }}
                            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                            className="absolute -bottom-8 -left-8 bg-white p-4 rounded-2xl shadow-xl border border-gray-100 hidden md:block"
                        >
                            <span className="text-2xl">💻</span>
                        </motion.div> */}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
