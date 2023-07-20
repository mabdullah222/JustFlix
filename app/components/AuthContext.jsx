'use client';
import { SessionProvider} from "next-auth/react";


export default async function AuthContext({children}){
    return (
        <SessionProvider>  
            {children}
        </SessionProvider>
    )
    
}