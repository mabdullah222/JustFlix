import { BsFillPlayFill } from "react-icons/bs"
import LikeButton from "./LikeButton"
import Link from "next/link"
function MovieCard({element,user}) {
   
  return (
    <div className="group bg-zinc-900 col-span relative h-[12vw]">
        <img src={element.thumbnailUrl} alt="Logo" className="cursor-pointer object-cover transition duration shadow-xl rounded-md group-hover:opacity-90 sm:group-hover:opacity-0 delay-300 w-full h-[12vw]"/>
        <div className="opacity-0 absolute top-0 transition duration-200 z-18 invisible sm:visible delay-300 w-full scale-0 group-hover:scale-110 group-hover:-translate-y-[6vw] group-hover:translate-x-[2vw] group-hover:opacity-100">
            <img src={element.thumbnailUrl} alt="Logo" className="cursor-pointer object-cover transition duration shadow-xl rounded-t-md w-full h-[12vw]"/>
            <div className="z-10 bg-zinc-800 p-2 lg:p-4 absolute w-full transition shadow-md rounded-b-md">
                <div className="flex flex-row item-center gap-3">
                    <div className="bg-white cursor-pointer w-6 h-6 lg:w-10 lg:h-10 rounded-full flex justify-center items-center transition hover:bg-neutral-300">
                        <Link href={`/watch/${element.id}`}><BsFillPlayFill size={30}></BsFillPlayFill></Link>
                    </div>
                    <LikeButton element={element} user={user}></LikeButton>
                </div>
                <p className="text-green-400 font-semibold mt-4">
                    New <span className="text-white">
                        2023
                    </span>
                </p>
                <div className="flex flex-row mt-4 gap-2 items-center">
                    <p className="text-white text-[10px] lg:text-sm">{element.duration}</p>
                </div>
                <div className="flex flex-row mt-4 gap-2 items-center">
                    <p className="text-white text-[10px] lg:text-sm">{element.genre}</p>
                </div>
            </div>
        </div>
    </div>

  )
}

export default MovieCard