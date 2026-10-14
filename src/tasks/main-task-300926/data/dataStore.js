import { create } from "zustand";
import { persist } from "zustand/middleware";

const MOCK_USERS = [
  {
    id: 1,
    email: 'fulan@gmail.com',
    name: 'Fulan',
    role: 'user',
    password: '123',
  },
];

export const dataStore = create(
  persist(
    (set) => ({
      user: null,
      error: null,

      login: (email, password) => {
        // 1. Cari user berdasarkan email saja terlebih dahulu
        const emailExists = MOCK_USERS.find(u => u.email === email)

        // 2. Jika email tidak terdaftar sama sekali
        if (!emailExists) {
          set({ error: 'Akun tidak ditemukan' })
          return false
        }

        // 3. Jika email ada, tapi password salah
        if (emailExists.password !== password) {
          set({ error: 'Password salah!' })
          return false
        }

        // 4. Jika email dan password benar
        const { password: _, ...userData } = emailExists
        set({
          user: userData,
          error: null
        })
        return true
      },

      logout: () => set({ user: null, error: null }),
    }),
    {
      name: "am-data-store",
    }
  )
)