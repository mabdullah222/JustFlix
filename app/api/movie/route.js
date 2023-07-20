import { NextResponse } from 'next/server'
import prismadb from '../../../Lib/prismadb'

export async function GET(request){
    try{
        const movies=await prismadb.movie.findMany()
        return new NextResponse(JSON.stringify({status:true,movies}))
    }
    catch(error){
        return new NextResponse(JSON.stringify({status:false,message:error.message}))
    }
}