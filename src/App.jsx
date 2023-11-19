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

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Navbar></Navbar>
     <Slideshow></Slideshow>
     <CombinedSidebar></CombinedSidebar>
     <Footer></Footer>
    </>
  )
}

export default App
