import ServicePageLayout from "@/components/ServicePageLayout";

const CorporatePage = () => {
    return (
        <ServicePageLayout
            title="Corporate Experiences"
            tagline="Brands trust him. Audiences remember him."
            description="From award ceremonies to annual days, leadership summits to product launches - Emcee Manoj transforms corporate events into engaging experiences that boost morale and leave lasting impressions. With a perfect blend of professionalism and energy, he ensures your corporate event runs seamlessly while keeping the audience captivated."
            heroImage="/optimized/Corporate/647382FHJD-large.webp"
            color="from-blue-500/20 to-cyan-500/10"
            galleryImages={[
                "/optimized/Corporate/MHRA3599-medium.webp",
                "/optimized/Corporate/MHRA4148-medium.webp",
                "/optimized/Services Section Images/Corporate Experiences/CP-3-medium.webp",
                "/optimized/Corporate/NMG03768-medium.webp",
                "/optimized/Corporate/NMG03797-medium.webp",
                "/optimized/Corporate/NMG05427-medium.webp",
            ]}
            testimonials={[
                {
                    text: "Professional hosting for every occasion. From boardrooms to baraats, Emcee Manoj brings the energy!",
                    by: "Corporate Event Manager"
                },
                {
                    text: "Manoj has great charisma and fabulous personality whilst hosting events. He's witty and a passionate anchor and handles crowd like a charm.",
                    by: "Yash Bapat"
                },
                {
                    text: "Zero dull seconds with Emcee Manoj on stage. The crowd was engaged from start to finish!",
                    by: "Event Coordinator"
                },
            ]}
        />
    );
};

export default CorporatePage;
