import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useLocation, useNavigate } from "react-router-dom";

const navLinks = [
  { href: "about", label: "About" },
  { href: "services", label: "Services" },
  { href: "portfolio", label: "Portfolio" },
  { href: "videos", label: "Videos" },
  { href: "testimonials", label: "Testimonials" },
  { href: "contact", label: "Contact" },
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Handle hash navigation when coming from another page
  useEffect(() => {
    if (location.hash) {
      setTimeout(() => {
        const element = document.querySelector(location.hash);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    }
  }, [location]);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault();

    // If we're on the home page, just scroll to the section
    if (location.pathname === "/") {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      // If we're on another page, navigate to home with hash
      navigate(`/#${sectionId}`);
    }

    setIsMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled || isMobileMenuOpen
        ? "bg-background/95 backdrop-blur-md shadow-lg"
        : "bg-transparent"
        }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img
              src="/optimized/logo-medium.webp"
              alt="Emcee Manoj"
              className="h-12 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={`/#${link.href}`}
                onClick={(e) => handleNavClick(e, link.href)}
                className="font-heading font-medium text-foreground/80 hover:text-primary transition-colors cursor-pointer"
              >
                {link.label}
              </a>
            ))}
            <Button variant="default" size="lg" asChild>
              <a
                href="/#contact"
                onClick={(e) => handleNavClick(e, "contact")}
              >
                Book Now
              </a>
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6 text-foreground" />
            ) : (
              <Menu className="w-6 h-6 text-foreground" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <nav className="md:hidden py-4 border-t border-border animate-fade-in-up bg-background">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={`/#${link.href}`}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="font-heading font-medium text-foreground/80 hover:text-primary transition-colors py-2 cursor-pointer"
                >
                  {link.label}
                </a>
              ))}
              <Button variant="default" className="mt-2" asChild>
                <a
                  href="/#contact"
                  onClick={(e) => handleNavClick(e, "contact")}
                >
                  Book Now
                </a>
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;

