"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
// 1. Hook to check the current URL path
import { usePathname } from "next/navigation";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname(); // Get active route path (e.g. "/pricing")
    
    const [theme, setTheme] = useState("light");
    const [mounted, setMounted] = useState(false);

    // Check local storage and system theme preferences on load
    useEffect(() => {
        const savedTheme = localStorage.getItem("theme");

        if (savedTheme === "dark") {
            setTheme("dark");
            document.documentElement.classList.add("dark");
        } else {
            setTheme("light");
            document.documentElement.classList.remove("dark");
        }

        setMounted(true);
    }, []);

    // Toggle class and update local storage
    const toggleTheme = () => {
        const newTheme = theme === "light" ? "dark" : "light";

        setTheme(newTheme);

        document.documentElement.classList.toggle(
            "dark",
            newTheme === "dark"
        );

        localStorage.setItem("theme", newTheme);
    };


    // Reusable styling function to highlight active desktop items
    const getLinkStyle = (path) => {
        const baseStyle = "text-sm font-medium transition-colors duration-200";
        const isActive = pathname === path;

        return isActive
            ? `${baseStyle} text-blue-600 dark:text-blue-400`
            : `${baseStyle} text-slate-600 hover:text-blue-600 dark:text-slate-300 dark:hover:text-blue-400`;
    };

    // Reusable styling function to highlight active mobile menu items
    const getMobileLinkStyle = (path) => {
        const baseStyle = "block rounded-md px-3 py-2 text-base font-medium transition-colors";
        const isActive = pathname === path;

        return isActive
            ? `${baseStyle} bg-blue-50 text-blue-600 dark:bg-slate-800 dark:text-blue-400`
            : `${baseStyle} text-slate-600 hover:bg-slate-50 hover:text-blue-600 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-blue-400`;
    };

    return (
        
        // 2. DARK MODE VARIANT: Added dark:bg-slate-950 and dark:border-slate-800
        <nav className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/80 backdrop-blur-md dark:border-slate-800 dark:bg-slate-950/80">
            
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                
                <div className="flex h-16 items-center justify-between">

                    {/* LOGO */}
                    <div className="shrink-0">
                        <Link href="/" className="text-xl font-bold text-blue-600 dark:text-blue-400">
                            Ashraf Shahin
                        </Link>
                    </div>

                    {/* DESKTOP LINKS (Using Active Style Helper) */}
                    <div className="hidden md:flex items-center space-x-8">
                        <Link href="/features" className={getLinkStyle("/features")}>
                            Features
                        </Link>
                        <Link href="/pricing" className={getLinkStyle("/pricing")}>
                            Pricing
                        </Link>
                        <Link href="/about" className={getLinkStyle("/about")}>
                            About
                        </Link>
                        
                        <Link href="/login" className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 transition">
                            Get Started
                        </Link>
                      
                            <button
                                onClick={toggleTheme}
                                className="rounded-lg p-2 text-slate-500 hover:bg-slate-100 dark:text-slate-400 dark:hover:bg-slate-800 transition-colors"
                                aria-label="Toggle Theme"
                            >
                            {mounted ? (
                                theme === "dark" ? (
                                    /* Sun Icon (Shows when dark theme is active) */
                                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m0 13.5V21M4.22 4.22l1.58 1.58m12.42 12.42l1.58 1.58M3 12h2.25m13.5 0H21M4.22 19.78l1.58-1.58M17.66 6.34l1.58-1.58M12 7.5a4.5 4.5 0 110 9 4.5 4.5 0 010-9z" />
                                    </svg>
                                ) : (
                                    /* Moon Icon (Shows when light theme is active) */
                                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
                                    </svg>
                                )
                                ): null }
                            </button>
                     

                    </div>

                    {/* MOBILE HAMBURGER BUTTON */}
                    <div className="flex md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            type="button"
                            className="inline-flex items-center justify-center rounded-md p-2 text-slate-500 hover:bg-slate-100 hover:text-slate-700 dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-slate-200 focus:outline-none"
                        >
                            <span className="sr-only">Open main menu</span>
                            {isOpen ? (
                                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            ) : (
                                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {/* ANIMATED SLIDE-DOWN DROPDOWN MENU */}
            <div
                className={`grid transition-all duration-300 ease-in-out md:hidden border-t border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-950 ${isOpen
                        ? "grid-rows-[1fr] opacity-100 visible"
                        : "grid-rows-[0fr] opacity-0 invisible pointer-events-none"
                    }`}
            >
                <div className="overflow-hidden">
                    <div className="space-y-1 px-2 pb-4 pt-3 shadow-lg">
                        <Link href="/features" onClick={() => setIsOpen(false)} className={getMobileLinkStyle("/features")}>
                            Features
                        </Link>
                        <Link href="/pricing" onClick={() => setIsOpen(false)} className={getMobileLinkStyle("/pricing")}>
                            Pricing
                        </Link>
                        <Link href="/about" onClick={() => setIsOpen(false)} className={getMobileLinkStyle("/about")}>
                            About
                        </Link>
                        
                        <div className="pt-2 px-3">
                            <Link href="/login" onClick={() => setIsOpen(false)} className="block w-full rounded-lg bg-blue-600 px-4 py-2.5 text-center text-base font-medium text-white hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600">
                                Get Started
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
}
