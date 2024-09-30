import React from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { CiEdit } from "react-icons/ci";
import './recDetail.css'
import {Footer} from '../footer/Footer'
import {Header} from '../../components/header/Header';

export const RecDetail = () => {
    const [recDetail,setRecDetail]=React.useState({});
    console.log(recDetail)
    const navigate = useNavigate();
    const {recid}=useParams();
    const currentUser = JSON.parse(localStorage.getItem('user'))
    React.useEffect(()=>{
        fetch('http://localhost:8080/receips/'+recid)
        .then(res=>res.json())
        .then(data=>
            setRecDetail(data))
            console.log(recDetail)
    },[recid]);
    const loadingEdit=(id)=>{
      navigate('/update/'+id)
    }
  return (
    <>
    <Header></Header>
     <div className='detItems'>
     <div className="items">
        <div className="item">
            <img className='itemImg' src="https://media.istockphoto.com/id/922387908/ru/%D1%84%D0%BE%D1%82%D0%BE/%D1%84%D0%B0%D1%81%D1%82%D1%84%D1%83%D0%B4-%D0%B8-%D0%B7%D0%B4%D0%BE%D1%80%D0%BE%D0%B2%D0%B0%D1%8F-%D0%BF%D0%B8%D1%89%D0%B0-%D0%BD%D0%B0-%D1%81%D1%82%D0%B0%D1%80%D0%BE%D0%BC-%D0%B4%D0%B5%D1%80%D0%B5%D0%B2%D1%8F%D0%BD%D0%BD%D0%BE%D0%BC-%D1%84%D0%BE%D0%BD%D0%B5-%D0%BA%D0%BE%D0%BD%D1%86%D0%B5%D0%BF%D1%86%D0%B8%D1%8F-%D0%B2%D1%8B%D0%B1%D0%BE%D1%80%D0%B0-%D0%BF%D1%80%D0%B0%D0%B2%D0%B8%D0%BB%D1%8C%D0%BD%D0%BE%D0%B3%D0%BE-%D0%BF%D0%B8%D1%82%D0%B0%D0%BD%D0%B8%D1%8F-%D0%B8%D0%BB%D0%B8.jpg?s=170667a&w=0&k=20&c=Bv2_EO19vJApF0-12mKe90n_XrVVYxK7sb3kN_VAEb4=" alt="" />
            <p>
“Water is the most neglected nutrient in your diet, but one of the most important,” Julia Child.</p>
        </div>
        <hr className='h' />
        <div className="item">
            <img className='itemImg' src="https://avatars.dzeninfra.ru/get-zen_doc/1873182/pub_5e26e15e0ce57b00ae1a7e61_5e26f1a4a3f6e400b5c4413f/scale_1200" alt="" />
            <p>“Eating is a necessity, but eating wisely is an art,” Francois VI de La Rochefoucauld.</p>
        </div>
        <hr className='h' />
        <div className="item">
            <img className='itemImg' src="https://avatars.dzeninfra.ru/get-zen_doc/1671806/pub_5e26e15e0ce57b00ae1a7e61_5e26f44aaad43600ad448051/scale_1200" alt="" />
            <p>
“Time and health are two precious assets that we do not recognize or value until they are depleted,” Denis Whately.</p>
        </div>
     </div>
   <div className="detail">
      <div className="det">
      <img className='recDetImg' style={{width:"100%"}} src={recDetail.img} alt="" />
     <div className="titleEdit">
      <h2>{recDetail.receiptName}</h2>
   {
      currentUser.id===recDetail.ownerId  ?
          <div onClick={()=>loadingEdit(recDetail.id)}><CiEdit className="edit" /></div>
          :''
   }
     </div>
     <p>Categories: {recDetail.selectRec}</p>
     <p className='rText'>Time: {recDetail.time} min</p>
     <p className='rDesc'>{recDetail.desc}</p>
     <p className='rText'>Necessary ingredients:</p>
      <div className="ingrs">
      <p><b>{recDetail.ingrName1}</b> : {recDetail.ingrQuant1}</p>
      {recDetail.ingrName2 ? <p><b>{recDetail.ingrName2}</b> : {recDetail.ingrQuant2}</p> :'' }
      {recDetail.ingrName3 ? <p><b>{recDetail.ingrName3}</b> : {recDetail.ingrQuant3}</p> :'' }
      {recDetail.ingrName4 ? <p><b>{recDetail.ingrName4}</b> : {recDetail.ingrQuant4}</p> :'' }
      {recDetail.ingrName5 ? <p><b>{recDetail.ingrName5}</b> : {recDetail.ingrQuant5}</p> :'' }
      {recDetail.ingrName6 ? <p><b>{recDetail.ingrName6}</b> : {recDetail.ingrQuant6}</p> :'' }
      {recDetail.ingrName7 ? <p><b>{recDetail.ingrName7}</b> : {recDetail.ingrQuant7}</p> :'' }
      {recDetail.ingrName8 ? <p><b>{recDetail.ingrName8}</b> : {recDetail.ingrQuant8}</p> :'' }
      </div>
      </div>
   </div>
  <div className="items">
  <div className="item">
            <img className='itemImg' src="https://avatars.dzeninfra.ru/get-zen_doc/1906120/pub_5e26e15e0ce57b00ae1a7e61_5e26f33143fdc000ad6476b2/scale_1200" alt="" />
           <p>
           Don't dig your own grave with your own knife and fork." - English proverb.</p>
        </div>
        <hr className='h' />
        <div className="item">
             <img className='itemImg' src="https://imageio.forbes.com/specials-images/imageserve/65072bc1a50c29d7592250c0/Healthy-food--Healthy-eating-background--Fruit--vegetable--berry---Vegetarian-eating-/960x0.jpg?format=jpg&width=960" alt="" />
            <p>Man is what he eats, Lucretius.</p>
        </div>
        <hr className='h' />
        <div className="item">
           <img className='itemImg' src="https://brighterworld.mcmaster.ca/wp-content/uploads/sites/2/2023/10/doctor-shortage-Conversation.png" alt="" />
           <p>
         The first wealth is health. R. Emerson.
</p>
       </div>
     </div>
    </div>
    <Footer></Footer>
    </>
   
  )
}
