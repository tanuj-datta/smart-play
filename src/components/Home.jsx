import React from 'react'
import img from '../assets/Frame 10.png'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div className='flex items-center h-[80vh] w-[1200px] justify-between mx-auto'>
        <div className='mr-20'>
            <h1 className='text-white font-extrabold text-5xl mb-10'>PLAY YOUR GAME <br/> THE WAY YOU WANT</h1>
            <p className='text-white font-semibold text-2xl mb-9'>RENT ASSETS FOR YOUR FAVOURITE GAMES</p>
            <Link to='games'>
          <button className='p-3 text-black bg-green-500 text-white rounded-2xl rounded-br-[1.1rem] rounded-tr-[1.1rem] font-extrabold w-52 text-[1.15rem] border-black border-[5px] border-b-[8px] border-r-[8px]'>Launch App 🚀</button>
        </Link>
        </div>

        <div className='pt-10 ml-14'>
            <img
        src={img} // Reference to the image in the "public" folder
        alt="My Image"
        width={450} // Set the width
        height={400} // Set the height
      />
        </div>
    </div>
  )
}