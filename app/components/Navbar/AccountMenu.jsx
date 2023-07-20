import React from 'react'
import { signOut } from "next-auth/react";
function AccountMenu({visible}) {
    if (!visible){
        return null;
    }
    else{
        return (
            <div className='transition bg-black text-white absolute right-2 top-16 my-2 w-56 py-5 flex flex-col rounded-md'>
                {/* show the profiles */}
                <div className='flex flex-col justify-center gap-7'>
                    <div className='flex flex-row mx-3 items-center gap-3'>
                        <img src="/assets/Images/default-blue.png" alt="Profile" className='h-10'/>
                        <p>username</p>
                    </div>
                </div>
                <hr className='bg-gray-600 border-spacing-0 my-4'/>
                <div className='text-sm text-center cursor-pointer'onClick={()=>{signOut()}}>
                    Sign Out of NetFlix
                </div>
            </div>
        )
    }
  
}

export default AccountMenu