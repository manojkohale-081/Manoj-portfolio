import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Building2, Heart, Trophy, Music2, Image } from "lucide-react";
import InstagramReels from "./InstagramReels";
import { ImageAutoSlider } from "@/components/ui/image-auto-slider";

const portfolioCategories = [
  {
    icon: Building2,
    title: "Corporate Experiences",
    description: "Award shows, annual days & leadership events that boost engagement & make teams feel celebrated.",
    tagline: "Brands trust him. Audiences remember him.",
    locations: "Corporate Anchor in Pune | Mumbai | Nagpur",
    color: "from-blue-500/20 to-transparent",
    image: "/optimized/Corporate/Corporate Exp-medium.webp",
    slug: "/services/corporate",
  },
  {
    icon: Heart,
    title: "Wedding & Sangeet Magic",
    description: "Your love story, amplified. Family fun, emotional moments, dance battles → all perfectly hosted so that everyone feels included.",
    tagline: "Every memory becomes a reel.",
    locations: "Wedding Anchor India | Hindi/Marathi Emcee",
    color: "from-pink-500/20 to-transparent",
    image: "/optimized/Shadi events/Weeding and Sangeet Night-medium.webp",
    slug: "/services/wedding",
  },
  {
    icon: Trophy,
    title: "Sports & Cricket Hosting",
    description: "High-energy commentary, team hype, live emotion. From Maharashtra Premier League to university leagues.",
    tagline: "He keeps the crowd roaring higher than the scoreboard.",
    locations: "Sports Anchor Maharashtra",
    color: "from-green-500/20 to-transparent",
    image: "/optimized/Mpl/Sports & Cricket Hosting-medium.webp",
    slug: "/services/sports",
  },
  {
    icon: Music2,
    title: "Concerts & Entertainment Nights",
    description: "40,000 fans. Big lights. Loud cheers. Pure adrenaline.",
    tagline: "He isn't just hosting, he's running the vibe.",
    locations: "Concert Emcee | Event Host India",
    color: "from-purple-500/20 to-transparent",
    image: "/optimized/Corporate/Concert-medium.webp",
    slug: "/services/concerts",
  },
];

const galleryImages = [
  "/optimized/Bts/6D5A9982-medium.webp",
  "/optimized/Bts/DSC00439-medium.webp",
  "/optimized/Bts/DSC09651-medium.webp",
  "/optimized/Bts/DSC_7917-medium.webp",
  "/optimized/Bts/IMG_1861-medium.webp",
  "/optimized/Bts/IMG_3322-medium.webp",
  "/optimized/Bts/MHRA3599-medium.webp",
  "/optimized/Bts/MHRA4176-medium.webp",
  "/optimized/Bts/MHRA6206-medium.webp",
  "/optimized/Bts/NMG05427-medium.webp",
  "/optimized/Bts/Prajakta mali -medium.webp",
  "/optimized/Bts/Yashraj mukhate-medium.webp"
];

// Shuffle function
const shuffleArray = <T,>(array: T[]): T[] => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

const PortfolioSection = () => {
  const [shuffledImages, setShuffledImages] = useState<string[]>([]);

  useEffect(() => {
    // Shuffle images on component mount
    setShuffledImages(shuffleArray(galleryImages));
  }, []);

  return (
    <section id="portfolio" className="py-20 bg-background relative">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">

          <h2 className="font-heading text-4xl md:text-5xl font-extrabold text-foreground mb-4">
            Every Stage. Every Emotion. Every Audience.
          </h2>
          <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
            From boardrooms to baraats… Emcee Manoj adapts, connects, and delivers unforgettable energy, every single time.
          </p>
        </div>

        {/* Portfolio Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-16">
          {portfolioCategories.map((category, index) => (
            <Link
              to={category.slug}
              key={index}
              className="group relative bg-card rounded-3xl overflow-hidden border border-border card-hover block"
            >
              {/* Image area */}
              <div className={`aspect-video bg-gradient-to-br ${category.color} from-accent/50 to-card relative overflow-hidden`}>
                {category.image ? (
                  <img
                    src={category.image}
                    alt={category.title}
                    loading="lazy"
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <Image className="w-12 h-12 text-muted-foreground/50 mx-auto mb-2" />
                      <p className="text-sm text-muted-foreground">Gallery Image</p>
                    </div>
                  </div>
                )}
                {/* Icon badge */}
                <div className="absolute top-4 left-4 w-12 h-12 rounded-xl bg-background/90 backdrop-blur-sm flex items-center justify-center">
                  <category.icon className="w-6 h-6 text-primary" />
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="font-heading text-xl font-bold text-foreground mb-2">
                  {category.title}
                </h3>
                <p className="font-body text-foreground/70 mb-3">
                  {category.description}
                </p>
                <p className="font-accent text-primary italic mb-4">
                  {category.tagline}
                </p>
                <p className="text-xs text-muted-foreground">
                  {category.locations}
                </p>
              </div>
            </Link>
          ))}
        </div>

        {/* Gallery Auto-Slider */}
        <ImageAutoSlider
          images={shuffledImages}
          title="Gallery & BTS"
          subtitle="You can feel the energy even in pictures."
        />

        {/* Instagram Reels Section */}
        <div className="mt-8">
          <InstagramReels />
        </div>


      </div>
    </section>
  );
};

export default PortfolioSection;
