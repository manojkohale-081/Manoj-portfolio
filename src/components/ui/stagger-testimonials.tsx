"use client"

import React, { useState, useEffect } from 'react';
import { ExternalLink } from 'lucide-react';
import { cn } from '@/lib/utils';

const SQRT_5000 = Math.sqrt(5000);

const testimonials = [
    {
        tempId: 0,
        testimonial: "Manoj recently hosted our Destination Wedding & he's just awesome! Literally everybody loved his Presence at our Functions!! The Kind of command he has on his art is truely commendable!! Matlb maza hi aagya!!",
        by: "Aditya Agrawal, Destination Wedding Client",
        imgSrc: "https://ui-avatars.com/api/?name=Aditya+Agrawal&background=D4AF37&color=000&size=150",
        reviewUrl: "https://maps.app.goo.gl/VBNqhy1iRcFcVn7y7"
    },
    {
        tempId: 1,
        testimonial: "Your anchoring was truly heartfelt and captivating. The way you connected with the audience, spoke with warmth, and carried the entire event with grace was beautiful to watch. You didn't just host the show, you touched hearts.",
        by: "Gaurav Mishra, Event Client",
        imgSrc: "https://ui-avatars.com/api/?name=Gaurav+Mishra&background=FF6B6B&color=fff&size=150",
        reviewUrl: "https://maps.app.goo.gl/oF2e8mNbywMsPHsu6"
    },
    {
        tempId: 2,
        testimonial: "Manoj has great charisma and fabulous personality whilst hosting events. He's witty and a passionate anchor and handles crowd like a charm. I would highly recommend hiring him to make a boring event hell lot interesting!",
        by: "Shishir Kamde, Corporate Client",
        imgSrc: "https://ui-avatars.com/api/?name=Shishir+Kamde&background=4ECDC4&color=000&size=150",
        reviewUrl: "https://maps.app.goo.gl/QZQkihRMEZvqbMXU7"
    },
    {
        tempId: 3,
        testimonial: "Emcee Manoj was humorous & conducted the sangeet & Haldi event with rigor and engaged with the audience to make it memorable! Thanks",
        by: "Soumitra Poddar, Wedding Client",
        imgSrc: "https://ui-avatars.com/api/?name=Soumitra+Poddar&background=95E1D3&color=000&size=150",
        reviewUrl: "https://maps.app.goo.gl/Xgov5weLxo9gqNFd7"
    },
    {
        tempId: 4,
        testimonial: "Saw anchor manoj host an event recently, he is absolutely amazing! Full of energy, great crowd connect, and such a natural on stage. Made the whole event flow so smoothly. Highly recommend!",
        by: "Muskan Mkwana, Event Attendee",
        imgSrc: "https://ui-avatars.com/api/?name=Muskan+Mkwana&background=C06C84&color=fff&size=150",
        reviewUrl: "https://maps.app.goo.gl/UwSsAvq6q3zv8uXKA"
    },
    {
        tempId: 5,
        testimonial: "The way he managed everything & Everyone is beyond Perfect!! Must recommend him!!",
        by: "Kola Diwakar Rao, Event Client",
        imgSrc: "https://ui-avatars.com/api/?name=Kola+Rao&background=D4AF37&color=000&size=150",
        reviewUrl: "https://maps.app.goo.gl/fB4zq3o6kB6LJtEq7"
    },
    {
        tempId: 6,
        testimonial: "Professional hosting for every occasion. From boardrooms to baraats, Emcee Manoj brings the energy!",
        by: "Corporate Event Organizer",
        imgSrc: "https://ui-avatars.com/api/?name=Event+Pro&background=6C5CE7&color=fff&size=150",
        reviewUrl: ""
    },
    {
        tempId: 7,
        testimonial: "Zero dull seconds with Emcee Manoj on stage. The crowd was engaged from start to finish!",
        by: "Wedding Planner, Pune",
        imgSrc: "https://ui-avatars.com/api/?name=Wedding+Pro&background=FD79A8&color=fff&size=150",
        reviewUrl: ""
    }
];

