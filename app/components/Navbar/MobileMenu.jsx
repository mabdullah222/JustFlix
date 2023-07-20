import React from 'react'

function MobileMenu({visible}) {
    if (!visible){
        return null;
    }
    else{
        return (
            <div className='text-white absolute flex flex-col w-56 py-5 top-10 my-4 rounded-md bg-black'>
                <div className='flex flex-col gap-4 items-center text-center text-white'>
                    <div className='hover:text-gray-300 hover:underline'>
                        Home
                    </div>
                    <div className='hover:text-gray-300 hover:underline'>
                        Series
                    </div>
                    <div className='hover:text-gray-300 hover:underline'>
                        Films
                    </div>
                    <div className='hover:text-gray-300 hover:underline'>
                        New & Popular
                    </div>
                    <div className='hover:text-gray-300 hover:underline'>
                        Browse By Language
                    </div>
                </div>
            </div>
          )
    }
}

export default MobileMenu