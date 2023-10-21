import React from 'react';
import Reuse from './Reuse'; // Import the Valorant component
import img1 from '../assets/rl1.png';
import img2 from '../assets/rl2.png';
import img3 from '../assets/rl3.png';

const valorantImages = [
  { id: 1, src: img1 },
  { id: 2, src: img2 },
  { id: 3, src: img3 },
];

function valo() {
  return (
    <div>
      <Reuse title="Showing Assets for Rocket Leauge" images={valorantImages} path="spec"/>
    </div>
  );
}

export default valo;