interface TestimonialCardProps {
    position: number;
    testimonial: typeof testimonials[0];
    handleMove: (steps: number) => void;
    cardSize: number;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
    position,
    testimonial,
    handleMove,
    cardSize
}) => {
    const isCenter = position === 0;

    return (
        <div
            onClick={() => handleMove(position)}
            className={cn(
                "absolute left-1/2 top-1/2 cursor-pointer border-2 p-4 sm:p-8 transition-all duration-500 ease-in-out",
                isCenter
                    ? "z-10 bg-primary text-primary-foreground border-primary"
                    : "z-0 bg-card text-card-foreground border-border hover:border-primary/50"
            )}
            style={{
                width: cardSize,
                height: cardSize,
                clipPath: `polygon(50px 0%, calc(100% - 50px) 0%, 100% 50px, 100% 100%, calc(100% - 50px) 100%, 50px 100%, 0 100%, 0 0)`,
                transform: `
          translate(-50%, -50%) 
          translateX(${(cardSize / 1.5) * position}px)
          translateY(${isCenter ? -65 : position % 2 ? 15 : -15}px)
          rotate(${isCenter ? 0 : position % 2 ? 2.5 : -2.5}deg)
        `,
                boxShadow: isCenter ? "0px 8px 0px 4px hsl(var(--border))" : "0px 0px 0px 0px transparent"
            }}
        >
            <span
                className="absolute block origin-top-right rotate-45 bg-border"
                style={{
                    right: -2,
                    top: 48,
                    width: SQRT_5000,
                    height: 2
                }}
            />
            <img
                src={testimonial.imgSrc}
                alt={`${testimonial.by.split(',')[0]}`}
                className="mb-4 h-14 w-14 rounded-full bg-muted object-cover"
                style={{
                    boxShadow: "3px 3px 0px hsl(var(--background))"
                }}
            />
            <h3 className={cn(
                "text-sm sm:text-lg font-medium mb-4 line-clamp-3 sm:line-clamp-4 pb-16 sm:pb-0",
                isCenter ? "text-primary-foreground" : "text-foreground"
            )}>
                "{testimonial.testimonial}"
            </h3>
            <div className="absolute bottom-4 sm:bottom-8 left-4 sm:left-8 right-4 sm:right-8">
                <p className={cn(
                    "text-sm italic mb-2",
                    isCenter ? "text-primary-foreground/80" : "text-muted-foreground"
                )}>
                    - {testimonial.by}
                </p>
                {testimonial.reviewUrl && (
                    <a
                        href={testimonial.reviewUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className={cn(
                            "inline-flex items-center gap-1 text-xs font-medium transition-colors",
                            isCenter
                                ? "text-primary-foreground/90 hover:text-primary-foreground"
                                : "text-primary hover:text-primary/80"
                        )}
                    >
                        Read full here <ExternalLink className="w-3 h-3" />
                    </a>
                )}
            </div>
        </div>
    );
};

export const StaggerTestimonials: React.FC = () => {
    const [cardSize, setCardSize] = useState(365);
    const [testimonialsList, setTestimonialsList] = useState(testimonials);

    const handleMove = (steps: number) => {
        const newList = [...testimonialsList];
        if (steps > 0) {
            for (let i = steps; i > 0; i--) {
                const item = newList.shift();
                if (!item) return;
                newList.push({ ...item, tempId: Math.random() });
            }
        } else {
            for (let i = steps; i < 0; i++) {
                const item = newList.pop();
                if (!item) return;
                newList.unshift({ ...item, tempId: Math.random() });
            }
        }
        setTestimonialsList(newList);
    };

    // Auto-slide effect
    useEffect(() => {
        const interval = setInterval(() => {
            handleMove(1);
        }, 3000); // Slide every 3 seconds

        return () => clearInterval(interval);
    }, [testimonialsList]);

    useEffect(() => {
        const updateSize = () => {
            const { matches } = window.matchMedia("(min-width: 640px)");
            setCardSize(matches ? 365 : 290);
        };

        updateSize();
        window.addEventListener("resize", updateSize);
        return () => window.removeEventListener("resize", updateSize);
    }, []);

    return (
        <div
            className="relative w-full overflow-hidden bg-transparent"
            style={{ height: 600 }}
        >
            {testimonialsList.map((testimonial, index) => {
                const position = testimonialsList.length % 2
                    ? index - (testimonialsList.length + 1) / 2
                    : index - testimonialsList.length / 2;
                return (
                    <TestimonialCard
                        key={testimonial.tempId}
                        testimonial={testimonial}
                        handleMove={handleMove}
                        position={position}
                        cardSize={cardSize}
                    />
                );
            })}
        </div>
    );
};
