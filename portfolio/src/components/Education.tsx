'use client';

export default function Education() {
    const education = [
        {
            degree: 'Post Graduate Diploma in Advanced Computing',
            institution: 'Centre for Development of Advanced Computing (C-DAC), MET Mumbai',
            period: 'Sept 2023 - Feb 2024',
            gradient: 'bg-gradient-purple'
        },
        {
            degree: 'Bachelor of Engineering in Computer Science',
            institution: 'Shah & Anchor Kutchhi Engineering College, Mumbai',
            period: '2019 - 2023',
            grade: 'CGPA: 8.67/10',
            gradient: 'bg-gradient-blue'
        },
        {
            degree: 'Higher Secondary Certificate (HSC)',
            institution: 'Maharashtra State Board',
            period: '2019',
            grade: 'Percentage: 86.62%',
            gradient: 'bg-gradient-pink'
        },
        {
            degree: 'Secondary School Certificate (SSC)',
            institution: 'Maharashtra State Board',
            period: '2017',
            grade: 'Percentage: 95.60%',
            gradient: 'bg-gradient-orange'
        }
    ];

    const certifications = [
        {
            title: 'Secure Software Development Lifecycle Practices Professional',
            issuer: 'IIT Bhilai and C-DAC Hyderabad',
            date: 'Feb 2025',
            gradient: 'bg-gradient-purple'
        },
        {
            title: 'Java Spring Boot Certification',
            issuer: 'Coding Shuttle',
            date: 'Sept 2024',
            gradient: 'bg-gradient-blue'
        },
        {
            title: 'Foundational C# with Microsoft Developer Certification',
            issuer: 'FreeCodeCamp',
            date: 'Sept 2023',
            gradient: 'bg-gradient-pink'
        }
    ];

    return (
        <section id="education" className="py-20 relative overflow-hidden">
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-purple opacity-10 rounded-full blur-3xl"></div>

            <div className="container mx-auto px-6 relative z-10">
                <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
                    Education & <span className="gradient-text">Certifications</span>
                </h2>
                <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
                    Academic background and professional certifications
                </p>

                <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
                    {/* Education */}
                    <div>
                        <h3 className="text-2xl font-bold mb-6 gradient-text-blue">Education</h3>
                        <div className="space-y-4">
                            {education.map((edu, idx) => (
                                <div
                                    key={edu.degree}
                                    className="glass rounded-xl p-6 card-hover animate-fade-in-up opacity-0"
                                    style={{ animationDelay: `${idx * 0.1}s` }}
                                >
                                    <div className={`w-12 h-1 ${edu.gradient} rounded-full mb-4`}></div>
                                    <h4 className="text-lg font-bold mb-2">{edu.degree}</h4>
                                    <p className="text-muted-foreground mb-2">{edu.institution}</p>
                                    <div className="flex items-center justify-between text-sm">
                                        <span className="text-muted-foreground">{edu.period}</span>
                                        {edu.grade && <span className="text-primary font-semibold">{edu.grade}</span>}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Certifications */}
                    <div>
                        <h3 className="text-2xl font-bold mb-6 gradient-text-blue">Certifications</h3>
                        <div className="space-y-4">
                            {certifications.map((cert, idx) => (
                                <div
                                    key={cert.title}
                                    className="glass rounded-xl p-6 card-hover animate-fade-in-up opacity-0"
                                    style={{ animationDelay: `${(idx + 0.2) * 0.1}s` }}
                                >
                                    <div className={`w-12 h-1 ${cert.gradient} rounded-full mb-4`}></div>
                                    <h4 className="text-lg font-bold mb-2">{cert.title}</h4>
                                    <p className="text-muted-foreground mb-2">{cert.issuer}</p>
                                    <span className="text-sm text-primary font-semibold">{cert.date}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
