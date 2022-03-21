import React from 'react'
import {BsGithub} from 'react-icons/bs'
import {RiInstagramFill} from 'react-icons/ri'
import {BsTwitter} from 'react-icons/bs'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://github.com/dmaxadu" target="_blank" rel="noreferrer"><BsGithub /></a>
        <a href="https://instagram.com/dmaxadu" target="_blank" rel="noreferrer"><RiInstagramFill /></a>
        <a href="https://twitter.com/dmaxadu" target="_blank" rel="noreferrer"><BsTwitter /></a>
    </div>
  )
}

export default HeaderSocials