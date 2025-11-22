import React from 'react';
import { Github, Linkedin, Instagram, Mail } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-surface py-12 border-t border-gray-100">
            <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
                <div className="mb-4 md:mb-0">
                    <p className="text-secondary text-sm">
                        © {new Date().getFullYear()} Chanakya Sinde. All rights reserved.
                    </p>
                </div>

                <div className="flex space-x-6">
                    <a
                        href="https://github.com/Chanakyasinde"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-secondary hover:text-accent transition-colors"
                        aria-label="GitHub"
                    >
                        <Github size={20} />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/chanakya-sinde-7a3989334"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-secondary hover:text-accent transition-colors"
                        aria-label="LinkedIn"
                    >
                        <Linkedin size={20} />
                    </a>
                    <a
                        href="https://www.instagram.com/chanakyasinde"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-secondary hover:text-accent transition-colors"
                        aria-label="Instagram"
                    >
                        <Instagram size={20} />
                    </a>
                    <a
                        href="mailto:hello@example.com"
                        className="text-secondary hover:text-accent transition-colors"
                        aria-label="Email"
                    >
                        <Mail size={20} />
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
