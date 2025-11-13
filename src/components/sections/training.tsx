"use client"
import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle, Users, User } from 'lucide-react';
import Link from 'next/link';

const programOptions = [
    {
        title: "1-Day Experience",
        description: "Perfect for exploring the field. Your teenager accompanies Raju for a full working day to test their interest.",
        idealFor: "Career exploration, school projects."
    },
    {
        title: "1-Week Intensive",
        description: "Comprehensive hands-on training covering multiple appliances and repair techniques.",
        idealFor: "Building foundational skills, summer programs."
    },
    {
        title: "Custom Duration",
        description: "A flexible schedule designed around your availability (2 days, 2 weeks, or longer). Parents decide what's best.",
        idealFor: "Specific learning goals, extended mentorship."
    }
];

const whoCanJoin = [
    {
        icon: <Users className="h-8 w-8 text-primary" />,
        title: "For Parents",
        description: "Enroll your teenager and discuss the training schedule directly with Raju. We ensure a safe and educational environment, supervised or independent."
    },
    {
        icon: <User className="h-8 w-8 text-primary" />,
        title: "For Teenagers",
        description: "If you're passionate about electronics, reach out directly! We welcome motivated individuals ready to develop valuable, real-world skills."
    }
]

export default function TrainingSection() {
    return (
        <section id="training" className="py-16 lg:py-24 bg-primary/5">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold tracking-tight sm:text-4xl font-headline text-primary">
                        Mentorship & Training Program
                    </h2>
                    <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
                        Empower the next generation! Raju is now accepting teenagers for hands-on electronics repair training. Parents can enroll their children, or teenagers can reach out directly.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                    {whoCanJoin.map(item => (
                         <Card key={item.title}>
                            <CardHeader className="flex flex-row items-center gap-4">
                                {item.icon}
                                <CardTitle>{item.title}</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-muted-foreground">{item.description}</p>
                            </CardContent>
                        </Card>
                    ))}
                </div>

                <div className="mb-12">
                    <h3 className="text-2xl font-bold text-center mb-8 text-primary/90 font-headline">Program Options</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {programOptions.map(option => (
                            <Card key={option.title} className="flex flex-col">
                                <CardHeader>
                                    <CardTitle>{option.title}</CardTitle>
                                </CardHeader>
                                <CardContent className="flex-grow">
                                    <p className="text-muted-foreground mb-4">{option.description}</p>
                                    <p className="text-sm font-semibold"><strong>Great for:</strong> {option.idealFor}</p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                     <p className="text-center mt-6 text-sm text-muted-foreground">
                        Note: Parents decide the duration and schedule. Contact Raju to discuss what works best.
                    </p>
                </div>
                
                <div className="text-center">
                     <h3 className="text-2xl font-bold text-center mb-8 text-primary/90 font-headline">What You'll Gain</h3>
                     <div className="max-w-2xl mx-auto grid grid-cols-2 gap-4 text-left mb-8">
                        <div className="flex items-start gap-3">
                            <CheckCircle className="h-5 w-5 mt-1 text-green-600 flex-shrink-0"/>
                            <span className="text-muted-foreground">Hands-on training with real repairs</span>
                        </div>
                         <div className="flex items-start gap-3">
                            <CheckCircle className="h-5 w-5 mt-1 text-green-600 flex-shrink-0"/>
                            <span className="text-muted-foreground">Learn from 20+ years of experience</span>
                        </div>
                         <div className="flex items-start gap-3">
                            <CheckCircle className="h-5 w-5 mt-1 text-green-600 flex-shrink-0"/>
                            <span className="text-muted-foreground">Flexible program durations</span>
                        </div>
                         <div className="flex items-start gap-3">
                            <CheckCircle className="h-5 w-5 mt-1 text-green-600 flex-shrink-0"/>
                            <span className="text-muted-foreground">Certificate of completion</span>
                        </div>
                     </div>

                    <Button asChild size="lg" variant="destructive">
                      <Link href="/#contact">Enroll or Inquire Now</Link>
                    </Button>
                </div>

            </div>
        </section>
    );
}
