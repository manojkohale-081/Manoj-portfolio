import ServicePageLayout from "@/components/ServicePageLayout";

const WeddingPage = () => {
    return (
        <ServicePageLayout
            title="Wedding & Sangeet Magic"
            tagline="Every memory becomes a reel."
            description="Your love story, amplified. From mehendi to reception, sangeet to pheras - Emcee Manoj creates magical moments that families cherish forever. With multilingual hosting in Hindi and Marathi, he ensures every guest feels included, every emotion is celebrated, and every moment becomes a beautiful memory."
            heroImage="/optimized/Shadi events/Weeding and Sangeet Night-large.webp"
            color="from-pink-500/20 to-rose-500/10"
            galleryImages={[
                "/optimized/Shadi events/Weeding and Sangeet Night-medium.webp",
                "/optimized/Shadi events/SAMFKJENG488354-medium.webp",
                "/optimized/Shadi events/SAMFKJENG85349-medium.webp",
            ]}
            testimonials={[
                {
                    text: "Manoj recently hosted our Destination Wedding & he's just awesome! Literally everybody loved his Presence at our Functions!! The Kind of command he has on his art is truely commendable!! Matlb maza hi aagya!!",
                    by: "Akash Rathore"
                },
                {
                    text: "Your anchoring was truly heartfelt and captivating. The way you connected with the audience, spoke with warmth, and carried the entire event with grace was beautiful to watch.",
                    by: "Avanti Jog"
                },
                {
                    text: "Emcee Manoj was humorous & conducted the sangeet & Haldi event with rigor and engaged with the audience to make it memorable! Thanks",
                    by: "Anurag Avhad"
                },
                {
                    text: "The way he managed everything & Everyone is beyond Perfect!! Must recommend him!!",
                    by: "Durga Sawalakhe"
                },
            ]}
        />
    );
};

export default WeddingPage;
