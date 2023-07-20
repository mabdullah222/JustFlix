import { AiOutlineArrowLeft } from "react-icons/ai"
import Link from "next/link"
async function WatchPage({params:{movieId}}) {
    const response=await fetch(`http://localhost:3000/api/movie/${movieId}`)
    const {movie}=await response.json()
    console.log(movie)
  return (
    <div className="h-screen w-screen bg-black">
        <nav className="fixed w-full p-4 z-10 flex flex-row items-center gap-8 bg-black bg-opacity-70 ">
            <Link href='/'><AiOutlineArrowLeft className="text-white" size={40}></AiOutlineArrowLeft></Link>
            <p className="text-white text-1xl md:text:3xl font-bold flex flex-row gap-4">
                <span>Watching:</span>
                {movie?.title}
            </p>
        </nav>
        <video src={movie.videoUrl} className="w-full h-full" autoPlay controls></video>
    </div>
  )
}

export default WatchPage