import React, { useEffect, useMemo, useRef, useState } from "react";

export default function FAQSection() {
    const spiralRef = useRef<HTMLDivElement | null>(null);

    // Spiral configuration - yellow/gold theme
    const cfg = {
        points: 700,
        dotRadius: 1.8,
        duration: 3.0,
        color: "#EAB308", // Yellow-500 to match primary
        gradient: "none" as const,
        pulseEffect: true,
        opacityMin: 0.25,
        opacityMax: 0.9,
        sizeMin: 0.5,
        sizeMax: 1.4,
        background: "transparent",
    };

    // Generate spiral SVG and mount
    useEffect(() => {
        if (!spiralRef.current) return;

        const SIZE = 560;
        const GOLDEN_ANGLE = Math.PI * (3 - Math.sqrt(5));
        const N = cfg.points;
        const DOT = cfg.dotRadius;
        const CENTER = SIZE / 2;
        const PADDING = 4;
        const MAX_R = CENTER - PADDING - DOT;

        const svgNS = "http://www.w3.org/2000/svg";
        const svg = document.createElementNS(svgNS, "svg");
        svg.setAttribute("width", String(SIZE));
        svg.setAttribute("height", String(SIZE));
        svg.setAttribute("viewBox", `0 0 ${SIZE} ${SIZE}`);

        for (let i = 0; i < N; i++) {
            const idx = i + 0.5;
            const frac = idx / N;
            const r = Math.sqrt(frac) * MAX_R;
            const theta = idx * GOLDEN_ANGLE;
            const x = CENTER + r * Math.cos(theta);
            const y = CENTER + r * Math.sin(theta);

            const c = document.createElementNS(svgNS, "circle");
            c.setAttribute("cx", x.toFixed(3));
            c.setAttribute("cy", y.toFixed(3));
            c.setAttribute("r", String(DOT));
            c.setAttribute("fill", cfg.color);
            c.setAttribute("opacity", "0.6");

            if (cfg.pulseEffect) {
                const animR = document.createElementNS(svgNS, "animate");
                animR.setAttribute("attributeName", "r");
                animR.setAttribute("values", `${DOT * cfg.sizeMin};${DOT * cfg.sizeMax};${DOT * cfg.sizeMin}`);
                animR.setAttribute("dur", `${cfg.duration}s`);
                animR.setAttribute("begin", `${(frac * cfg.duration).toFixed(3)}s`);
                animR.setAttribute("repeatCount", "indefinite");
                animR.setAttribute("calcMode", "spline");
                animR.setAttribute("keySplines", "0.4 0 0.6 1;0.4 0 0.6 1");
                c.appendChild(animR);

                const animO = document.createElementNS(svgNS, "animate");
                animO.setAttribute("attributeName", "opacity");
                animO.setAttribute("values", `${cfg.opacityMin};${cfg.opacityMax};${cfg.opacityMin}`);
                animO.setAttribute("dur", `${cfg.duration}s`);
                animO.setAttribute("begin", `${(frac * cfg.duration).toFixed(3)}s`);
                animO.setAttribute("repeatCount", "indefinite");
                animO.setAttribute("calcMode", "spline");
                animO.setAttribute("keySplines", "0.4 0 0.6 1;0.4 0 0.6 1");
                c.appendChild(animO);
            }

            svg.appendChild(c);
        }

        spiralRef.current.innerHTML = "";
        spiralRef.current.appendChild(svg);
    }, []);

    // FAQ content for Emcee Manoj
    const faqs = [
        {
            q: "Who is Emcee Manoj?",
            a: "Emcee Manoj is a high-energy corporate and wedding anchor from Maharashtra with 1000+ shows and 8+ years of professional hosting across Pune, Mumbai, Nagpur and Pan India.",
        },
        {
            q: "What types of events do you host?",
            a: "I host Corporate Awards Nights, Annual Days, Product Launches, Weddings, Sangeets, Concerts, Sports Events and Entertainment Shows. Every moment stays fun and engaging.",
        },
        {
            q: "Are you a corporate event anchor in Pune and Mumbai?",
            a: "Yes. I am a professional corporate anchor trusted by brands for Pune, Mumbai, Nagpur and major cities in India.",
        },
        {
            q: "Do you host Marathi and Hindi weddings in Maharashtra?",
            a: "Yes. I specialize in Marathi and Hindi weddings including Sangeet, Reception, Haldi and Cocktail Nights. I ensure every family member enjoys the celebration.",
        },
        {
            q: "Do you travel for events in Nagpur and Pan India?",
            a: "Yes. I travel across Nagpur, Maharashtra and all over India for live shows, weddings and corporate events. International bookings are also open.",
        },
        {
            q: "What languages do you host in?",
            a: "I host confidently in English, Hindi and Marathi. Suitable for both corporate and family audiences.",
        },
        {
            q: "Can you host large crowd events like concerts or festivals?",
            a: "Yes. I have hosted concerts and festivals with 40,000+ audiences. Strong crowd control and big-stage energy.",
        },
        {
            q: "How much does it cost to book Emcee Manoj?",
            a: "Pricing depends on the event scale, location and duration. Share your event details and I will send a custom quote quickly.",
        },
        {
            q: "How early should we book for wedding or corporate events?",
            a: "For peak season events, bookings usually fill 4 to 12 weeks in advance. You can always check last-minute availability.",
        },
        {
            q: "How can we book you for our event?",
            a: "Call or WhatsApp: +91 7387655461 / +91 7387179259 | Email: Emceemanoj.india@gmail.com | Available in Pune, Mumbai, Nagpur, Maharashtra, Pan India and Abroad.",
        },
    ];



    return (
        <section id="faq" className="relative min-h-screen w-full overflow-hidden py-20 bg-background">
            {/* Background Spiral */}
            <div
                className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-20 [mask-image:radial-gradient(circle_at_center,rgba(255,255,255,1),rgba(255,255,255,0.1)_60%,transparent_75%)]"
                style={{ mixBlendMode: "screen" }}
            >
                <div ref={spiralRef} />
            </div>

            {/* Layout */}
            <div className="relative mx-auto max-w-5xl px-6">
                {/* Header */}
                <header className="mb-10 border-b border-border pb-6">
                    <div className="text-center mb-6">
                        <h2 className="font-heading text-4xl md:text-6xl font-black tracking-tight text-foreground mb-4">
                            Frequently Asked Questions
                        </h2>
                        <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
                            Everything you need to know about booking Emcee Manoj for your event
                        </p>
                    </div>

                </header>

                {/* Content */}
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                    {faqs.map((item, i) => (
                        <FAQItem key={i} q={item.q} a={item.a} index={i + 1} />
                    ))}
                </div>
            </div>
        </section>
    );
}

