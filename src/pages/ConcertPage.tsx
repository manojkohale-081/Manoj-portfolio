import ServicePageLayout from "@/components/ServicePageLayout";

const ConcertPage = () => {
    return (
        <ServicePageLayout
            title="Concerts & Entertainment Nights"
            tagline="He isn't just hosting, he's running the vibe."
            description="40,000 fans. Big lights. Loud cheers. Pure adrenaline. Emcee Manoj has hosted some of the biggest concert stages, keeping the energy sky-high between performances and creating unforgettable crowd moments. He has shared the stage with renowned artists including Pritam da, Salman Ali, Maharashtra Chi Hasya Jatra, Adarsh Shinde, Mohd. Irfan, Mohd. Danish, Sonu Sood, and various bands. From Bollywood nights to rock concerts, he knows how to command any stage."
            heroImage="/optimized/Concert/MHRA6200-large.webp"
            color="from-purple-500/20 to-violet-500/10"
            galleryImages={[
                "/optimized/Services Section Images/Corporate Experiences/6D5A0094-medium.webp",
                "/optimized/Concert/DSC_5294-medium.webp",
                "/optimized/Concert/IMG_8085-medium.webp",
                "/optimized/Concert/MHRA5715-medium.webp",
                "/optimized/Concert/MHRA6192-medium.webp",
                "/optimized/Concert/MHRA6200-medium.webp",
            ]}
            testimonials={[
                {
                    text: "Professional hosting for every occasion. From boardrooms to baraats, Emcee Manoj brings the energy!",
                    by: "Concert Organizer"
                },
                {
                    text: "Manoj has great charisma and fabulous personality whilst hosting events. He's witty and a passionate anchor and handles crowd like a charm. I would highly recommend hiring him!",
                    by: "Yash Bapat"
                },
                {
                    text: "Zero dull seconds with Emcee Manoj on stage. The crowd was engaged from start to finish!",
                    by: "Music Festival Producer"
                },
            ]}
        />
    );
};

export default ConcertPage;
