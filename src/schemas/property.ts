import { z } from "zod";

export const propertySchema = z
  .object({
    address: z.string().min(5),
    price: z.number().nonnegative(),
    bedrooms: z.number().int().min(0),
    bathrooms: z.number().min(0),
    square_feet: z.number().int().positive(),
  })
  .strict();

export type PropertyInput = z.infer<typeof propertySchema>;