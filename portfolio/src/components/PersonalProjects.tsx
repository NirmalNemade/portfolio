'use client';

import { useState } from 'react';

export default function PersonalProjects() {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    const personalProjects = [
        {
            title: 'Project Name 1',
            description: 'A brief description of your deployed project. Explain what problem it solves and what makes it unique.',
            image: '/projects/project1.png', // Add your project screenshot
            liveUrl: 'https://your-project-1.vercel.app',
            githubUrl: 'https://github.com/yourusername/project1',
            tech: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Vercel'],
            gradient: 'bg-gradient-purple',
            featured: true
        },
        {
            title: 'Project Name 2',
            description: 'Another amazing project you built and deployed. Highlight the key features and technologies used.',
            image: '/projects/project2.png',
            liveUrl: 'https://your-project-2.vercel.app',
            githubUrl: 'https://github.com/yourusername/project2',
            tech: ['React Native', 'Expo', 'Firebase', 'TypeScript'],
            gradient: 'bg-gradient-blue',
            featured: true
        },
        {
            title: 'Project Name 3',
            description: 'Describe this project and what you learned while building it. Mention any challenges overcome.',
            image: '/projects/project3.png',
            liveUrl: 'https://your-project-3.vercel.app',
            githubUrl: 'https://github.com/yourusername/project3',
            tech: ['Node.js', 'Express', 'MongoDB', 'React', 'Docker'],
            gradient: 'bg-gradient-pink',
            featured: false
        },
        {
            title: 'Project Name 4',
            description: 'Your fourth project showcasing different skills and technologies. Explain its purpose and impact.',
            image: '/projects/project4.png',
            liveUrl: 'https://your-project-4.vercel.app',
            githubUrl: 'https://github.com/yourusername/project4',
            tech: ['Python', 'FastAPI', 'PostgreSQL', 'React', 'AWS'],
            gradient: 'bg-gradient-orange',
            featured: false
        }
    ];

    return (
        <section id="personal-projects" className="py-20 relative overflow-hidden">
            <div className="absolute top-1/4 left-0 w-96 h-96 bg-gradient-blue opacity-10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-gradient-purple opacity-10 rounded-full blur-3xl"></div>

            <div className="container mx-auto px-6 relative z-10">
                <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
                    Personal <span className="gradient-text">Projects</span>
                </h2>
                <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
                    Deployed projects I've built in my free time to explore new technologies and solve real-world problems
                </p>

                {/* Featured Projects Grid */}
                <div className="max-w-7xl mx-auto mb-12">
                    <h3 className="text-2xl font-bold mb-8 flex items-center gap-2">
                        <span className="text-primary">★</span> Featured Projects
                    </h3>
                    <div className="grid md:grid-cols-2 gap-8">
                        {personalProjects
                            .filter(project => project.featured)
                            .map((project, idx) => (
                                <div
                                    key={project.title}
                                    className="group glass rounded-2xl overflow-hidden card-hover animate-fade-in-up opacity-0 relative"
                                    style={{ animationDelay: `${idx * 0.15}s` }}
                                    onMouseEnter={() => setHoveredIndex(idx)}
                                    onMouseLeave={() => setHoveredIndex(null)}
                                >
                                    {/* Project Image */}
                                    <div className="relative h-64 overflow-hidden bg-gradient-to-br from-primary/20 to-secondary/20">
                                        {project.image ? (
                                            <img
                                                src={project.image}
                                                alt={project.title}
                                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                            />
                                        ) : (
                                            <div className="w-full h-full flex items-center justify-center">
                                                <div className="text-6xl opacity-20">🚀</div>
                                            </div>
                                        )}
                                        <div className={`absolute inset-0 ${project.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-300`}></div>
                                    </div>

                                    {/* Project Info */}
                                    <div className="p-6">
                                        <h4 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                                            {project.title}
                                        </h4>
                                        <p className="text-muted-foreground mb-4 line-clamp-3">
                                            {project.description}
                                        </p>

                                        {/* Tech Stack */}
                                        <div className="mb-4">
                                            <div className="flex flex-wrap gap-2">
                                                {project.tech.map((tech) => (
                                                    <span
                                                        key={tech}
                                                        className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium"
                                                    >
                                                        {tech}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>

                                        {/* Action Buttons */}
                                        <div className="flex gap-4">
                                            <a
                                                href={project.liveUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex-1 px-4 py-2 bg-gradient-purple text-white rounded-lg font-medium hover:shadow-lg hover:scale-105 transition-all duration-300 text-center flex items-center justify-center gap-2"
                                            >
                                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                                </svg>
                                                Live Demo
                                            </a>
                                            <a
                                                href={project.githubUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="px-4 py-2 glass rounded-lg font-medium hover:shadow-lg hover:scale-105 transition-all duration-300 flex items-center justify-center"
                                                aria-label="View on GitHub"
                                            >
                                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                                                </svg>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            ))}
                    </div>
                </div>

                {/* Other Projects Grid */}
                <div className="max-w-7xl mx-auto">
                    <h3 className="text-2xl font-bold mb-8">More Projects</h3>
                    <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6">
                        {personalProjects
                            .filter(project => !project.featured)
                            .map((project, idx) => (
                                <div
                                    key={project.title}
                                    className="glass rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300 animate-fade-in-up opacity-0"
                                    style={{ animationDelay: `${(idx + 2) * 0.15}s` }}
                                >
                                    <div className={`h-1 ${project.gradient}`}></div>
                                    <div className="p-6">
                                        <h4 className="text-xl font-bold mb-2">{project.title}</h4>
                                        <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                                            {project.description}
                                        </p>

                                        {/* Tech Stack */}
                                        <div className="mb-4">
                                            <div className="flex flex-wrap gap-2">
                                                {project.tech.slice(0, 4).map((tech) => (
                                                    <span
                                                        key={tech}
                                                        className="px-2 py-1 bg-primary/10 text-primary rounded text-xs"
                                                    >
                                                        {tech}
                                                    </span>
                                                ))}
                                                {project.tech.length > 4 && (
                                                    <span className="px-2 py-1 text-muted-foreground text-xs">
                                                        +{project.tech.length - 4} more
                                                    </span>
                                                )}
                                            </div>
                                        </div>

                                        {/* Action Buttons */}
                                        <div className="flex gap-3">
                                            <a
                                                href={project.liveUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex-1 px-3 py-2 bg-primary/10 text-primary rounded-lg text-sm font-medium hover:bg-primary/20 transition-all duration-300 text-center"
                                            >
                                                View Live
                                            </a>
                                            <a
                                                href={project.githubUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="px-3 py-2 glass rounded-lg text-sm font-medium hover:bg-primary/10 transition-all duration-300"
                                                aria-label="GitHub"
                                            >
                                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                                                </svg>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
