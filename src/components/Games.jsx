import React from 'react';
import { Link } from 'react-router-dom';
import img1 from "../assets/img1.png";
import img2 from "../assets/img2.png";
import img3 from "../assets/img3.png";
import img4 from "../assets/img4.png";

const gameImages = [
  { id: 1, src: img4, linkTo: 'valorant' },
  { id: 2, src: img3, linkTo: 'fortnite' },
  { id: 3, src: img2, linkTo: 'rocket' },
  { id: 4, src: img1, linkTo: 'genshin' },
];

export default function Games() {
  return (
    <>
      <h1 className='text-center font-bold text-3xl text-white p-10'>Choose the Game</h1>
      <div className='flex justify-center items-center'>
        {gameImages.map((image) => (
          <Link to={image.linkTo} key={image.id}>
            <img className="w-[20rem] h-[20rem] transform transition duration-1000 hover:scale-110" src={image.src} alt="" />
          </Link>
        ))}
      </div>
    </>
  );
}
