import React, { useState } from 'react';
import { User } from 'screens/project-list/search-panel';
import * as auth from '../auth-provider';

const AuthContext = React.createContext<{
    user: User | null;
    login: (form: AuthForm) => Promise<void>;
    register: (form: AuthForm) => Promise<void>;
    logout: () => Promise<void>;
} | undefined>(undefined);
AuthContext.displayName = 'AuthContext';

interface AuthForm {
    username: string,
    password: string,
}

export const AuthProvider = ({children}: {children: React.ReactNode}) => {
    const [user, setUser] = useState<User | null>(null);

    const login = (form: AuthForm) => auth.login(form).then(setUser)
    const register = (form: AuthForm) => auth.register(form).then(setUser)
    const logout = () => auth.logout().then(() => setUser(null))

    return <AuthContext.Provider value={{ user, login, logout, register }}>
        {children}
    </AuthContext.Provider>
}



export const useAuth = () => {
    const context = React.useContext(AuthContext);

    if (!context) {
        throw new Error("useAuth必须在provider中使用");
    }
    return context;
}