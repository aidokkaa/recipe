import React from 'react'
import './footer.css'
import { FaRegCopyright } from "react-icons/fa";
export const Footer = () => {
  return (
    <div>
      <div className="footer">
        <div className="footerDesc">
        <span className='eco'><FaRegCopyright/> EcoFood</span> <br />
        All rights to materials located on this website 
        are protected in accordance with current legislation. 
        </div>
      </div>
    </div>
  )
}