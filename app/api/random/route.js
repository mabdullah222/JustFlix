import prismadb from '../../../Lib/prismadb'
import { NextResponse } from 'next/server'

export async function GET(request){
    try{
        const movieCount=await prismadb.movie.count()
        const randomIndex=Math.floor(Math.random()*movieCount)
        const randomMovie=await prismadb.movie.findMany({
            skip:randomIndex,
            take:1
        })
        return new NextResponse(JSON.stringify({movie:randomMovie[0]}))
    }
    catch(error){
        return new NextResponse(JSON.stringify({status:false,message:error.message}))
    }
}
