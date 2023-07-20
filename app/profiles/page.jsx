'use client'
import { useSession } from "next-auth/react"
import { redirect } from "next/navigation"
import Link from "next/link"
export default function ProfilesPage(){
    const {data:session}=useSession({
        required:true,
        onUnauthenticated(){
            redirect('/auth')
        }
    })

    return (
    <div className="flex h-full items-center justify-center">
        <div className="flex flex-col">
            <h1 className="text-white text-4xl mb-4">Who's Watching?</h1>
            <div className="flex flex-row justify-center items-center">
                <div className="group flex gap-4 flex-col cursor-pointer">
                    <img src="/assets/Images/default-blue.png" alt="Profile" className="w-40 h-40 hover:border-white"/>
                    <p className="text-gray-400 group-hover:text-white"><Link href='/'>{session?.user?.name}</Link></p>
                </div>
            </div>
        </div>
    </div>
    )
}