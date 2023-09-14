import React from 'react'
import { Global } from '../../helpers/Global'
import { useAppContext } from '../../hooks/useAppContext'
import { Link, NavLink } from 'react-router-dom'
import './Navbar.css'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {
  const { state, dispatch } = useAppContext()

  const changeTheme = () => {
    dispatch({ type: Global.actionType[0].TOGGLE_THEME })
    localStorage.theme = JSON.stringify(!state.theme)
  }

  return (
    <nav className='navbar'>
      {/* Aqui deberan agregar los liks correspondientes a las rutas definidas */}
      <ul className='menu'>
        <li><NavLink to="home">Home</NavLink></li>
        <li><NavLink to="/contact">Contact</NavLink></li>
        <li><NavLink to="/favs">Favorites</NavLink></li>
      </ul>
      {/* Deberan implementar ademas la logica para cambiar de Theme con el button */}
      <button onClick={changeTheme}>Change theme</button>
    </nav>
  )
}

export default Navbar