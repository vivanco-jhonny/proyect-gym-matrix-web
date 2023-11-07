import { User } from "firebase/auth";
import { create } from "zustand";

interface Users {
    user: User | null,
    setuser: (user: User) => void
}

export const useUserStore = create<Users>((set) => ({
    user: {} as User,
    setuser: (user) => {
        set({ user: user })
    }
}))
