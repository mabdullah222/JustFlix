
import { redirect } from "next/navigation";
import Navbar from "./components/Navbar/Navbar";
import Billboard from "./components/Billboard/Billboard";
import MovieList from "./components/MovieList/MovieList";
import FavouriteList from "./components/FavouriteList/FavouriteList";
import { Suspense } from "react";
import { getServerSession } from "next-auth";
import options from "./api/auth/[...nextauth]/options";

export default async function Home() {
  const session=await getServerSession(options)
  return (
    
        <div>
        <Navbar></Navbar>
          <Billboard></Billboard>
        <Suspense fallback={<h1 className="text-white">Loading</h1>}>
        <MovieList title="Trending Now" user={session?.user?.email}></MovieList>
        </Suspense>

        <Suspense fallback={<h1 className="text-white">Loading</h1>}>
        <FavouriteList title="My list" user={session?.user?.email}></FavouriteList>
        </Suspense>
        </div>      
  )
}


