import React from 'react';
import { motion } from 'framer-motion';

const skillsData = [
    { category: "Frontend", items: ["React", "React Native", "HTML", "CSS", "JavaScript", "TypeScript", "Tailwind CSS", "Figma"] },
    { category: "Backend & Database", items: ["Node.js", "Express JS", "MongoDB", "SQL", "Prisma ORM", "Firebase", "API", "OAuth 2.0"] },
    { category: "Data Science & Python", items: ["Python", "Data Structure", "NumPy", "Pandas", "Matplotlib"] },
    { category: "Tools & Concepts", items: ["Git and Github", "Postman", "ESLint"] },
    { category: "Soft Skills", items: ["Communication Skills", "Presentation Skills", "Teamwork", "Time management"] },
];

const Skills = () => {
    return (
        <section className="py-20 bg-surface relative">
            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-16"
                >
                    <h2 className="text-accent font-medium mb-4 tracking-wide uppercase text-sm">
                        Expertise
                    </h2>
                    <h2 className="text-4xl font-bold text-primary mb-6">Technical Skills</h2>
                    <p className="text-secondary text-lg max-w-2xl leading-relaxed">
                        A comprehensive overview of my technical skills and tools I use to build digital experiences.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {skillsData.map((skillGroup, index) => (
                        <motion.div
                            key={skillGroup.category}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className="p-8 bg-white rounded-3xl shadow-sm border border-gray-100 hover:shadow-xl hover:border-primary/10 transition-all duration-300 group"
                        >
                            <h3 className="text-xl font-bold mb-6 text-primary group-hover:text-accent transition-colors">
                                {skillGroup.category}
                            </h3>
                            <div className="flex flex-wrap gap-3">
                                {skillGroup.items.map((item) => (
                                    <span
                                        key={item}
                                        className="px-4 py-2 bg-surface text-secondary text-sm font-medium rounded-full border border-gray-100 group-hover:border-accent/20 group-hover:bg-accent/5 transition-colors"
                                    >
                                        {item}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
