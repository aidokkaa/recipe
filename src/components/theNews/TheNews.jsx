import React from 'react'
import './theNews.css'
import { Link, useNavigate } from 'react-router-dom'
export const TheNews = () => {
    const [articles,setArticles]=React.useState([]);
    const navigate = useNavigate()
    const loadsArticle=(id)=>{
    navigate('/articles/artdetail/'+id)
    }
    React.useEffect(()=>{
     fetch('http://localhost:8080/articles').then(res=>res.json()).then(json=>setArticles(json))
    },[])
    console.log(articles);
  return (
    <div>
       <div className="art">
       <h1 style={{textAlign:'center'}} className='art-title'>Useful articles</h1>
        <div className="articles">
        {
            articles.map(item=>{
                return(
                    <div onClick={()=>loadsArticle(item.id)} key={item.id} className='singleArticle'>
                         <img className='image' src={item.img} alt="" />
                           <h3 style={{color:"#F4A900"}}>{item.title}</h3>
                            <p className='tDesc'>{item.titleDesc}</p>
                        </div>)
            })
        }
    </div>
    </div>
    </div>
  )
}
