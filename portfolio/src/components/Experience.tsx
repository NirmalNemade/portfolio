'use client';

export default function Experience() {
    return (
        <section id="experience" className="py-20 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-green opacity-10 rounded-full blur-3xl"></div>

            <div className="container mx-auto px-6 relative z-10">
                <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
                    Professional <span className="gradient-text">Experience</span>
                </h2>
                <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
                    My journey in software development
                </p>

                <div className="max-w-4xl mx-auto">
                    <div className="glass rounded-2xl p-6 md:p-8 card-hover">
                        <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
                            <div>
                                <h3 className="text-2xl font-bold mb-2">Project Associate - Full Stack Developer</h3>
                                <p className="text-xl text-primary font-semibold">Centre for Development of Advanced Computing (C-DAC)</p>
                            </div>
                            <span className="text-muted-foreground font-medium mt-2 md:mt-0">March 2024 - Present</span>
                        </div>

                        <div className="space-y-4 text-muted-foreground">
                            <p className="flex items-start">
                                <span className="text-primary mr-3 mt-1">▹</span>
                                <span>Designed and developed secure, high-performance web and mobile applications using <strong className="text-foreground">Java, Spring Boot, React.js, Electron.js, and React Native</strong>.</span>
                            </p>
                            <p className="flex items-start">
                                <span className="text-primary mr-3 mt-1">▹</span>
                                <span>Collaborated with cross-functional teams to architect and deliver <strong className="text-foreground">scalable, high-performance features</strong>.</span>
                            </p>
                            <p className="flex items-start">
                                <span className="text-primary mr-3 mt-1">▹</span>
                                <span>Optimized applications for <strong className="text-foreground">speed, security, and reliability</strong> through efficient code design and database management.</span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
