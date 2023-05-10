import React from 'react'
import './Handles.css'
import { AiFillLinkedin, AiFillTwitterSquare } from 'react-icons/ai';
import { FaInstagramSquare, FaGithubSquare } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';




const Handles = () => {
  return (
    <section className='socials'>
      <a href="#AiFillLinkedin"><AiFillLinkedin className='icon' /></a>
      <a href="#AiFillTwitterSquare"><AiFillTwitterSquare className='icon' /></a>
      <a href="#MdEmail"><MdEmail className='icon' /></a>
      <a href="#FaInstagramSquare"><FaInstagramSquare className='icon' />
      </a>
      <a href="#FaGithubSquare"><FaGithubSquare className='icon' />
      </a>


    </section>
  )
}

export default Handles
