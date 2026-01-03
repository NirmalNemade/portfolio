'use client';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="py-8 border-t border-border">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row items-center justify-between">
                    <p className="text-muted-foreground text-sm mb-4 md:mb-0">
                        © {currentYear} Nirmal Nemade. All rights reserved.
                    </p>
                    <div className="flex items-center gap-6">
                        <a
                            href="https://www.linkedin.com/in/nirmal-nemade"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-muted-foreground hover:text-primary transition-colors"
                        >
                            LinkedIn
                        </a>
                        <a
                            href="https://github.com/nirmalnemade"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-muted-foreground hover:text-primary transition-colors"
                        >
                            GitHub
                        </a>
                        <a
                            href="mailto:nirmalnemade71@gmail.com"
                            className="text-muted-foreground hover:text-primary transition-colors"
                        >
                            Email
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
