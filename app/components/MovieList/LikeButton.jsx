
import React,{useMemo} from 'react'
import {AiOutlinePlus,AiOutlineCheck} from 'react-icons/ai'
import { useSelector,useDispatch } from 'react-redux'
import { filterList,addFavourite } from '@/app/GlobalRedux/Features/favourites'

function LikeButton({element,user}) {
  const favourites=useSelector(state=>state.favourites.value)
  const dispatch=useDispatch()

  const favourite=useMemo(()=>{
    const ids=favourites.map(e=>e.id)
    return ids.includes(element.id)
  },[favourites,element.id])


  const handleUpdateFavourite=async ()=>{
    const body={email:user,movieId:element.id}
    let response;
    if (favourite){
      response=await fetch('/api/favourite',{
        method:'DELETE',
        headers:{
          'content-type':'application/json'
        },
        body:JSON.stringify(body)
      })
      if (response.status==200){
        dispatch(filterList(element))
      }
    }
    else{
        response=await fetch('/api/favourite',{
        method:'POST',
        headers:{
          'content-type':'application/json'
        },
        body:JSON.stringify(body)
      })
      if (response.status==200){
        dispatch(addFavourite(element))
      }
    } 
  }
  return (
    <div onClick={handleUpdateFavourite} className='cursor-pointer groip/item w-5 h-5 lg:w-10 lg:h-10 flex justify-center items-center transition hover:border-neutral-300 rounded-full border-2 border-white'>
        {favourite?<AiOutlineCheck className='text-white' size={25}></AiOutlineCheck>:<AiOutlinePlus className='text-white' size={25}></AiOutlinePlus>}
    </div>
  )
}

export default LikeButton