function FAQItem({ q, a, index }: { q: string; a: string; index: number }) {
    const [open, setOpen] = useState(false);

    // Emoji mapping for questions
    const emojis = ["1️⃣", "2️⃣", "3️⃣", "4️⃣", "5️⃣", "6️⃣", "7️⃣", "8️⃣", "9️⃣", "🔟"];
    const emoji = emojis[index - 1] || "❓";

    return (
        <div className="group relative overflow-hidden rounded-2xl border-2 border-border bg-card p-6 transition hover:border-primary hover:shadow-lg hover:shadow-primary/20">
            <button
                onClick={() => setOpen((v) => !v)}
                className="flex w-full items-center justify-between text-left"
                aria-expanded={open}
            >
                <div className="flex items-start gap-3 flex-1">
                    <span className="text-xl flex-shrink-0">{emoji}</span>
                    <h3 className="text-base md:text-lg font-semibold leading-tight text-foreground">{q}</h3>
                </div>
                <span className="ml-4 text-2xl text-muted-foreground transition group-hover:text-primary flex-shrink-0">
                    {open ? "−" : "+"}
                </span>
            </button>
            <div
                className={`grid transition-[grid-template-rows] duration-300 ease-in-out ${open ? "mt-4 grid-rows-[1fr]" : "grid-rows-[0fr]"
                    }`}
            >
                <div className="min-h-0 overflow-hidden">
                    <p className="text-sm md:text-base text-muted-foreground leading-relaxed pl-9">{a}</p>
                </div>
            </div>
        </div>
    );
}
