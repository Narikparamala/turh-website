"use client"
import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { CheckCircle, Users, User } from 'lucide-react';
import Link from 'next/link';

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { submitInquiry } from "@/lib/actions";
import { useState } from "react";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

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

const inquirySchema = z.object({
  inquiryType: z.enum(['repair', 'training'], { required_error: "You must select an inquiry type." }),
  name: z.string().min(2, { message: 'Name must be at least 2 characters.' }),
  phone: z.string().regex(/^\d{10}$/, { message: 'Please enter a valid 10-digit phone number.' }),
  
  // Repair fields
  address: z.string().optional(),
  service: z.string().optional(),
  problem: z.string().optional(),
  timeSlot: z.string().optional(),

  // Training fields
  role: z.string().optional(),
  message: z.string().min(10, { message: 'Please provide a brief message (at least 10 characters).' }).optional(),
}).refine(data => {
    if (data.inquiryType === 'repair') {
        return !!data.address && data.address.length >= 10 && !!data.service && !!data.problem && data.problem.length >= 10 && !!data.timeSlot;
    }
    return true;
}, {
    message: 'Please fill out all repair-specific fields with valid information.',
    path: ['repairFields'],
}).refine(data => {
    if (data.inquiryType === 'training') {
        return !!data.role && !!data.message;
    }
    return true;
}, {
    message: 'Please select your role and provide a message for training inquiries.',
    path: ['trainingFields'],
});

type InquiryFormValues = z.infer<typeof inquirySchema>;

