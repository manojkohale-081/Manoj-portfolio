import ServicePageLayout from "@/components/ServicePageLayout";

const PublicSpeakingPage = () => {
    return (
        <ServicePageLayout
            title="Public Speaking & Coaching"
            tagline="Training future anchors through @talktermanoj & @speakoskills"
            description="Emcee Manoj is not just a performer - he's a mentor. Through his platforms @talktermanoj and @speakoskills, he trains aspiring anchors and public speakers to find their voice, own the stage, and deliver with confidence. From workshops to personalized coaching, he shares his expertise to help others become effective communicators."
            heroImage="/optimized/Manoj Images/Manoj 1-large.webp"
            color="from-orange-500/20 to-amber-500/10"
            galleryImages={[]}
            testimonials={[
                {
                    text: "Manoj's coaching transformed my stage presence. His techniques are practical and easy to implement!",
                    by: "Workshop Participant"
                },
                {
                    text: "The @speakoskills program helped me overcome my fear of public speaking. Highly recommended!",
                    by: "Communication Course Attendee"
                },
                {
                    text: "His energy and passion for teaching is infectious. Every session is a masterclass in itself.",
                    by: "Aspiring Anchor"
                },
            ]}
        />
    );
};

export default PublicSpeakingPage;
