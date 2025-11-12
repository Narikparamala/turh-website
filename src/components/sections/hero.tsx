"use client"

import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import BookingForm from '@/components/booking-form';
import React from 'react';
import Link from 'next/link';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export default function HeroSection() {
    const [isBookingOpen, setIsBookingOpen] = React.useState(false);
    const heroImage = PlaceHolderImages.find(p => p.id === 'hero');

    return (
        <Dialog open={isBookingOpen} onOpenChange={setIsBookingOpen}>
            <section id="home" className="relative w-full overflow-hidden pt-24 md:pt-32 lg:pt-40">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="grid gap-8 md:grid-cols-2 md:gap-16 items-center">
                        <div className="flex flex-col gap-4 text-center md:text-left">
                            <h1 className="font-headline text-4xl font-bold tracking-tight text-primary sm:text-5xl lg:text-6xl">
                                Expert Electronic Repairs in Tirupati
                            </h1>
                            <p className="text-lg text-muted-foreground md:text-xl max-w-lg mx-auto md:mx-0">
                                Fast, reliable service for your AC, TV, Fridge, and more. We fix it right the first time, every time.
                            </p>
                            <div className="mt-6 flex flex-col gap-4 sm:flex-row justify-center md:justify-start">
                                <DialogTrigger asChild>
                                    <Button size="lg" variant="destructive">Book a Repair</Button>
                                </DialogTrigger>
                                <Button asChild size="lg" variant="outline">
                                  <Link href="#training">Join Our Training</Link>
                                </Button>
                            </div>
                        </div>
                        <div className="relative h-80 md:h-auto md:aspect-square">
                           {heroImage && <Image
                                src={heroImage.imageUrl}
                                alt={heroImage.description}
                                fill
                                className="object-cover rounded-2xl shadow-lg"
                                data-ai-hint={heroImage.imageHint}
                                priority
                           />}
                           <div className="absolute inset-0 bg-gradient-to-t from-background via-background/10 to-transparent md:bg-gradient-to-r md:from-background"></div>
                        </div>
                    </div>
                </div>
                 <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent"></div>
            </section>
            <DialogContent>
                <BookingForm setOpen={setIsBookingOpen} />
            </DialogContent>
        </Dialog>
    );
}
