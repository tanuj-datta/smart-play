import Reuse from './Reuse'; // Import the Valorant component
import img1 from '../assets/g1.png';
import img2 from '../assets/g2.png';
import img3 from '../assets/g3.png';

const valorantImages = [
  { id: 1, src: img1 },
  { id: 2, src: img2 },
  { id: 3, src: img3 },
];

function Genshin() {
  return (
    <div>
      <Reuse title="Showing Assets for Genshin Impact" images={valorantImages} path="spec" />
    </div>
  );
}

export default Genshin;