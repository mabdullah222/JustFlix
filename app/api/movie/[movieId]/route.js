import { NextResponse } from "next/server";
import prismadb from '../../../../Lib/prismadb'
export async function GET(request,{params:{movieId}}){
    try{
        const movie=await prismadb.movie.findUnique({where:{id:movieId}})
        if (!movie){
            return new NextResponse(JSON.stringify({messgae:"Couldn't find the movie"}),{status:400})
        }
        return new NextResponse(JSON.stringify({movie:movie}),{status:200})
    }
    catch(error){
        return new NextResponse(JSON.stringify({message:error.message}),{status:400})
    }
}