import React from 'react';
import { Link } from 'react-router-dom';

export default function Reuse(props) {
  const { title, images, path } = props;

  return (
    <div>
      <h1 className='text-center font-bold text-3xl text-white p-7 pb-0'>{title}</h1>
      <div className='flex items-center justify-center mx-auto'>
        {images.map((image) => (
          <Link to={path} key={image.id}>
            <img className="transform transition duration-1000 hover:scale-100 scale-90" src={image.src} alt="" />
          </Link>
        ))}
      </div>
    </div>
  );
}
