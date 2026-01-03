'use client';

export default function Skills() {
    const skillCategories = [
        {
            title: 'Specialization',
            gradient: 'bg-gradient-purple',
            skills: [
                'Spring Boot', 'Spring Security', 'Spring Data JPA', 'Hibernate',
                'Microservices', 'RESTful APIs', 'React.js', 'React Native', 'PostgreSQL'
            ]
        },
        {
            title: 'Programming Languages',
            gradient: 'bg-gradient-blue',
            skills: ['Java', 'JavaScript', 'HTML', 'CSS', 'TypeScript']
        },
        {
            title: 'Frameworks & Libraries',
            gradient: 'bg-gradient-pink',
            skills: [
                'Spring Boot', 'React.js', 'Next.js', 'React Native', 'Maven',
                'Actuator', 'Redux', 'Axios', 'Tailwind CSS', 'Material-UI (MUI)', 'Vite'
            ]
        },
        {
            title: 'Databases',
            gradient: 'bg-gradient-orange',
            skills: ['MySQL', 'PostgreSQL', 'SQLite']
        },
        {
            title: 'Tools & Protocols',
            gradient: 'bg-gradient-green',
            skills: ['Git', 'GitLab', 'Docker', 'Kubernetes']
        }
    ];

    return (
        <section id="skills" className="py-20 relative overflow-hidden">
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-blue opacity-10 rounded-full blur-3xl"></div>

            <div className="container mx-auto px-6 relative z-10">
                <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
                    Technical <span className="gradient-text">Skills</span>
                </h2>
                <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
                    Technologies and tools I work with
                </p>

                <div className="max-w-6xl mx-auto space-y-8">
                    {skillCategories.map((category, idx) => (
                        <div
                            key={category.title}
                            className="glass rounded-2xl p-6 md:p-8 card-hover animate-fade-in-up opacity-0"
                            style={{ animationDelay: `${idx * 0.1}s` }}
                        >
                            <div className="flex items-center mb-6">
                                <div className={`w-1 h-8 ${category.gradient} rounded-full mr-4`}></div>
                                <h3 className="text-xl md:text-2xl font-bold">{category.title}</h3>
                            </div>
                            <div className="flex flex-wrap gap-3">
                                {category.skills.map((skill) => (
                                    <span
                                        key={skill}
                                        className="px-4 py-2 glass rounded-full text-sm font-medium skill-badge cursor-default"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
