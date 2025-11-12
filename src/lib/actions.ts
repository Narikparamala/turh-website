'use server';

import { z } from 'zod';
import { aiDiagnosticTool } from '@/ai/flows/ai-diagnostic-tool';

const diagnosticSchema = z.object({
  problemDescription: z.string().min(10, { message: "Please describe the problem in at least 10 characters." }),
});

export async function getDiagnostic(prevState: any, formData: FormData) {
  const validatedFields = diagnosticSchema.safeParse({
    problemDescription: formData.get('problemDescription'),
  });

  if (!validatedFields.success) {
    return {
      error: validatedFields.error.flatten().fieldErrors.problemDescription?.[0],
      data: null,
    };
  }

  try {
    await new Promise(resolve => setTimeout(resolve, 1000));
    const result = await aiDiagnosticTool({
      problemDescription: validatedFields.data.problemDescription,
    });
    return { data: result.potentialSolutions, error: null };
  } catch (error) {
    console.error(error);
    return { data: null, error: 'An unexpected error occurred. Please try again.' };
  }
}

const bookingSchema = z.object({
  name: z.string().min(2, 'Name is too short'),
  phone: z.string().regex(/^\d{10}$/, 'Please enter a valid 10-digit phone number'),
  address: z.string().min(10, 'Please enter a complete address'),
  service: z.string().min(1, 'Please select a service'),
  problem: z.string().min(10, 'Please describe the problem'),
  timeSlot: z.string().min(1, 'Please select a time slot'),
});

type BookingData = z.infer<typeof bookingSchema>;

export async function submitBooking(data: BookingData) {
  const validatedFields = bookingSchema.safeParse(data);

  if (!validatedFields.success) {
    return {
      success: false,
      message: "Invalid data provided.",
    };
  }

  console.log('New Booking:', validatedFields.data);
  await new Promise(resolve => setTimeout(resolve, 1000));

  return { success: true, message: "Booking submitted successfully! We will contact you shortly." };
}

const enrollmentSchema = z.object({
    studentName: z.string().min(2, 'Student name is too short'),
    parentName: z.string().min(2, 'Parent/Guardian name is too short'),
    phone: z.string().regex(/^\d{10}$/, 'Please enter a valid 10-digit phone number'),
    email: z.string().email('Please enter a valid email address'),
    consent: z.boolean().refine(val => val === true, { message: "Parental consent is required." }),
});

type EnrollmentData = z.infer<typeof enrollmentSchema>;

export async function submitEnrollment(data: EnrollmentData) {
  const validatedFields = enrollmentSchema.safeParse(data);

  if (!validatedFields.success) {
    return {
      success: false,
      message: "Invalid data provided.",
    };
  }

  console.log('New Enrollment:', validatedFields.data);
  await new Promise(resolve => setTimeout(resolve, 1000));

  return { success: true, message: "Enrollment successful! We will be in touch with next steps." };
}
