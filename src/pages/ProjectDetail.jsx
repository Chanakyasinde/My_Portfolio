import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Github, ExternalLink, ArrowLeft, Calendar, Code, Layers } from 'lucide-react';
import { projects } from '../data/projects';

const ProjectDetail = () => {
    const { id } = useParams();
    const project = projects.find((p) => p.id === id);

    if (!project) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center">
                <h1 className="text-2xl font-bold text-primary mb-4">Project not found</h1>
                <Link to="/projects" className="text-accent hover:underline">
                    Back to Projects
                </Link>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-background py-12">
            <SEO
                title={project.title}
                description={project.description}
            />
            <div className="container mx-auto px-6">
                <Link
                    to="/projects"
                    className="inline-flex items-center gap-2 text-secondary hover:text-primary mb-8 transition-colors"
                >
                    <ArrowLeft size={20} />
                    Back to Projects
                </Link>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-100 mb-12">
                        <div className="aspect-video bg-gray-100 w-full flex items-center justify-center text-gray-400 text-xl">
                            Project Screenshot / Demo Video
                        </div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                        <div className="lg:col-span-2">
                            <h1 className="text-4xl font-bold text-primary mb-6">{project.title}</h1>
                            <p className="text-secondary text-lg leading-relaxed mb-8">
                                {project.description}
                            </p>

                            <div className="space-y-8">
                                <section>
                                    <h2 className="text-2xl font-bold text-primary mb-4">Overview</h2>
                                    <p className="text-secondary leading-relaxed">{project.details}</p>
                                </section>

                                <section>
                                    <h2 className="text-2xl font-bold text-primary mb-4">Key Challenges</h2>
                                    <p className="text-secondary leading-relaxed">{project.challenges}</p>
                                </section>

                                <section>
                                    <h2 className="text-2xl font-bold text-primary mb-4">Learnings</h2>
                                    <p className="text-secondary leading-relaxed">{project.learnings}</p>
                                </section>
                            </div>
                        </div>

                        <div className="space-y-8">
                            <div className="bg-white p-6 rounded-2xl border border-gray-100">
                                <h3 className="text-lg font-bold text-primary mb-4">Project Info</h3>
                                <div className="space-y-4">
                                    <div className="flex items-center gap-3 text-secondary">
                                        <Code size={20} />
                                        <span>Full Stack Development</span>
                                    </div>
                                    <div className="flex items-center gap-3 text-secondary">
                                        <Layers size={20} />
                                        <span>{project.tech.length} Technologies Used</span>
                                    </div>
                                </div>

                                <div className="mt-8 space-y-3">
                                    {project.github && (
                                        <a
                                            href={project.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center justify-center gap-2 w-full py-3 bg-primary text-white rounded-xl font-medium hover:bg-primary/90 transition-all"
                                        >
                                            <Github size={20} />
                                            View Source
                                        </a>
                                    )}
                                    {project.demo && (
                                        <a
                                            href={project.demo}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center justify-center gap-2 w-full py-3 bg-white text-primary border border-gray-200 rounded-xl font-medium hover:border-primary transition-all"
                                        >
                                            <ExternalLink size={20} />
                                            Live Demo
                                        </a>
                                    )}
                                </div>
                            </div>

                            <div className="bg-white p-6 rounded-2xl border border-gray-100">
                                <h3 className="text-lg font-bold text-primary mb-4">Tech Stack</h3>
                                <div className="flex flex-wrap gap-2">
                                    {project.tech.map((tech) => (
                                        <span
                                            key={tech}
                                            className="px-3 py-1 bg-background text-secondary text-sm rounded-lg"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default ProjectDetail;
