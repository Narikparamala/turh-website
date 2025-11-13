"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { submitInquiry } from "@/lib/actions";
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

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

export default function BookingPage() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const form = useForm<InquiryFormValues>({
    resolver: zodResolver(inquirySchema),
    defaultValues: { name: "", phone: "", inquiryType: "repair" },
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
    <main className="container mx-auto px-4 py-12 md:px-6 lg:py-16">
      <Card className="max-w-2xl mx-auto">
        <CardHeader>
          <CardTitle className="text-3xl font-bold tracking-tight text-primary">Contact Us</CardTitle>
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
    </main>
  );
}
