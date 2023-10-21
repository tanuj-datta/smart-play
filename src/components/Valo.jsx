import React from 'react';
import Reuse from './Reuse'; // Import the Valorant component
import img1 from '../assets/gun1.png';
import img2 from '../assets/gun2.png';
import img3 from '../assets/gun3.png';

const valorantImages = [
  { id: 1, src: img1 },
  { id: 2, src: img2 },
  { id: 3, src: img3 },
];

function valo() {
  return (
    <div>
      <Reuse title="Showing Assets for Valorant" images={valorantImages} path="spec" />
    </div>
  );
}

export default valo;
