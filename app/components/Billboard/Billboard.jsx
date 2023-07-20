'use client'
import { useEffect, useState } from "react"
import PlayButton from "../PlayButton/PlayButton"
function Loading(){
  return (
    <h1 className="text-white">🌀 Loading...</h1>
  )
}

function Billboard() {
  const [data,setData]=useState({})

  const fetchMovie=async ()=>{
    const res=await fetch('http://localhost:3000/api/random',{next:{revalidate:10}})
    if (!res.ok){
        console.log("Error")
    }
    else{
        const jres=await res.json()
        setData(jres.movie)
    }
  }
  useEffect(()=>{
    fetchMovie()
  },[])
    
  return (
    


    <div className="relative h-[56.25vw]">
        <video className="w-full h-[56.25vw] object-cover brightness-[50%]" src={data?.videoUrl} poster={data?.thumbnailUrl} autoPlay muted loop></video>
      <div className="absolute top-[30%] md:top-[40%] ml-4 md:ml-16">
        <p className="text-white text-1xl md:text-5xl h-full lg:text-6xl w-[50%] font-bold drop-shadow-xl">{data?.title}</p>
        <p className="text-white mt-3 md:mt-8 md:w-[80%] text-[8px] md:text-lg w-[90%] crop-shadow-xl">{data?.description}</p>
        <div className="flex flex-row items-center mt-3 md:mt-4 gap-3">
          <PlayButton movieId={data?.id}></PlayButton>
          <button className="bg-white text-white bg-opacity-30 rounded-md py-1 md:py-2 px-2 md:px-4 w-auto transition hover:bg-opacity-20">More Info</button>
        </div>
      </div>
      
    </div>

  )
}

export default Billboard