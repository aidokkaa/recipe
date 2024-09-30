import React, { useContext, useReducer, useState } from 'react';
import { CustomContext } from '../../Context';
import { useParams,useNavigate } from 'react-router-dom';
import { Header } from '../header/Header';
import { Footer } from '../footer/Footer';
export const Update = () => {
  const [recDetail,setRecDetail]=React.useState({});
  const {resObj,setResObj,resObj2,setResObj2}=useContext(CustomContext);
  const {recid}=useParams();
  const navigate = useNavigate();
  React.useEffect(()=>{
      fetch('http://localhost:8080/receips/'+recid)
      .then(res=>res.json())
      .then(data=>
          setResObj(data))
  },[recid, setResObj, setResObj2])
  const handleChange =(e)=>{
    e.preventDefault()
    setResObj(prev=>({...prev,[e.target.name]:e.target.value,}));
    setResObj(prev=>({...prev,img:resObj2}));
  };

  const ingredients = [
    {ingrName:'ingrName1',
     ingrQuant:'ingrQuant1'},
   {ingrName:'ingrName2',
   ingrQuant:'ingrQuant2'},
   {ingrName:'ingrName3',
   ingrQuant:'ingrQuant3'},
   {ingrName:'ingrName4',
   ingrQuant:'ingrQuant4'},
   {ingrName:'ingrName5',
   ingrQuant:'ingrQuant5'},
   {ingrName:'ingrName6',
   ingrQuant:'ingrQuant6'},
   {ingrName:'ingrName7',
   ingrQuant:'ingrQuant7'},
   {ingrName:'ingrName8',
   ingrQuant:'ingrQuant8'},
   {ingrName:'ingrName9',
   ingrQuant:'ingrQuant9'}
]
const handleUpload = (e)=>{
  e.preventDefault();
  const file = e.target.files[0];
 let reader = new FileReader();
 reader.readAsDataURL(file);
 reader.onload = function() {
  setResObj2(reader.result)
};
}
const handleUpdate =(e)=>{
  e.preventDefault();
  fetch('http://localhost:8080/receips/'+recid,{
    method:'PUT',
    body:JSON.stringify({...resObj,resObj2})
  })
  .then(res=>res.json()).then(data=>{
   console.log(data)
   alert('Updated!')
   navigate('/')
  })
}
  return (
    <div>
      <Header></Header>
       <div className="addContainer">
        <div className="innerRgba">
        <div className="form">
         <p className='formRules'>Rules for adding a recipe</p>
         <div className="rules">
         <p className='rulesDesc'>1. When adding new recipes, you must strictly 
          remember that YOU ARE PUBLISHING THE RECIPE NOT ONLY FOR 
          YOURSELF, BUT ALSO FOR OTHER USERS OF THE SITE</p>
          <p className='rulesDesc'>2. Recipes can be added only if the recipe is presented in full by the author (in the absence of any text matches with publications
             of similar recipes on other resources)</p>
             <p className='rulesDesc'>3. Write the cooking process step by step and numbered below in the descriptions.</p>
             <p className='rulesDesc'>4. Recipes that do not comply with the rules for adding recipes will be deleted by the moderator</p>
         </div>
         <form onSubmit={handleUpdate} className='formAdd'>
           <div className="formData">
           <div className='file-upload-container'>
       <p>Select a picture:</p><br></br>
       <input onChange={handleUpload} type="file" name='img'/>
       <img src={resObj.img} alt="File--upload" style={{width:"100px",height:"100px"}}/>

    </div>
           <div className="recName">
          <span>Name of the dish: </span><input onChange={handleChange} value={resObj.receiptName} type="text" name='receiptName'/>
          </div>
           <div className="recDesc">
           <span>Short description:  </span><textarea onChange={handleChange} type="text" value={resObj.desc} name='desc'/>
           </div>
         <div className="recImg">
         </div>
          <div className="recTime">
          <span>Time to cook (in minutes):  </span><input onChange={handleChange} value={resObj.time} type="number" name='time'/>
          </div>
         <div className="select">
           <span>Select category: </span>
            <select value={resObj.selectRec}  onChange={handleChange} name="selectRec">
            <option value="Salads">Salads</option>
            <option value="Healthy cakes">Healthy cakes</option>
            <option value="Soup">Soup</option>
            <option value="Desserts">Desserts</option>
            <option value="Snacks">Snacks</option>
            <option value="Drinks">Drinks</option>
            <option value="Cocktails">Cocktails</option>
            <option value="Breakfast">Breakfast</option>
            <option value="Lunch">Lunch</option></select>
         </div>
           </div>
           <div className="formIngred">
             <span style={{textAlign:"center"}}>Ingredients</span>
          <div style={{display:"flex",justifyContent:"space-around"}} className="span">
           <span>Name:</span>
           <span>Quantity:</span>
           </div>
           <p style={{textAlign:"center"}}>(indicating the unit of measurement)</p>
                {
                  ingredients.map(item=>(
                    <>
                         <div className="ingredItem">
                <div className="ingredName">
                <input onChange={handleChange} name={item.ingrName}  type="text" />
                </div>
             <div className="ingredQuant">
             <input name={item.ingrQuant}  onChange={handleChange} type="text" />
             </div>
              </div>
                    </>
                  ))
                }         
              <div className="ingredItem">
              <div className="ingredName">
              <input name='inname' onChange={handleChange} type="text" />
              </div>
           <div className="ingredQuant">
           <input onChange={handleChange} type="number" />
           </div>
            </div>
              <button style={{backgroundColor:"#F4A900",fontSize:"16px",cursor:"pointer"}}>Update</button>      
           </div>
          </form>
         </div>
        </div>
      </div>
    </div>
  )
}
