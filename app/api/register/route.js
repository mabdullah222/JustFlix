import bcrypt from 'bcrypt'
import prismadb from '../../../Lib/prismadb'
import { NextResponse } from 'next/server'

export async function POST(request){
    try{
        const {email,username,password}=await request.json()
        console.log(email,username,password)
        const existingUser=await prismadb.user.findUnique({where:{email}})
        if (existingUser){
            throw new Error("Email already taken")
        }
        const hashedPassword=await bcrypt.hash(password,12)

        const newUser=await prismadb.user.create({
            data:{email,name:username,image:'',hashedPassword,emailVerified:new Date()}
        })
        return new NextResponse(JSON.stringify({status:true,data:newUser}))
    }
    catch(error){
        console.log(error.message)
        return new NextResponse(JSON.stringify({status:false,message:error.message}))
    }
}