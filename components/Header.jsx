
import React from 'react'
import {  NavLink } from 'react-router-dom'
import "../estilos/Header/header.css"
import logo from "../media/logo.png"
import {FaSearch, FaUser} from 'react-icons/fa'

export const Header = () => {
  
  return (
    <header>
        <div className='titulo'>
          <a href='/'>
            <img src={logo} alt='Logo project' className='logo'/>
          </a>
          <span>Cambio Climatico</span>
        </div>
        <nav>
          <div className='secciones_nav'>
            <NavLink to="/" activeclassname="active">Home</NavLink> 
            <NavLink to="/page1" activeclassname="active">Calidad Aire</NavLink>
            <NavLink to="/page2" activeclassname="active">Grafico Resultados</NavLink>
          </div>
            <div className='iconos_nav'>
              <FaSearch className="search"/>
              <FaUser className="user"/>
            </div>  
        </nav>     
    </header>
  )
}
