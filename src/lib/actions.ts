'use server';

import { z } from 'zod';

const inquirySchema = z.object({
  inquiryType: z.enum(['repair', 'training']),
  name: z.string().min(2, 'Name is too short'),
  phone: z.string().regex(/^\d{10}$/, 'Please enter a valid 10-digit phone number'),
  address: z.string().optional(),
  service: z.string().optional(),
  problem: z.string().optional(),
  timeSlot: z.string().optional(),
  role: z.string().optional(),
  message: z.string().optional(),
}).refine(data => {
    if (data.inquiryType === 'repair') {
        return !!data.address && !!data.service && !!data.problem && !!data.timeSlot;
    }
    return true;
}, {
    message: 'Please fill out all required fields for a repair booking.',
    path: ['repairFields'],
}).refine(data => {
    if (data.inquiryType === 'training') {
        return !!data.role;
    }
    return true;
}, {
    message: 'Please select your role for training inquiry.',
    path: ['trainingFields'],
});

type InquiryData = z.infer<typeof inquirySchema>;

export async function submitInquiry(data: InquiryData) {
  const validatedFields = inquirySchema.safeParse(data);

  if (!validatedFields.success) {
    const errorMessage = validatedFields.error.errors.map(e => e.message).join(', ');
    return {
      success: false,
      message: errorMessage || "Invalid data provided.",
    };
  }

  console.log('New Inquiry:', validatedFields.data);
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  const successMessage = validatedFields.data.inquiryType === 'repair'
    ? "Booking submitted successfully! We will contact you shortly."
    : "Training inquiry submitted! We will be in touch with next steps.";

  return { success: true, message: successMessage };
}
