// import { z } from 'zod'

// export const SignupFormSchema = z.object({
//   name: z
//     .string()
//     .min(2, { message: 'Лоигин должно содержать не менее 2 символов.' })
//     .trim(),
//   password: z
//     .string()
//     .min(8, { message: 'Должен содержать не менее 8 символов' })
//     .regex(/[a-zA-Z]/, { message: 'Должен содержать хотя бы одну букву.' })
//     .regex(/[0-9]/, { message: 'Должен содержать хотя бы одну цифру.' })
//     .regex(/[^a-zA-Z0-9]/, {
//       message: 'Должен содержать хотя бы один специальный символ.',
//     })
//     .trim(),
// })

export type FormState =
  | {
      errors?: {
        login?: string[]
        password?: string[]
      }
      message?: string
    }
  | undefined