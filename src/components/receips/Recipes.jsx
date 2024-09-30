import React from 'react';
import './receips.css';
import { useContext } from 'react';
import { CustomContext } from '../../Context';
import { useNavigate } from 'react-router-dom';
export const Recipes = () => {
  const {resObj2,filterItem,setFilterItem}=useContext(CustomContext);
  const navigate = useNavigate()
  const categories = ['Salads','Healthy cakes','Soup','Drinks','Cocktails','Breakfast','Lunch'];
  const [items,setItems]=React.useState([])
  React.useEffect(()=>{
    fetch('http://localhost:8080/receips')
    .then(res=>res.json())
    .then(data=>setItems(data))
  },[])
  const loadingDetail=(id)=>{
    navigate('/receips/detail/'+id)
  };
  const RemoveRec=(id)=>{
if(window.confirm('Do you want to remove?')){
  fetch('http://localhost:8080/receips/' + id,{
    method:'DELETE'}
    )
  .then((res)=>{  
  console.log("Removed successfully.")
  window.location.reload()})
}
  }
  const filterChange=(item)=>{
    setFilterItem(item);
    navigate('/categories/'+item)
}
  return (
    <div>
      <div className="recContainer"> 
      <h1 style={{textAlign:'center'}}>Recipes from our guests</h1>
      <div className="innerCont">
     <div className="filterItems"> 
     {
      categories.map((item,i)=>{
        return(<>
          <div key={i} className='filterItem' onClick={(i)=>{filterChange(item)}} >{item}</div>  
        </>)
      })
     }    
     </div>
     <hr className='hrFilter' />
      <div className="cardItems">    
      {
       !items ?
       <h1>no items</h1>:
       items.map(item=>(  
        <div key={item.id} className="cardItem">
          <img className='itemClass' src={item.img} alt="" />
          <p className='tags'>Categories: <span>{item.selectRec}</span></p>
          <h3 style={{color:"#F4A900"}} className='recName'>{item.receiptName}</h3>
          <p>{item.ingrName}</p>
          <p>{item.ingrQuant}</p>
          <div className="buttons">
          <button className='btnItem' onClick={()=>loadingDetail(item.id)}>Details</button>
          </div>
        </div>
       ))   
      } 
      </div>
      </div>
      </div>
    </div>
    
  )
}
