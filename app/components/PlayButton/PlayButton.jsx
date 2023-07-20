import React from 'react'
import { BsFillPlayFill } from "react-icons/bs"
import Link from 'next/link'
function PlayButton({movieId}) {
  return (
    <Link href={`/watch/${movieId}`} className='bg-white rounded-md py-1 lg:py-2 px-2 md:px-4 text-xs w-auto font=semibold flex flex-row items-center hover:bg-neutral-300 transition lg:text-lg'>
        <BsFillPlayFill size={30}></BsFillPlayFill>
        Play
    </Link>
  )
}

export default PlayButton