'use client';

export default function About() {
    return (
        <section id="about" className="py-20 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-pink opacity-10 rounded-full blur-3xl"></div>

            <div className="container mx-auto px-6 relative z-10">
                <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
                    About <span className="gradient-text">Me</span>
                </h2>
                <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
                    Passionate about building secure, scalable solutions
                </p>

                <div className="max-w-4xl mx-auto">
                    <div className="glass rounded-2xl p-8 md:p-12 card-hover">
                        <h3 className="text-2xl font-bold mb-6 gradient-text-blue">Professional Summary</h3>
                        <div className="space-y-4 text-muted-foreground">
                            <p className="flex items-start">
                                <span className="text-primary mr-3 mt-1">▹</span>
                                <span>Software Developer with <strong className="text-foreground">2 years of experience</strong> in designing, developing, and deploying secure and scalable applications.</span>
                            </p>
                            <p className="flex items-start">
                                <span className="text-primary mr-3 mt-1">▹</span>
                                <span>Strong background in <strong className="text-foreground">full-stack development</strong> with hands-on experience across frontend, backend, database systems, and API integrations.</span>
                            </p>
                            <p className="flex items-start">
                                <span className="text-primary mr-3 mt-1">▹</span>
                                <span>Proven ability to deliver high-quality solutions for <strong className="text-foreground">defense and government-grade applications</strong>, with a focus on security, reliability, and performance.</span>
                            </p>
                            <p className="flex items-start">
                                <span className="text-primary mr-3 mt-1">▹</span>
                                <span>Skilled in modern technologies including <strong className="text-foreground">React.js, Electron.js, React Native, Spring Boot, PostgreSQL, MySQL, SQLite, and Kubernetes</strong>.</span>
                            </p>
                            <p className="flex items-start">
                                <span className="text-primary mr-3 mt-1">▹</span>
                                <span>Adept at understanding requirements, creating system architecture, developing end-to-end solutions, and collaborating with cross-functional teams for successful delivery.</span>
                            </p>
                        </div>

                        <div className="mt-8 pt-8 border-t border-border">
                            <h4 className="text-xl font-semibold mb-4">Career Objective</h4>
                            <p className="text-muted-foreground">
                                I aim to advance my career in software development by securing an exciting and challenging role within a forward-thinking organization. I seek to leverage my hands-on technical expertise, problem-solving ability, and development experience to contribute meaningfully to the company's growth while continuing to enhance my skills.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
