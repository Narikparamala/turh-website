"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";
import { submitEnrollment } from "@/lib/actions";
import { useState } from "react";

const enrollmentSchema = z.object({
    studentName: z.string().min(2, { message: 'Student name must be at least 2 characters.' }),
    parentName: z.string().min(2, { message: 'Parent/Guardian name is required.' }),
    phone: z.string().regex(/^\d{10}$/, { message: 'Please enter a valid 10-digit phone number.' }),
    email: z.string().email({ message: 'Please enter a valid email address.' }),
    consent: z.boolean().refine(val => val === true, { message: "Parental consent is required to enroll." }),
});

type EnrollmentFormValues = z.infer<typeof enrollmentSchema>;

interface EnrollmentFormProps {
    setOpen: (open: boolean) => void;
}

export default function EnrollmentForm({ setOpen }: EnrollmentFormProps) {
    const { toast } = useToast();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const form = useForm<EnrollmentFormValues>({
        resolver: zodResolver(enrollmentSchema),
        defaultValues: { studentName: "", parentName: "", phone: "", email: "", consent: false },
    });

    async function onSubmit(data: EnrollmentFormValues) {
        setIsSubmitting(true);
        const result = await submitEnrollment(data);
        if (result.success) {
            toast({ title: "Success!", description: result.message });
            form.reset();
            setOpen(false);
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
        <>
            <DialogHeader>
                <DialogTitle>Training Program Enrollment</DialogTitle>
                <DialogDescription>
                    Register for our apprenticeship program. Parental consent is required for applicants under 18.
                </DialogDescription>
            </DialogHeader>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 pt-4">
                    <FormField control={form.control} name="studentName" render={({ field }) => (
                        <FormItem><FormLabel>Student's Full Name</FormLabel><FormControl><Input placeholder="Rajesh Kumar" {...field} /></FormControl><FormMessage /></FormItem>
                    )} />
                    <FormField control={form.control} name="parentName" render={({ field }) => (
                        <FormItem><FormLabel>Parent/Guardian's Name</FormLabel><FormControl><Input placeholder="Sunita Kumar" {...field} /></FormControl><FormMessage /></FormItem>
                    )} />
                    <FormField control={form.control} name="phone" render={({ field }) => (
                        <FormItem><FormLabel>Contact Phone</FormLabel><FormControl><Input placeholder="9876543210" type="tel" {...field} /></FormControl><FormMessage /></FormItem>
                    )} />
                    <FormField control={form.control} name="email" render={({ field }) => (
                        <FormItem><FormLabel>Contact Email</FormLabel><FormControl><Input placeholder="you@example.com" type="email" {...field} /></FormControl><FormMessage /></FormItem>
                    )} />
                    <FormField control={form.control} name="consent" render={({ field }) => (
                        <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4">
                            <FormControl><Checkbox checked={field.value} onCheckedChange={field.onChange} /></FormControl>
                            <div className="space-y-1 leading-none">
                                <FormLabel>Parental Consent</FormLabel>
                                <FormDescription>
                                    I confirm I am the parent or legal guardian and I consent to this enrollment.
                                </FormDescription>
                                <FormMessage/>
                            </div>
                        </FormItem>
                    )} />
                    <DialogFooter>
                        <Button type="submit" disabled={isSubmitting} variant="destructive">
                            {isSubmitting ? 'Enrolling...' : 'Enroll Now'}
                        </Button>
                    </DialogFooter>
                </form>
            </Form>
        </>
    );
}
