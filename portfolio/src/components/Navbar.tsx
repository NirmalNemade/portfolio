'use client';

import { useState, useEffect } from 'react';
import GooeyNav from './GooeyNav';

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState('home');

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);

            // Update active section based on scroll position
            const sections = ['home', 'about', 'skills', 'projects', 'personal-projects', 'experience', 'education', 'contact'];
            const current = sections.find(section => {
                const element = document.getElementById(section);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    return rect.top <= 100 && rect.bottom >= 100;
                }
                return false;
            });
            if (current) setActiveSection(current);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navItems = [
        { label: 'Home', href: '#home' },
        { label: 'About', href: '#about' },
        { label: 'Skills', href: '#skills' },
        { label: 'Projects', href: '#projects' },
        { label: 'Personal', href: '#personal-projects' },
        { label: 'Experience', href: '#experience' },
        { label: 'Education', href: '#education' },
        { label: 'Contact', href: '#contact' },
    ];

    // Find the active index based on the current section
    const activeIndex = navItems.findIndex(item => item.href === `#${activeSection}`);

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'glass shadow-lg py-4' : 'bg-transparent py-6'
                }`}
        >
            <div className="container mx-auto px-6">
                <div className="flex items-center justify-between">
                    <a href="#home" className="text-2xl font-bold gradient-text">
                        Nirmal Nemade
                    </a>

                    <div className="hidden md:flex items-center">
                        <GooeyNav
                            items={navItems}
                            particleCount={15}
                            particleDistances={[90, 10]}
                            particleR={100}
                            initialActiveIndex={activeIndex >= 0 ? activeIndex : 0}
                            animationTime={600}
                            timeVariance={300}
                            colors={[1, 2, 3, 1, 2, 3, 1, 4]}
                        />
                    </div>

                    <a
                        href="#contact"
                        className="hidden md:block px-6 py-2 bg-gradient-purple text-white rounded-full font-medium hover:shadow-lg hover:scale-105 transition-all duration-300"
                    >
                        Get In Touch
                    </a>
                </div>
            </div>
        </nav>
    );
}
