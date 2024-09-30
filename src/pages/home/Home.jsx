import React from 'react'
import './home.css'
import { Recipes } from '../../components/receips/Recipes';
import { TheNews } from '../../components/theNews/TheNews';
import { IoMdCheckmark } from "react-icons/io";
import { Link } from 'react-router-dom';
import { IoMdLogIn } from "react-icons/io";
import { CustomContext } from '../../Context';
import { IoMdAddCircleOutline } from "react-icons/io";
import { IoPerson } from "react-icons/io5";
import { useContext } from 'react';
import { Slide } from '../../components/slide/Slide';
import { CiMenuBurger } from "react-icons/ci";
export const Home = () => {
  const {user,setUser}=useContext(CustomContext);
  const {userLogout}=useContext(CustomContext);
  const [weight,setWeight]=React.useState(null);
  const [height,setHeight]=React.useState(null);
  const [Bmi,setBmi]=React.useState('');
  const [errMsg,setErrMsg]=React.useState('')
  const [open,setOpen]=React.useState(false);
  const [openMenu,setOpenMenu]=React.useState(false)
 const checkBmi=(e)=>{
  e.preventDefault()
  if(!weight || !height){
  setErrMsg('Please fill to both input');
  return;
  }
  const numericHeight = parseFloat(height);
  const numericWeight = parseFloat(weight);
  if(isNaN(numericHeight) || isNaN(numericWeight) || numericHeight && numericWeight <=0){
      setErrMsg('Plese enter valid value number')
      return;
  };
  const calcHeightInMeters = numericHeight / 100;
  const calculateBMI = (numericWeight / (calcHeightInMeters * calcHeightInMeters)).toFixed(2);
  setBmi(calculateBMI);
  setErrMsg('')
  console.log(Bmi)
 }
 function feedBack(bmi){
  return(
    bmi >30 ? "You have obesity":
    bmi >25 ? "You have overweight"
    : "Normal"
  )
 }
  return (
    <div>
      <div className="healthyCont">
        <div className="healthInner"> 
       <div className="titleInner">
         <h1 className='logoInner'>EcoFood</h1>
         <CiMenuBurger onClick={()=>setOpenMenu(true)} className='burger' />
         {
          openMenu &&
          <div className="menu">
             <div onClick={()=>(setOpenMenu(false))} className="closeX">X</div>  
          <div className="menu1">  
          <Link className='link' to='/addrecipe'><IoMdAddCircleOutline className='headIcon'/> Add to recipe</Link>   
        {
               localStorage.getItem('user')!==null ? <span> <IoPerson className='headIcon'/> {user.name}</span> : <Link className='link' to='/register'><IoPerson className='headIcon'/> <span>Register</span></Link>
            }    
             <Link className='link' to='/register'>{user.name.length ? <span className='span' onClick={userLogout}><IoMdLogIn className='headIcon' /> Log Out</span>: ' '}</Link>
        </div>
         </div>
         }
        <div className="menuInn">
               <Link className='link' to='/addrecipe'><span className='span'><IoMdAddCircleOutline className='headIcon'/> Add to recipe</span></Link>      
              {
                 localStorage.getItem('user')!==null ? <span> <IoPerson className='headIcon'/> {user.name}</span> : <Link className='link' to='/register'><IoPerson className='headIcon'/> <span className='span'>Register</span></Link>
              }    
               <Link className='link' to='/register'>{user.name.length ? <span className='span' onClick={userLogout}><IoMdLogIn className='headIcon' /> Log Out</span>: ''}</Link>
              </div> 
       </div>
           <div className="hBorder">
           <div className="hBorderInner">
           <span className='ecoSpan'>EcoFood</span>
            <div className="titles">
            <h1 className='title1'>Eat Right with</h1>
            <h1 className='title2'>EcoFood</h1>
            <div onClick={()=>setOpen(true)} className="checkbtn">
            <h3>Check your IMT</h3>
        </div>
        <div onClick={()=>setOpen(true)} className="checkbtnNone"><Link className='link' to='/addrecipe'><IoMdAddCircleOutline/> <span>Add a recipe</span></Link>
        </div> 
        {
          open && 
          <div className="modal">
          <div className="modalInner">
           <div className="form">
           <input className='inp' onChange={(event)=>setWeight(event.target.value)} value={weight} type="number" placeholder='Enter your weight (kg)'/>
            <input className='inp' onChange={(event)=>setHeight(event.target.value)} value={height} type="number" placeholder='Enter your height (cm)'/>
            <button className='btnCheck' onClick={checkBmi}>Check BMI</button>
            <h1 style={{textAlign:"center",fontSize:"16px",fontWeight:"bold"}}>{Bmi}</h1>
           <p style={{textAlign:"center",fontSize:"16px",fontWeight:"bold"}}>Your condition: <span className={Bmi >30 ? "spanBmiRed":
    Bmi >25 ? "spanBmiYellow"
    : "spanBmiGreen"}>{feedBack(Bmi)}!</span></p>
           </div>
          </div>
          <h1 onClick={()=>setOpen(false)}style={{position:"absolute",right:"30%", top:"20%", color:"#FFD300",cursor:"pointer"}}>X</h1>
        </div>     
        }
            </div>
           </div>
           </div>
        </div>
      </div>
     <Recipes/>
     <hr style={{width:'600px',margin:"50px auto"}} />
     <TheNews/>
     <hr style={{width:'600px',margin:"50px auto"}} />
     <Slide></Slide>
     </div>
  )
}
