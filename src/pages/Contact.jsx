import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, Instagram, ArrowRight, Copy, Check } from 'lucide-react';
import SEO from '../components/SEO';
import { useState } from 'react';

const Contact = () => {
    const [copied, setCopied] = useState(false);
    const email = "chanakyasinde@gmail.com";

    const handleCopyEmail = () => {
        navigator.clipboard.writeText(email);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div className="min-h-screen bg-surface py-20 relative overflow-hidden">
            <SEO
                title="Contact"
                description="Get in touch with Chanakya Sinde for collaborations, opportunities, or just to say hi."
            />

            {/* Decorative Background Elements */}
            <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-accent/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-primary/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

            <div className="container mx-auto px-6 max-w-6xl relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    {/* Left Column: Text Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h1 className="text-5xl md:text-7xl font-bold text-primary mb-8 leading-tight">
                            Let's work <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                                together.
                            </span>
                        </h1>

                        <div className="space-y-6 text-lg text-secondary max-w-lg">
                            <p className="leading-relaxed">
                                I'm always open to discussing product design work or partnership opportunities.
                            </p>
                            <p className="leading-relaxed">
                                Whether you have a question or just want to say hi, I'll try my best to get back to you!
                            </p>
                        </div>

                        <div className="mt-12">
                            <a
                                href={`mailto:${email}`}
                                className="inline-flex items-center gap-3 bg-primary text-white px-8 py-4 rounded-full font-medium hover:bg-accent transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1 duration-300"
                            >
                                <Mail size={20} />
                                Send me an email
                                <ArrowRight size={18} />
                            </a>
                        </div>
                    </motion.div>

                    {/* Right Column: Contact Cards */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="space-y-6"
                    >
                        {/* Email Card */}
                        <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow group">
                            <div className="flex items-start justify-between mb-4">
                                <div className="p-3 bg-primary/5 text-primary rounded-2xl group-hover:bg-primary/10 transition-colors">
                                    <Mail size={24} />
                                </div>
                                <button
                                    onClick={handleCopyEmail}
                                    className="text-secondary hover:text-primary transition-colors"
                                    title="Copy Email"
                                >
                                    {copied ? <Check size={20} className="text-green-500" /> : <Copy size={20} />}
                                </button>
                            </div>
                            <h3 className="text-lg font-semibold text-primary mb-1">Email</h3>
                            <p className="text-secondary mb-4">{email}</p>
                            <a
                                href={`mailto:${email}`}
                                className="text-sm font-medium text-accent hover:text-primary transition-colors inline-flex items-center gap-1"
                            >
                                Write a message <ArrowRight size={14} />
                            </a>
                        </div>

                        {/* Social Links Grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                            {[
                                {
                                    name: 'GitHub',
                                    icon: Github,
                                    link: 'https://github.com/Chanakyasinde',
                                    color: 'hover:text-gray-900 hover:bg-gray-50'
                                },
                                {
                                    name: 'LinkedIn',
                                    icon: Linkedin,
                                    link: 'https://www.linkedin.com/in/chanakya-sinde-7a3989334/',
                                    color: 'hover:text-blue-600 hover:bg-blue-50'
                                },
                                {
                                    name: 'Instagram',
                                    icon: Instagram,
                                    link: 'https://www.instagram.com/chanakyasinde',
                                    color: 'hover:text-pink-600 hover:bg-pink-50'
                                }
                            ].map((social) => (
                                <a
                                    key={social.name}
                                    href={social.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`bg-white p-6 rounded-3xl shadow-sm border border-gray-100 flex flex-col items-center justify-center gap-3 transition-all duration-300 group ${social.color}`}
                                >
                                    <social.icon size={24} className="text-secondary group-hover:scale-110 transition-transform" />
                                    <span className="font-medium text-secondary group-hover:text-current">{social.name}</span>
                                </a>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
