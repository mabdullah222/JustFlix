import Credentials from 'next-auth/providers/credentials';
import prismadb from '../../../../Lib/prismadb'
import bcrypt from 'bcrypt'
import GoogleProvider from 'next-auth/providers/google'
import { PrismaAdapter } from '@next-auth/prisma-adapter';


const options={
    // this is our providers list in this case we are making our own provider or auth manager
    providers:[
        GoogleProvider({
            clientId:process.env.GOOGLE_CLIENT_ID || '',
            clientSecret:process.env.GOOGLE_CLIENT_SECRET || ''
        }),
        Credentials({
            id:'credentials',
            name:'credentials',
            credentials:{
                email:{
                    label:'Email',
                    type:'text'
                },
                password:{
                    label:'Password',
                    type:'password'
                }
            },
            authorize:async(credentials)=>{
                if (!credentials?.email || !credentials?.password){
                    throw new Error('Email or Password Missing')
                }
                const user=await prismadb.user.findUnique({where:{email:credentials.email}})
                if (!user || !user.hashedPassword){
                    throw new Error("Email Doesnot exist")
                }
                const isCorrectPassword=await bcrypt.compare(credentials.password,user.hashedPassword)
                if (!isCorrectPassword){
                    throw new Error("Incorrect Password")
                }
                return user;
            }
        })
    ],
    // pages it should work on
    pages:{
        signIn:'/auth'   
    },
    // helps you to see the error during the development
    debug: process.env.NODE_ENV=='development',
    adapter:PrismaAdapter(prismadb),
    session:{
        strategy:'jwt'
    },
    jwt:{
        secret:process.env.NEXTAUTH_JWT_SECRET
    },
    secret:{
        secret:process.env.NEXTAUTH_SECRET
    }
}

export default options