import React from 'react'
import DH from '../../assets/img/DH.png'
import './Footer.css'

const Footer = () => {
  return (
    <footer className='footer'>
      <p>Powered by</p>
      <img src={DH} alt='DH-logo' />
    </footer>
  )
}

export default Footer