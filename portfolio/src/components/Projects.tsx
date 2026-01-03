'use client';

export default function Projects() {
    const projects = [
        {
            title: 'DGQA: Defence Testing Portal',
            period: 'April 2024 - Present',
            description: 'Comprehensive web application for the Directorate General of Quality Assurance',
            gradient: 'bg-gradient-purple',
            features: [
                'Role-based access control with multi-level approval workflows',
                'Service provider lab listing and user service request system',
                'Real-time updates and notifications',
                'Secure payment gateway integration',
                'WebSocket-based communication system'
            ],
            tech: ['Java 21', 'Spring Boot', 'Spring Security', 'React.js', 'PostgreSQL', 'Material-UI', 'Tailwind CSS', 'WebSockets']
        },
        {
            title: 'SANCHAR 3.0',
            period: 'March 2024 - Present',
            description: 'Secure desktop application for internal mail with end-to-end encryption',
            gradient: 'bg-gradient-blue',
            features: [
                'Led architecture and development of secure desktop application using Electron',
                'End-to-end encryption and decryption for classified data transmission',
                'Optimized for closed-network environments',
                'Real-time mail synchronization using WebSockets',
                'Integration with Exchange Server, IMAP, and SMTP'
            ],
            tech: ['Electron.js', 'SQLite', 'JavaScript', 'WebSockets', 'Redux', 'Tailwind CSS', 'Material-UI']
        },
        {
            title: 'SANCHAR Tablet Application',
            period: 'March 2024 - December 2024',
            description: 'Companion mobile app for viewing secure emails on tablet devices',
            gradient: 'bg-gradient-pink',
            features: [
                'Built companion mobile app for secure email viewing',
                'Robust data synchronization with main mail system',
                'SQLite and AsyncStorage for offline data management',
                'Responsive UI optimized for various tablet screen sizes',
                'Seamless integration with SANCHAR 3.0'
            ],
            tech: ['React Native', 'Expo', 'SQLite', 'JavaScript', 'Redux', 'Tailwind CSS', 'React Navigation']
        }
    ];

    return (
        <section id="projects" className="py-20 relative overflow-hidden">
            <div className="absolute top-1/2 right-0 w-96 h-96 bg-gradient-orange opacity-10 rounded-full blur-3xl"></div>

            <div className="container mx-auto px-6 relative z-10">
                <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
                    Featured <span className="gradient-text">Projects</span>
                </h2>
                <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
                    Defense and government-grade applications I've built
                </p>

                <div className="max-w-6xl mx-auto space-y-8">
                    {projects.map((project, idx) => (
                        <div
                            key={project.title}
                            className="glass rounded-2xl overflow-hidden card-hover animate-fade-in-up opacity-0"
                            style={{ animationDelay: `${idx * 0.15}s` }}
                        >
                            <div className={`h-2 ${project.gradient}`}></div>
                            <div className="p-6 md:p-8">
                                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                                    <h3 className="text-2xl font-bold mb-2 md:mb-0">{project.title}</h3>
                                    <span className="text-sm text-muted-foreground">{project.period}</span>
                                </div>
                                <p className="text-muted-foreground mb-6">{project.description}</p>

                                <div className="mb-6">
                                    <h4 className="text-lg font-semibold mb-3">Key Features:</h4>
                                    <ul className="space-y-2">
                                        {project.features.map((feature, i) => (
                                            <li key={i} className="flex items-start text-muted-foreground">
                                                <span className="text-primary mr-3 mt-1">▹</span>
                                                <span>{feature}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div>
                                    <h4 className="text-sm font-semibold mb-3 text-muted-foreground">Technologies Used:</h4>
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
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
