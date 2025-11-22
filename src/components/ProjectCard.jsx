import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';

const ProjectCard = ({ project, index, animateOnRender = false }) => {
    const animationProps = animateOnRender
        ? { animate: { opacity: 1, y: 0 } }
        : { whileInView: { opacity: 1, y: 0 }, viewport: { once: true } };

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            {...animationProps}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group relative bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col h-full hover:-translate-y-1"
        >
            <div className="block aspect-video bg-gray-100 overflow-hidden relative">
                {project.image ? (
                    <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                ) : (
                    <div className="w-full h-full bg-gray-200 flex items-center justify-center text-gray-400 group-hover:scale-105 transition-transform duration-500">
                        Project Screenshot
                    </div>
                )}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
            </div>

            <div className="p-8 flex flex-col flex-grow">
                <div className="block">
                    <h3 className="text-2xl font-bold text-primary mb-3 group-hover:text-accent transition-colors">
                        {project.title}
                    </h3>
                </div>
                <p className="text-secondary text-base mb-8 line-clamp-3 flex-grow leading-relaxed">
                    {project.description}
                </p>

                <div className="pt-6 border-t border-gray-50 flex items-center justify-between gap-4 mt-auto">
                    <div className="flex flex-wrap gap-2">
                        {project.tech.slice(0, 3).map((tech) => (
                            <span key={tech} className="text-xs font-medium px-3 py-1.5 bg-surface text-secondary rounded-full border border-gray-100 group-hover:border-accent/20 group-hover:bg-accent/5 transition-colors">
                                {tech}
                            </span>
                        ))}
                        {project.tech.length > 3 && (
                            <span className="text-xs font-medium px-3 py-1.5 bg-surface text-secondary rounded-full border border-gray-100">
                                +{project.tech.length - 3}
                            </span>
                        )}
                    </div>

                    <div className="flex items-center gap-3 shrink-0">
                        {project.github && (
                            <a
                                href={project.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-2.5 text-secondary hover:text-primary hover:bg-gray-50 rounded-full transition-all border border-transparent hover:border-gray-100"
                                aria-label="GitHub Repo"
                                title="View Code"
                            >
                                <Github size={20} />
                            </a>
                        )}
                        {project.demo && (
                            <a
                                href={project.demo}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-2.5 text-white bg-primary hover:bg-accent rounded-full transition-all shadow-md hover:shadow-lg"
                                aria-label="Live Demo"
                                title="Live Demo"
                            >
                                <ExternalLink size={20} />
                            </a>
                        )}
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default ProjectCard;
