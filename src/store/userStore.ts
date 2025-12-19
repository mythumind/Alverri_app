import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import AsyncStorage from '@react-native-async-storage/async-storage';

type UserMode = 'Foundation' | 'Exploration' | null;

interface UserProfile {
    name: string;
    age: number;
}

interface UserState {
    profile: UserProfile | null;
    mode: UserMode;
    isOnboarded: boolean;
    setUser: (name: string, age: number) => void;
    resetUser: () => void;
}

export const useUserStore = create<UserState>()(
    persist(
        (set) => ({
            profile: null,
            mode: null,
            isOnboarded: false,

            setUser: (name, age) => {
                let mode: UserMode = null;
                if (age <= 5) mode = 'Foundation';
                else if (age <= 10) mode = 'Exploration';
                // Theoretical edge case: > 10, treat as Exploration or Error? 
                // SDD says 0-10. We'll stick to Exploration for >6 for now.

                set({
                    profile: { name, age },
                    mode,
                    isOnboarded: true,
                });
            },

            resetUser: () => set({ profile: null, mode: null, isOnboarded: false }),
        }),
        {
            name: 'alverri-user-storage',
            storage: createJSONStorage(() => AsyncStorage),
        }
    )
);
