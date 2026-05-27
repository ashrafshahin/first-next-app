"use client";

import {
    Code2,
    ShieldCheck,
    Zap,
    Smartphone,
    Globe,
    Database,
} from "lucide-react";

export default function Features() {
    const features = [
        {
            title: "Clean Code",
            description:
                "Write scalable and maintainable code following modern standards.",
            icon: <Code2 size={28} />,
        },
        {
            title: "Fast Performance",
            description:
                "Optimized applications with blazing fast loading speed.",
            icon: <Zap size={28} />,
        },
        {
            title: "Secure System",
            description:
                "Built with strong security practices and authentication flow.",
            icon: <ShieldCheck size={28} />,
        },
        {
            title: "Responsive Design",
            description:
                "Perfect UI experience across desktop, tablet and mobile.",
            icon: <Smartphone size={28} />,
        },
        {
            title: "Global Access",
            description:
                "Reach users worldwide with scalable infrastructure.",
            icon: <Globe size={28} />,
        },
        {
            title: "Database Ready",
            description:
                "Powerful backend integration and optimized data management.",
            icon: <Database size={28} />,
        },
    ];

    return (
        <section className="bg-slate-50 py-24 dark:bg-slate-900">
            <div className="mx-auto max-w-7xl px-6">

                {/* heading */}
                <div className="mx-auto max-w-2xl text-center">
                    <p className="mb-3 text-sm font-semibold text-blue-600">
                        FEATURES
                    </p>

                    <h2 className="text-3xl font-bold text-slate-900 dark:text-white md:text-5xl">
                        Everything you need in one place
                    </h2>

                    <p className="mt-5 text-slate-600 dark:text-slate-300">
                        Modern tools and powerful features designed to create
                        fast and scalable applications.
                    </p>
                </div>

                {/* cards */}
                <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="
              group rounded-3xl
              border border-slate-200
              bg-white
              p-8
              transition-all
              duration-300
              hover:-translate-y-2
              hover:shadow-2xl
              dark:border-slate-700
              dark:bg-slate-950
            "
                        >
                            <div
                                className="
                inline-flex rounded-2xl
                bg-blue-100
                p-4
                text-blue-600
                dark:bg-slate-800
              "
                            >
                                {feature.icon}
                            </div>

                            <h3 className="mt-6 text-xl font-bold text-slate-900 dark:text-white">
                                {feature.title}
                            </h3>

                            <p className="mt-3 text-slate-600 dark:text-slate-300">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}