import React from "react";
import { AuthProvider } from './auth-context';

const AppProviders = ({ children }: { children: React.ReactNode }) => {
    return <AuthProvider>
        {children}
    </AuthProvider>
}
export default AppProviders;