"use client"
import React from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import EnrollmentForm from '@/components/enrollment-form';
import { GraduationCap, ShieldCheck, CalendarDays, IndianRupee } from 'lucide-react';

export default function TrainingSection() {
    const [isEnrollmentOpen, setIsEnrollmentOpen] = React.useState(false);

    return (
        <Dialog open={isEnrollmentOpen} onOpenChange={setIsEnrollmentOpen}>
            <section id="training" className="py-16 lg:py-24 bg-background">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl font-headline text-primary">
                                Build Your Future in Electronics
                            </h2>
                            <p className="mt-4 text-lg text-muted-foreground">
                                Our unique apprenticeship program is designed to equip teenagers with practical, in-demand skills for a successful career in electronics repair. Learn directly from Raju and gain real-world experience.
                            </p>
                            <p className="mt-4 text-muted-foreground">
                                Students can join for a day or a week to see the work firsthand, based on parental agreement. It's a great opportunity to explore a skilled trade.
                            </p>
                            <div className="mt-8">
                               <DialogTrigger asChild>
                                    <Button size="lg" variant="destructive">Enroll Now</Button>
                                </DialogTrigger>
                            </div>
                        </div>
                        <div>
                            <Accordion type="single" collapsible className="w-full" defaultValue="item-1">
                                <AccordionItem value="item-1">
                                    <AccordionTrigger className="text-lg font-semibold hover:no-underline">
                                        <GraduationCap className="h-5 w-5 mr-3 text-primary flex-shrink-0" /> Curriculum Details
                                    </AccordionTrigger>
                                    <AccordionContent className="text-muted-foreground pl-10">
                                        Hands-on training covering diagnostics, component-level repairs, and troubleshooting for ACs, TVs, refrigerators, and more. Includes soft skills training for customer interaction.
                                    </AccordionContent>
                                </AccordionItem>
                                <AccordionItem value="item-2">
                                    <AccordionTrigger className="text-lg font-semibold hover:no-underline">
                                        <CalendarDays className="h-5 w-5 mr-3 text-primary flex-shrink-0" /> Duration & Schedule
                                    </AccordionTrigger>
                                    <AccordionContent className="text-muted-foreground pl-10">
                                        The program runs for 6 months with flexible batch timings available on weekdays and weekends to accommodate school schedules. Short-term experiences (a day or a week) are also available.
                                    </AccordionContent>
                                </AccordionItem>
                                <AccordionItem value="item-3">
                                    <AccordionTrigger className="text-lg font-semibold hover:no-underline">
                                        <IndianRupee className="h-5 w-5 mr-3 text-primary flex-shrink-0" /> Fees
                                    </AccordionTrigger>
                                    <AccordionContent className="text-muted-foreground pl-10">
                                        Affordable fee structure with installment options available. Please contact us for detailed fee information and scholarship opportunities.
                                    </AccordionContent>
                                </AccordionItem>
                                <AccordionItem value="item-4">
                                    <AccordionTrigger className="text-lg font-semibold hover:no-underline">
                                        <ShieldCheck className="h-5 w-5 mr-3 text-primary flex-shrink-0" /> Safety & Consent
                                    </AccordionTrigger>
                                    <AccordionContent className="text-muted-foreground pl-10">
                                        We maintain a safe and supervised learning environment. Parental consent is mandatory for all applicants under the age of 18. All safety protocols are strictly followed.
                                    </AccordionContent>
                                </AccordionItem>
                            </Accordion>
                        </div>
                    </div>
                </div>
            </section>
            <DialogContent>
                 <EnrollmentForm setOpen={setIsEnrollmentOpen} />
            </DialogContent>
        </Dialog>
    );
}
