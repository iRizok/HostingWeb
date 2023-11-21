import { useCallback, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/navbar'
import Footer from './components/footer'
import Slideshow from './components/slideshow'
import Sidebar from './components/sidebarAcordeon'
import SidebarAbout from './components/sidebarAbout'
import CombinedSidebar from './components/maincomponent'
import Login from './components/Login'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const App = () => {
  const [activeComponentIndex, setActiveComponentIndex] = useState(0);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [admins, setAdmins] = useState([]);

  const handleLogin = (username, password) => {

    if (username === "admin" && password === "admin") {
      setIsLoggedIn(true);
      setIsAdmin(true);
      // Guarda el estado de administrador en localStorage
      localStorage.setItem('isAdmin', true);
    } else {
      // Lógica para manejar el acceso no autorizado o mostrar mensajes de error
      console.error("Verificaion fallida")
      console.log(admins)
    }
  };

    const handleLogout = () => {
      console.log("logout")
      setIsLoggedIn(false);
      setIsAdmin(false);
      // Elimina el estado de administrador de localStorage al cerrar sesión
      localStorage.removeItem('isAdmin');
    };


  const handleNavbarButtonClick = (index) => {
    setActiveComponentIndex(index);
  };

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <>
            <Navbar onNavbarButtonClick={handleNavbarButtonClick} isLoggedIn={isLoggedIn} isAdmin={isAdmin} onLogout={handleLogout} />
            <Slideshow />
            <CombinedSidebar activeComponentIndex={activeComponentIndex} />
            <Footer isLoggedIn={isLoggedIn} isAdmin={isAdmin} onLogout={handleLogout} />
            </>}
        />
        <Route
          path="/iniciar-sesion"
          element={<Login onLogin={handleLogin} />}
        />
      </Routes>
    </Router>

  );
};

export default App;