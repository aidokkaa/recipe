import React from 'react'
import './register.css';
import  {CustomContext} from '../../Context';
import { Link, useNavigate } from 'react-router-dom';
import { FaRegEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import axios from 'axios'
import { useContext } from 'react';
import { IoIosArrowRoundBack } from "react-icons/io";
export const Register = () => {
  const navigate = useNavigate()
  const {user,setUser}=useContext(CustomContext)
  console.log(user)
  const [eye,setEye]=React.useState(true);
  const [validHide,setvalidhide]=React.useState(false)
  const [checkUser,setCheckUser]=React.useState('')
  const [userState,setUserState]=React.useState({
    name:'',
    email:'',
    password:'',
  })
  const handleChange=(e)=>{
    setUserState(prev=>({...prev, [e.target.name]:e.target.value}));
    const lower = new RegExp('(?=.*[a-z])');
    const upper = new RegExp('(?=.*[A-Z])');
    const number = new RegExp('(?=.*[0-9])');
    const special = new RegExp('(?=.*[!@#\$%\^&\*])');
    const length = new RegExp('(?=.{8,})');
    if(lower.test(e.target.value)){
      setLowerValidated(true)
    }else{
      setLowerValidated(false)
    }
    if(upper.test(e.target.value)){
      setUpperValidated(true)
    }else{
      setUpperValidated(false)
    }
    if(number.test(e.target.value)){
      setNumberValidated(true)
    }else{
      setNumberValidated(false)
    }
    if(special.test(e.target.value)){
      setSpecialValidated(true)
    }else{
      setSpecialValidated(false)
    }
    if(length.test(e.target.value)){
      setLengthValidated(true)
    }else{
      setLengthValidated(false)
    }
  }
  const [lowerValidated,setLowerValidated]=React.useState(false);
  const [upperValidated,setUpperValidated]=React.useState(false);
  const [numberValidated,setNumberValidated]=React.useState(false);
  const [specialValidated,setSpecialValidated]=React.useState(false);
  const [lengthValidated,setLengthValidated]=React.useState(false)
  
  function registerUser(e) {
    e.preventDefault()
     axios.post('http://localhost:8080/users',userState)
    .then(user=>{
      setUser({
      ...user.data
      })
      localStorage.setItem('user',JSON.stringify({...user.data}))
     if(user.data.name.length){
        navigate('/')
     }else{
      setCheckUser('Please, fill the inputs!')
     }
    }) 
}
  return (
    <div>
      <div className="container">
   <div className="contInner">
   <div className="formDiv">
   <Link to='/'><div><IoIosArrowRoundBack style={{fontSize:"30px"}} /></div></Link>
          <form onSubmit={registerUser}>
            <h1 style={{textAlign:"center",color:"white"}}>Sign up</h1>
            <input required type="text" onChange={handleChange} name="name"  placeholder='Enter your name'/>
            <input required type="email" onChange={handleChange} name="email" placeholder='Enter your email'/>
            <div style={{position:"relative"}}>
            <input onInput={()=>setvalidhide(true)} required type={eye ? 'password' : 'text'} onChange={handleChange} name="password"  placeholder='Create password'  /> 
            {eye ? <FaRegEye style={{position:'absolute',top:"15px",right:"25px"}} onClick={()=>setEye(!eye)}/> :<FaEyeSlash style={{position:'absolute',top:"15px",right:"25px"}} onClick={()=>setEye(!eye)} />}
            </div>
            <p style={{color:'red',textAlign:'center'}}>{checkUser}</p>
           {
            validHide && 
            <div className="tracker-box">
              <span><b>Recommended !</b></span>
            <div className={lowerValidated ? 'validated' :'non-validated'}>At least one lowerCase letter</div>
            <div className={upperValidated ? 'validated' :'non-validated'}>At least one UpperCase letter</div>
            <div className={numberValidated ? 'validated' :'non-validated'}>At least one number</div>
            <div className={specialValidated ? 'validated' :'non-validated'}>At least one special character</div>
            <div className={lengthValidated? 'validated' :'non-validated'}>At least 8 characters</div>
          </div>
           }
         <button style={{
          display:"block",
          margin:'40px auto',
          padding:"10px",
          backgroundColor:"#F4A900",
          cursor:"pointer",
          border:"1px solid #fff",
          width:"100px",
          borderRadius:"10px",
          color:"#fff",
          fontSize:"16px"}}>Register</button>
          </form>
         </div>
   </div>
      </div>
    </div>
  )
}
