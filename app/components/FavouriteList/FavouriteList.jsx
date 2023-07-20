'use client'
import React,{useEffect} from 'react'
import { useSelector,useDispatch } from "react-redux"
import {setFavourites} from '../../GlobalRedux/Features/favourites'
import MovieCard from '../MovieList/MovieCard'
function FavouriteList({title,user}) {
    const dispatch=useDispatch()
    const favourites=useSelector(state=>state.favourites.value)

    const getFavourites=async ()=>{
        const response=await fetch(`http://localhost:3000/api/favourite/${user}`)
        const jres=await response.json()
        dispatch(setFavourites(jres.movies))
        }
        
    useEffect(()=>{
        getFavourites()
    },[user])

    return(
    <div className="px-4 md:px-12 mt-4 space-y-10">
        <div>
            <p className="text-white text-md md:text-xl lg:text-2xl font-semibold">{title}</p>
            <div className="grid grid-cols-4 gap-2">
                {favourites.map((e)=>(
                    <MovieCard key={e._id} element={e} user={user}></MovieCard>
                ))}
            </div>
        </div>
    </div>
    )

}

export default FavouriteList