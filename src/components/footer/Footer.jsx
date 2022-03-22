import React from 'react';
import './footer.css'
import {BsGithub} from 'react-icons/bs'
import {RiInstagramFill} from 'react-icons/ri'
import {BsTwitter} from 'react-icons/bs'

const Footer = () => {
  return (
    <footer>
      <a href='#header' className='footer_logo'>Daniel Machado</a>
      <ul className='permalinks'>
        <li><a href="#header">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://github.com/dmaxadu"  target="_blank" rel="noreferrer"><BsGithub/></a>
        <a href="https://instagram.com/dmaxadu" target="_blank" rel="noreferrer"><RiInstagramFill/></a>
        <a href="https://twitter.com/dmaxadu"  target="_blank" rel="noreferrer"><BsTwitter/></a>
      </div>

      <div className="footer_copyright">
        <small>&copy; Daniel Machado. Todos os direitos reservados</small>
      </div>
    </footer>
  )
}

export default Footer