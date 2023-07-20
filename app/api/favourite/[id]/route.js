import {NextResponse} from 'next/server'
import prismadb from '../../../../Lib/prismadb'

export async function GET(request,{params:{id}}){
    try{
        const userFavouriteIds=await prismadb.user.findUnique({where:{email:id},select:{favouriteIds:true}})
        const movies=await prismadb.movie.findMany({where:{id:{in:userFavouriteIds.favouriteIds}}})
        return new NextResponse(JSON.stringify({movies:movies}),{status:200})
    }
    catch(error){
        return new NextResponse(JSON.stringify({message:error.message}),{status:400})
    }
}