export default function TrainingSection() {
    const { toast } = useToast();
    const [isSubmitting, setIsSubmitting] = useState(false);
  
    const form = useForm<InquiryFormValues>({
        resolver: zodResolver(inquirySchema),
        defaultValues: { name: "", phone: "", inquiryType: "training" },
    });

    const inquiryType = form.watch("inquiryType");

    async function onSubmit(data: InquiryFormValues) {
        setIsSubmitting(true);
        const result = await submitInquiry(data);
        if (result.success) {
        toast({
            title: "Success!",
            description: result.message,
        });
        form.reset({ name: "", phone: "", inquiryType: data.inquiryType });
        } else {
        toast({
            variant: "destructive",
            title: "Error",
            description: result.message || "Something went wrong. Please check your inputs and try again.",
        });
        }
        setIsSubmitting(false);
    }

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
                </div>

                 <Card className="max-w-4xl mx-auto mt-12">
                    <CardHeader>
                        <CardTitle className="text-3xl font-bold tracking-tight text-primary">Enroll or Inquire Now</CardTitle>
                        <CardDescription>
                            Whether you need a repair or are interested in our training program, fill out the form below.
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                        <FormField
                            control={form.control}
                            name="inquiryType"
                            render={({ field }) => (
                            <FormItem className="space-y-3">
                                <FormLabel className="text-base font-semibold">How can we help you?</FormLabel>
                                <FormControl>
                                <RadioGroup
                                    onValueChange={field.onChange}
                                    defaultValue={field.value}
                                    className="flex flex-col sm:flex-row gap-4"
                                >
                                    <FormItem className="flex items-center space-x-3 space-y-0">
                                    <FormControl><RadioGroupItem value="repair" /></FormControl>
                                    <FormLabel className="font-normal">Book a Repair</FormLabel>
                                    </FormItem>
                                    <FormItem className="flex items-center space-x-3 space-y-0">
                                    <FormControl><RadioGroupItem value="training" /></FormControl>
                                    <FormLabel className="font-normal">Inquire about Training / Part-Time Work</FormLabel>
                                    </FormItem>
                                </RadioGroup>
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                            )}
                        />

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <FormField control={form.control} name="name" render={({ field }) => (
                                <FormItem><FormLabel>Full Name</FormLabel><FormControl><Input placeholder="John Doe" {...field} /></FormControl><FormMessage /></FormItem>
                            )} />
                            <FormField control={form.control} name="phone" render={({ field }) => (
                                <FormItem><FormLabel>Phone Number</FormLabel><FormControl><Input placeholder="9951523648" {...field} /></FormControl><FormMessage /></FormItem>
                            )} />
                        </div>

                        {inquiryType === 'repair' && (
                            <div className="space-y-6 pt-4 border-t">
                            <FormField control={form.control} name="address" render={({ field }) => (
                                <FormItem><FormLabel>Full Address</FormLabel><FormControl><Textarea placeholder="Your full address for the service visit" {...field} /></FormControl><FormMessage /></FormItem>
                            )} />
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <FormField control={form.control} name="service" render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Service Required</FormLabel>
                                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                                            <FormControl><SelectTrigger><SelectValue placeholder="Select a service" /></SelectTrigger></FormControl>
                                            <SelectContent>
                                                <SelectItem value="AC">AC Repair</SelectItem>
                                                <SelectItem value="TV">TV Repair</SelectItem>
                                                <SelectItem value="Fridge">Fridge Repair</SelectItem>
                                                <SelectItem value="Washing Machine">Washing Machine Repair</SelectItem>
                                                <SelectItem value="Other">Other</SelectItem>
                                            </SelectContent>
                                        </Select>
                                        <FormMessage />
                                    </FormItem>
                                )} />
                                <FormField control={form.control} name="timeSlot" render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Preferred Time Slot</FormLabel>
                                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                                            <FormControl><SelectTrigger><SelectValue placeholder="Select a time" /></SelectTrigger></FormControl>
                                            <SelectContent>
                                                <SelectItem value="morning">Morning (9am - 12pm)</SelectItem>
                                                <SelectItem value="afternoon">Afternoon (1pm - 4pm)</SelectItem>
                                                <SelectItem value="evening">Evening (5pm - 8pm)</SelectItem>
                                            </SelectContent>
                                        </Select>
                                        <FormMessage />
                                    </FormItem>
                                )} />
                            </div>
                            <FormField control={form.control} name="problem" render={({ field }) => (
                                <FormItem><FormLabel>Problem Description</FormLabel><FormControl><Textarea placeholder="Briefly describe the issue with your appliance." {...field} /></FormControl><FormMessage /></FormItem>
                            )} />
                            </div>
                        )}

                        {inquiryType === 'training' && (
                            <div className="space-y-6 pt-4 border-t">
                            <FormField
                                control={form.control}
                                name="role"
                                render={({ field }) => (
                                <FormItem className="space-y-3">
                                    <FormLabel>I am a...</FormLabel>
                                    <FormControl>
                                    <RadioGroup onValueChange={field.onChange} defaultValue={field.value} className="flex gap-4">
                                        <FormItem className="flex items-center space-x-3 space-y-0">
                                        <FormControl><RadioGroupItem value="parent" /></FormControl>
                                        <FormLabel className="font-normal">Parent/Guardian</FormLabel>
                                        </FormItem>
                                        <FormItem className="flex items-center space-x-3 space-y-0">
                                        <FormControl><RadioGroupItem value="teenager" /></FormControl>
                                        <FormLabel className="font-normal">Teenager/Student</FormLabel>
                                        </FormItem>
                                    </RadioGroup>
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                                )}
                            />
                            <FormField control={form.control} name="message" render={({ field }) => (
                                <FormItem><FormLabel>Message</FormLabel><FormControl><Textarea placeholder="Tell us a bit about your interest in the program, availability, or any questions you have." {...field} /></FormControl><FormMessage /></FormItem>
                            )} />
                            </div>
                        )}
                        
                        <Button type="submit" disabled={isSubmitting} variant="destructive" size="lg" className="w-full">
                            {isSubmitting ? 'Submitting...' : 'Submit Inquiry'}
                        </Button>
                        </form>
                    </Form>
                    </CardContent>
                </Card>

            </div>
        </section>
    );
}
