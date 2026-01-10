import { useEffect } from "react";
import { motion } from "framer-motion";
import { Mic } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import TestimonialsSection from "@/components/TestimonialsSection";
import ContactSection from "@/components/ContactSection";

interface Testimonial {
    text: string;
    by: string;
}

interface ServicePageLayoutProps {
    title: string;
    tagline: string;
    description: string;
    heroImage: string;
    galleryImages: string[];
    color: string;
    testimonials: Testimonial[];
    objectPosition?: string;
}

const ServicePageLayout = ({
    title,
    tagline,
    description,
    heroImage,
    galleryImages,
    color,
    testimonials,
    objectPosition,
}: ServicePageLayoutProps) => {
    useEffect(() => {
        document.documentElement.classList.add("dark");
        window.scrollTo(0, 0);
    }, []);

    const scrollToForm = (e: React.MouseEvent) => {
        e.preventDefault();
        const formElement = document.getElementById("booking-form");
        if (formElement) {
            formElement.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <main className="min-h-screen bg-background">
            <Header />

            {/* Hero Section */}
            <section className="relative pt-24 pb-16 overflow-hidden">
                <div className={`absolute inset-0 bg-gradient-to-br ${color} opacity-20`} />
                <div className="container mx-auto px-4">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                        >
                            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-extrabold text-foreground mb-4">
                                {title}
                            </h1>
                            <p className="font-accent text-xl md:text-2xl text-primary italic mb-6">
                                {tagline}
                            </p>
                            <p className="font-body text-lg text-muted-foreground mb-8">
                                {description}
                            </p>
                            <div className="flex justify-start">
                                <Button variant="hero" size="xl" asChild>
                                    <a href="#booking-form" onClick={scrollToForm} className="flex items-center gap-2">
                                        <Mic className="w-5 h-5" />
                                        Book for Your Event
                                    </a>
                                </Button>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            className="relative"
                        >
                            <div className={`absolute inset-0 bg-gradient-to-br ${color} rounded-3xl blur-3xl opacity-30`} />
                            <img
                                src={heroImage}
                                alt={title}
                                loading="eager"
                                className="relative w-full h-auto rounded-3xl border-4 border-primary/30 shadow-2xl"
                                style={objectPosition ? { objectFit: 'cover', objectPosition, height: '600px' } : {}}
                            />
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Gallery Section */}
            {galleryImages.length > 0 && (
                <section className="py-16 bg-card">
                    <div className="container mx-auto px-4">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="font-heading text-3xl md:text-4xl font-bold text-foreground text-center mb-12"
                        >
                            Events Gallery
                        </motion.h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                            {galleryImages.map((img, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="aspect-video rounded-2xl overflow-hidden border border-border hover:border-primary/50 transition-all hover:scale-105"
                                >
                                    <img
                                        src={img}
                                        alt={`${title} gallery ${index + 1}`}
                                        loading="lazy"
                                        className="w-full h-full object-cover"
                                    />
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* Main Testimonials Section from Home Page */}
            <TestimonialsSection />

            {/* Contact Form Section */}
            <section id="booking-form" className="scroll-mt-20">
                <ContactSection />
            </section>

            <Footer />
            <WhatsAppButton />
        </main>
    );
};

export default ServicePageLayout;



