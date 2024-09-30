import React from 'react'
import './header.css';
import { Link } from 'react-router-dom';
import { IoMdLogIn } from "react-icons/io";
import { CustomContext } from '../../Context';
import { IoMdAddCircleOutline } from "react-icons/io";
import { IoPerson } from "react-icons/io5";
import { useContext } from 'react';
import { CiMenuBurger } from "react-icons/ci";
export const Header = () => {
  const [openMenu,setOpenMenu]=React.useState(false)
  const {user,setUser}=useContext(CustomContext);
  const {userLogout}=useContext(CustomContext);
  const [openImt,setOpenImt]=React.useState(false);
  const checkImt=()=>{
    setOpenImt(!openImt)
  }
  return (
    <div>
       <div className="header">
        <div className="header-container">
             <Link className='logo' to='/'>
             <h1 className='logo'>EcoFood</h1>
             </Link>
             <CiMenuBurger onClick={()=>setOpenMenu(true)} className='burger1' />
         {
          openMenu &&
          <div className="menu">
             <div onClick={()=>(setOpenMenu(false))} className="closeX">X</div>  
          <div className="menu1">
            
          <Link className='link' to='/addrecipe'><span className='span'><IoMdAddCircleOutline className='headIcon'/> Add to recipe</span></Link>   
        {
               localStorage.getItem('user')!==null ? <span> <IoPerson className='headIcon'/> {user.name}</span> : <Link className='link' to='/register'><IoPerson className='headIcon'/> <span>Register</span></Link>
            }    
             <Link className='link' to='/register'>{user.name.length ? <span className='span' onClick={userLogout}><IoMdLogIn className='headIcon' /> Log Out</span>: ''}</Link>
        </div>
         </div>
         }
              <div className="menuHead">
               <Link className='link' to='/addrecipe'><span className='span'><IoMdAddCircleOutline className='headIcon'/> Add to recipe</span></Link>      
              {
                 localStorage.getItem('user')!==null ? <span> <IoPerson className='headIcon'/> {user.name}</span> : <Link className='link' to='/register'><IoPerson className='headIcon'/> <span className='span'>Register</span></Link>
              }    
               <Link className='link' to='/register'>{user.name.length ? <span className='span' onClick={userLogout}><IoMdLogIn className='headIcon' /> Log Out</span>: ' '}</Link>
              </div>      
            </div>
        </div>
        </div>        
  
            )}
