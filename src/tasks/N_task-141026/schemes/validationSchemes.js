import z from "zod";

export const signInScheme = z.object({
  email: z.email({error: 'Email harus diisi'}),
  password: z.string().min(3, {error: 'Password tidak valid'}),
  tac: z.boolean().refine(value => value === true, {error: 'Kamu harus menerima syarat dan kebijakan'})
})