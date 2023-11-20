import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/navbar'
import Footer from './components/footer'
import Slideshow from './components/slideshow'
import Sidebar from './components/sidebarAcordeon'
import SidebarAbout from './components/sidebarAbout'
import CombinedSidebar from './components/maincomponent'

const App = () => {
  const [activeComponentIndex, setActiveComponentIndex] = useState(0);

  const handleNavbarButtonClick = (index) => {
    setActiveComponentIndex(index);
  };

  return (
    <>
      <Navbar onNavbarButtonClick={handleNavbarButtonClick} />
      <Slideshow />
      <CombinedSidebar activeComponentIndex={activeComponentIndex} />
      <Footer />
    </>
  );
};

export default App;