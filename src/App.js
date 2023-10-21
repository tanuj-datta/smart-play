import Navbar from './components/Navbar';
import Home from './components/Home';
import Games from './components/Games';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Reuse from './components/Reuse';
import Spec from './components/Spec';
import Valo from './components/Valo';
import Fortnite from './components/Fortnite';
import Rocket from './components/Rocket'
import Genshin from './components/Genshin';

function App() {
  return (
    <>
    <BrowserRouter>
    <Navbar/>
      <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="games" element={<Games />} />
          <Route path="games/valorant" element={<Valo/>}/>     
          <Route path="games/valorant/spec" element={<Spec/>}/>
          <Route path="games/fortnite" element={<Fortnite/>}/>     
          <Route path="games/rocket" element={<Rocket/>}/>   
          <Route path="games/genshin" element={<Genshin/>}/>  
          <Route path="games/fortnite/spec" element={<Spec/>}/>
          <Route path="games/rocket/spec" element={<Spec/>}/>
          <Route path="games/genshin/spec" element={<Spec/>}/>
      </Routes>
    </BrowserRouter>
   
    </>
  );
}

export default App;

