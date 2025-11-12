"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { submitBooking } from "@/lib/actions";
import { useState } from "react";

const bookingSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters.' }),
  phone: z.string().regex(/^\d{10}$/, { message: 'Please enter a valid 10-digit phone number.' }),
  address: z.string().min(10, { message: 'Please enter a complete address.' }),
  service: z.string({ required_error: "Please select a service." }),
  problem: z.string().min(10, { message: 'Please describe the problem in at least 10 characters.' }),
  timeSlot: z.string({ required_error: "Please select a preferred time slot." }),
});

type BookingFormValues = z.infer<typeof bookingSchema>;

interface BookingFormProps {
    setOpen: (open: boolean) => void;
}

export default function BookingForm({ setOpen }: BookingFormProps) {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const form = useForm<BookingFormValues>({
    resolver: zodResolver(bookingSchema),
    defaultValues: { name: "", phone: "", address: "", problem: "" },
  });

  async function onSubmit(data: BookingFormValues) {
    setIsSubmitting(true);
    const result = await submitBooking(data);
    if (result.success) {
      toast({
        title: "Success!",
        description: result.message,
      });
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
        <DialogTitle>Book a Repair Service</DialogTitle>
        <DialogDescription>
          Fill out the form below and we'll get back to you to confirm your appointment.
        </DialogDescription>
      </DialogHeader>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 pt-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
             <FormField control={form.control} name="name" render={({ field }) => (
                <FormItem><FormLabel>Full Name</FormLabel><FormControl><Input placeholder="John Doe" {...field} /></FormControl><FormMessage /></FormItem>
             )} />
             <FormField control={form.control} name="phone" render={({ field }) => (
                <FormItem><FormLabel>Phone Number</FormLabel><FormControl><Input placeholder="9951523648" {...field} /></FormControl><FormMessage /></FormItem>
             )} />
          </div>
          <FormField control={form.control} name="address" render={({ field }) => (
             <FormItem><FormLabel>Address</FormLabel><FormControl><Textarea placeholder="Your full address" {...field} /></FormControl><FormMessage /></FormItem>
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
                    <Select onValuechange={field.onChange} defaultValue={field.value}>
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
             <FormItem><FormLabel>Problem Description</FormLabel><FormControl><Textarea placeholder="Briefly describe the issue with your device." {...field} /></FormControl><FormMessage /></FormItem>
          )} />
          <DialogFooter>
            <Button type="submit" disabled={isSubmitting} variant="destructive">
              {isSubmitting ? 'Submitting...' : 'Submit Booking'}
            </Button>
          </DialogFooter>
        </form>
      </Form>
    </>
  );
}
