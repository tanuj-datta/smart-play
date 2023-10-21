import React from 'react';
import Reuse from './Reuse'; // Import the Valorant component
import img1 from '../assets/bb.png';
import img2 from '../assets/sk.png';
import img3 from '../assets/dt.png';

const valorantImages = [
  { id: 1, src: img1 },
  { id: 2, src: img2 },
  { id: 3, src: img3 },
];

function Fortnite() {
  return (
    <div>
      <Reuse title="Showing Assets for Fortnite" images={valorantImages} path="spec" />
    </div>
  );
}

export default Fortnite;
