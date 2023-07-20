import {NextResponse} from 'next/server'
import prismadb from '../../../Lib/prismadb'
import { revalidatePath } from 'next/cache'

export async function POST(request){
    try{
        const body=await request.json()
        const requestedMovie=await prismadb.movie.findUnique({where:{id:body.movieId},select:{id:true}})
        if (!requestedMovie){
            return new NextResponse(JSON.stringify({message:"Invalid movie id"}),{status:400})
        }
        const user=await prismadb.user.update({where:{email:body.email},data:{favouriteIds:{push:body.movieId}}})
        revalidatePath('/')
        return new NextResponse(JSON.stringify({message:"Movie added to favourites"}),{status:200})
    }
    catch(error){
        console.log(error.message)
        return new NextResponse(JSON.stringify({message:error.message}),{status:400})
    }
}



export async function DELETE(request){
    try{
        const body=await request.json()
        const targetElement = await prismadb.user.findUnique({
            where: {
              email: body.email,
            },
          });
        const updatedId=targetElement.favouriteIds.filter((e)=>e!==body.movieId)
        const updatedUser=await prismadb.user.update({where:{email:body.email},data:{favouriteIds:updatedId}})
        revalidatePath('/')
        return new NextResponse(JSON.stringify({data:[]}),{status:200})
    }
    catch(error){
        console.log(error.message)
        return new NextResponse(JSON.stringify({message:"Couldn't remove the movie from favourites"}),{status:400})
    }
}   