import { login } from "../../apis/auth/auth.api";
import { LoginRequest } from '../../types/auth/loginTypes';
import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

interface AuthState {
    isAuthenticated: boolean;
    token: string;
    userData: any;
    setToken: (token: string) => void;
    login: (payload: LoginRequest) => Promise<{ success: boolean }>;
    logout: () => void;
}

const useAuthStore = create<AuthState>()(
    devtools(
        persist(
            (set) => ({
                isAuthenticated: false,
                token: "",
                userData: {},
                setToken: (token: string) => {
                    set({ token, isAuthenticated: true });
                },
                login: async (payload: LoginRequest) => {
                    try {
                        // Define the response type inline
                        type LoginResponse = {
                            data: {
                                token: string;
                                id: number;
                            };
                        };

                        const response = await login(payload);
                        const responseData = response as unknown as LoginResponse;
                        set({ token: responseData.data.token, userData: responseData.data, isAuthenticated: true});
                        return { success: true }; 
                    } catch (error) {
                        console.error("Login error:", error);
                        throw error;
                    }
                },
                logout: () => {
                    set({ isAuthenticated: false, token: "", userData: {} });
                },
            }),
            { name: "arkbo-session" }
        )
    )
);

export default useAuthStore;
