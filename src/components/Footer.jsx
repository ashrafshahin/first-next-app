"use client";

import Link from "next/link";
import {
    FaGithub,
    FaFacebook,
    FaLinkedin,
    FaEnvelope
} from "react-icons/fa";

export default function Footer() {
    return (
        <footer className="border-t border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-950">
            <div className="mx-auto max-w-7xl px-6 py-14">

                <div className="grid gap-10 md:grid-cols-3">

                    {/* Brand */}
                    <div>
                        <h2 className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                            Ashraf Shahin
                        </h2>

                        <p className="mt-4 text-sm leading-6 text-slate-600 dark:text-slate-300">
                            Building modern web experiences with Next.js, React and
                            scalable technologies.
                        </p>

                        <div className="mt-6 flex gap-4">

                            <a
                                href="https://github.com/ashrafshahin"
                                target="_blank"
                                rel="noreferrer"
                                className="rounded-xl p-2 text-slate-500 transition hover:bg-slate-100 hover:text-blue-600 dark:hover:bg-slate-800"
                            >
                                <FaGithub size={20} />
                            </a>

                            <a
                                href="https://uk.linkedin.com/in/ashraf-shahin"
                                target="_blank"
                                rel="noreferrer"
                                className="rounded-xl p-2 text-slate-500 transition hover:bg-slate-100 hover:text-blue-600 dark:hover:bg-slate-800"
                            >
                                <FaLinkedin size={20} />
                            </a>

                            <a
                                href="https://facebook.com/yourusername"
                                target="_blank"
                                rel="noreferrer"
                                className="rounded-xl p-2 text-slate-500 transition hover:bg-slate-100 hover:text-blue-600 dark:hover:bg-slate-800"
                            >
                                <FaFacebook size={20} />
                            </a>

                            <a
                                href="mailto:you@example.com"
                                className="rounded-xl p-2 text-slate-500 transition hover:bg-slate-100 hover:text-blue-600 dark:hover:bg-slate-800"
                            >
                                <FaEnvelope size={20} />
                            </a>

                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                            Quick Links
                        </h3>

                        <div className="mt-4 flex flex-col gap-3">
                            <Link href="/" className="text-slate-600 hover:text-blue-600 dark:text-slate-300">
                                Home
                            </Link>

                            <Link href="/features" className="text-slate-600 hover:text-blue-600 dark:text-slate-300">
                                Features
                            </Link>

                            <Link href="/pricing" className="text-slate-600 hover:text-blue-600 dark:text-slate-300">
                                Pricing
                            </Link>

                            <Link href="/about" className="text-slate-600 hover:text-blue-600 dark:text-slate-300">
                                About
                            </Link>

                            <Link href="/blog" className="text-slate-600 hover:text-blue-600 dark:text-slate-300">
                                Blog
                            </Link>
                        </div>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                            Contact
                        </h3>

                        <div className="mt-4 space-y-3 text-slate-600 dark:text-slate-300">
                            <p>Email: ashraf@example.com</p>
                            <p>Location: Bangladesh</p>
                            <p>Available for freelance work</p>
                        </div>
                    </div>

                </div>

                {/* Bottom */}
                <div className="mt-10 border-t border-slate-200 pt-6 text-center dark:border-slate-800">
                    <p className="text-sm text-slate-500">
                        © {new Date().getFullYear()} Ashraf Shahin. All rights reserved.
                    </p>
                </div>

            </div>
        </footer>
    );
}