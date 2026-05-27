"use client";

import Link from "next/link";

export default function Banner() {
    return (
        <section className="relative overflow-hidden bg-white dark:bg-slate-950">

            {/* Background blur circles */}
            <div className="absolute -top-24 left-0 h-72 w-72 rounded-full bg-blue-500/20 blur-3xl"></div>
            <div className="absolute right-0 top-20 h-72 w-72 rounded-full bg-purple-500/20 blur-3xl"></div>

            <div className="relative mx-auto max-w-7xl px-6 py-24 lg:px-8">
                <div className="grid items-center gap-12 lg:grid-cols-2">

                    {/* Left Content */}
                    <div>
                        <p className="mb-4 inline-block rounded-full bg-blue-100 px-4 py-1 text-sm font-medium text-blue-600 dark:bg-slate-800 dark:text-blue-400">
                            🚀 Welcome to my portfolio
                        </p>

                        <h1 className="text-4xl font-extrabold leading-tight text-slate-900 dark:text-white md:text-6xl">
                            Build Modern <span className="text-blue-600">Web Apps</span>
                            <br />
                            with Creativity
                        </h1>

                        <p className="mt-6 max-w-xl text-lg text-slate-600 dark:text-slate-300">
                            I create beautiful, scalable and high-performance web
                            applications using Next.js, React and modern technologies.
                        </p>

                        <div className="mt-8 flex flex-wrap gap-4">
                            <Link
                                href="/projects"
                                className="rounded-xl bg-blue-600 px-6 py-3 font-medium text-white transition hover:bg-blue-700"
                            >
                                View Projects
                            </Link>

                            <Link
                                href="/contact"
                                className="rounded-xl border border-slate-300 px-6 py-3 font-medium text-slate-700 hover:bg-slate-100 dark:border-slate-700 dark:text-white dark:hover:bg-slate-800"
                            >
                                Contact Me
                            </Link>
                        </div>
                    </div>

                    {/* Right Side */}
                    <div className="flex justify-center">
                        <div className="relative">
                            <div className="absolute inset-0 rounded-full bg-blue-500/30 blur-3xl"></div>

                            <img
                                src="/hero.png"
                                alt="Hero"
                                className="relative w-[450px] rounded-3xl shadow-2xl"
                            />
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}