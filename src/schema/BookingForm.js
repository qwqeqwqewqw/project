import { z } from "zod";

export const BookingFormSchema = z.object({
  booking_id: z
    .string({
      required_error: "booking_id is required",
      invalid_type_error: "booking_id must be of type string",
    })
    .regex(/^\d{14}$/, {
      message: "booking_id must be in YYYYMMDDHHmmss format",
    }),

  booking_date: z
    .string({
      required_error: "booking_date is required",
      invalid_type_error: "booking_date must be of type string",
    })
    .regex(/^\d{4}-\d{2}-\d{2} \d{2}:\d{2}$/, {
      message: "booking_date must be in YYYY-MM-DD HH:mm format",
    }),

  cust_name: z
    .string({
      required_error: "Customer name is required",
      invalid_type_error: "cust_name must be of type string",
    })
    .max(100, { message: "Customer name can have maximum 100 characters" }),

  phone1: z
    .string({
      required_error: "Phone number is required",
      invalid_type_error: "phone1 must be of type string",
    })
    .regex(/^\d{10}$/, { message: "phone1 must be a valid 10-digit number" }),

  email_id: z
    .string({
      required_error: "Email is required",
      invalid_type_error: "email_id must be of type string",
    })
    .email({ message: "Invalid email address" }),

  travel_from_date: z
    .string({
      required_error: "travel_from_date is required",
      invalid_type_error: "travel_from_date must be of type string",
    })
    .regex(/^\d{4}-\d{2}-\d{2}$/, {
      message: "travel_from_date must be in YYYY-MM-DD format",
    }),

  travel_to_date: z
    .string({
      required_error: "travel_to_date is required",
      invalid_type_error: "travel_to_date must be of type string",
    })
    .regex(/^\d{4}-\d{2}-\d{2}$/, {
      message: "travel_to_date must be in YYYY-MM-DD format",
    }),

  package_id: z
    .string({
      required_error: "package_id is required",
      invalid_type_error: "package_id must be of type string",
    })
    .max(50, { message: "package_id can have maximum 50 characters" }),

  pax: z
    .number({
      required_error: "pax is required",
      invalid_type_error: "pax must be of type number",
    })
    .min(1, { message: "At least 1 person is required" }),

  extra_beds: z
    .number({
      required_error: "extra_beds is required",
      invalid_type_error: "extra_beds must be of type number",
    })
    .min(0, { message: "extra_beds cannot be negative" }),

  child_count: z
    .union([
      z.string({ invalid_type_error: "child_count must be of type string" }),
      z.number({ invalid_type_error: "child_count must be of type number" }),
    ])
    .optional(),
});
