import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Mic, Instagram, Facebook, Linkedin, Youtube, MapPin, X } from "lucide-react";
import { AnimatedDock } from "@/components/ui/animated-dock";
import { motion, AnimatePresence } from "framer-motion";

const acronymData = [
  { letter: "M", meaning: "Memorable Experiences" },
  { letter: "A", meaning: "Applause Guaranteed" },
  { letter: "N", meaning: "Non-Stop Entertainment" },
  { letter: "O", meaning: "Occasion Perfect Host" },
  { letter: "J", meaning: "Just the Best Vibes" },
];

const heroImages = [
  "/optimized/Manoj%20Images/Manoj%201-medium.webp",
  "/optimized/Manoj%20Images/manoj%202-medium.webp",
  "/optimized/Manoj%20Images/Manoj%203-medium.webp",
  "/optimized/Manoj%20Images/Manoj%204-medium.webp",
  "/optimized/Manoj%20Images/Manoj%205-medium.webp",
];

const HeroSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isImagePopupOpen, setIsImagePopupOpen] = useState(false);

  // Acronym animation - also controls image changes
  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setActiveIndex((prev) => (prev + 1) % acronymData.length);
        setIsAnimating(false);
      }, 300);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      {/* Spotlight effect */}
      <div className="absolute inset-0 bg-spotlight pointer-events-none" />

      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute top-20 left-10 w-96 h-96 bg-primary rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-secondary rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 pt-24 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center lg:text-left space-y-8"
          >
            {/* Name */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold mb-4 whitespace-nowrap">
                <span className="text-primary">Emcee</span>{" "}
                <span className="text-foreground">Manoj</span>
              </h1>
            </motion.div>

            {/* Acronym Animation - Clean inline design */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="relative"
            >
              {/* Letters row */}
              <div className="flex justify-center lg:justify-start gap-3 md:gap-4 mb-2">
                {acronymData.map((item, index) => (
                  <span
                    key={item.letter}
                    className={`font-heading text-3xl md:text-4xl lg:text-5xl font-extrabold transition-all duration-300 cursor-default ${index === activeIndex
                      ? "text-primary scale-110"
                      : "text-foreground/30 hover:text-foreground/50"
                      } ${index === activeIndex && isAnimating ? "letter-flip" : ""}`}
                    style={index === activeIndex ? { textShadow: '0 0 25px rgba(212, 175, 55, 0.6)' } : {}}
                  >
                    {item.letter}
                  </span>
                ))}
              </div>
              {/* Meaning with gradient underline */}
              <div className="relative inline-block">
                <p className="font-accent text-lg md:text-xl text-primary italic">
                  {acronymData[activeIndex].meaning}
                </p>
                <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-primary/80 via-primary/40 to-transparent rounded-full" />
              </div>
            </motion.div>

            {/* Tagline */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="space-y-2"
            >
              <p className="font-accent text-xl md:text-2xl text-foreground/80 italic">
                Transitioned from Medicines to the Mic
              </p>
              <p className="font-body text-lg text-muted-foreground">
                Now Prescribing Smiles, Cheers & Goosebumps.
              </p>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.0 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <Button variant="hero" size="xl" asChild>
                <a href="/#contact" className="flex items-center gap-2">
                  <Mic className="w-5 h-5" />
                  Book Emcee Manoj
                </a>
              </Button>
              <Button variant="heroOutline" size="xl" asChild>
                <a href="#reels" className="flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polygon points="5 3 19 12 5 21 5 3" />
                  </svg>
                  Watch in Action
                </a>
              </Button>
            </motion.div>
          </motion.div>

          {/* Right - Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Glow effect behind image */}
              <div className="absolute inset-0 bg-primary/20 rounded-full blur-3xl scale-90" />

              {/* Hero Image Carousel - Synced with M A N O J */}
              <div
                className="relative w-80 h-96 md:w-96 md:h-[500px] rounded-3xl overflow-hidden border-4 border-primary/30 shadow-2xl cursor-pointer transition-transform hover:scale-105"
                onClick={() => setIsImagePopupOpen(true)}
              >
                <AnimatePresence mode="wait">
                  <motion.img
                    key={activeIndex}
                    initial={{ opacity: 0, scale: 1.05 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{
                      duration: 0.8,
                      ease: "easeInOut"
                    }}
                    src={heroImages[activeIndex]}
                    alt="Emcee Manoj - Professional Anchor and Host"
                    loading="eager"
                    className="w-full h-full object-cover"
                    style={activeIndex === 1 ? { objectPosition: 'center 20%' } : {}}
                  />
                </AnimatePresence>
              </div>

              {/* Social Media Dock */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.2 }}
                className="mt-6 flex justify-center"
              >
                <AnimatedDock
                  items={[
                    {
                      link: "https://www.instagram.com/emcee_manoj/",
                      target: "_blank",
                      Icon: <Instagram size={22} />,
                    },
                    {
                      link: "https://www.facebook.com/emceemanojj/",
                      target: "_blank",
                      Icon: <Facebook size={22} />,
                    },
                    {
                      link: "https://www.linkedin.com/in/manojkohale96/",
                      target: "_blank",
                      Icon: <Linkedin size={22} />,
                    },
                    {
                      link: "https://www.youtube.com/@emceemanoj/",
                      target: "_blank",
                      Icon: <Youtube size={22} />,
                    },
                    {
                      link: "https://maps.app.goo.gl/VBNqhy1iRcFcVn7y7",
                      target: "_blank",
                      Icon: <MapPin size={22} />,
                    },
                  ]}
                />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Image Popup Modal */}
      <AnimatePresence>
        {isImagePopupOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4"
            onClick={() => setIsImagePopupOpen(false)}
          >
            <button
              onClick={() => setIsImagePopupOpen(false)}
              className="absolute top-4 right-4 p-2 rounded-full bg-primary text-primary-foreground hover:bg-primary/80 transition-colors z-10"
              aria-label="Close"
            >
              <X className="w-6 h-6" />
            </button>
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative max-w-5xl max-h-[90vh] w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={heroImages[activeIndex]}
                alt="Emcee Manoj - Professional Anchor and Host"
                loading="eager"
                className="w-full h-full object-contain rounded-2xl"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default HeroSection;
