import { createContext } from "react";
import React from "react";
export const CustomContext=createContext();
export const Context =(props)=>{
    const [user,setUser]=React.useState({
        name:'',
        email:'',
        password:''
    });
    console.log(user)
    
const [resObj2,setResObj2]=React.useState('')

    React.useEffect(()=>{
        if(localStorage.getItem('user')!==null) {
            setUser(JSON.parse(localStorage.getItem('user')))
        }
    },[])
    const userLogout = ()=>{
        setUser({
            name:'',
        email:'',
        password:'' 
        });
        localStorage.removeItem('user')
    }
    const [filterItem,setFilterItem]=React.useState('')
    const[resObj,setResObj]=React.useState({
        ownerId:'',
        receiptName:'',
        desc:'',
        time: '',
        selectRec:'',
        ingrName1:'',
        ingrQuant1:'',
        ingrName2:'',
        ingrQuant2:'',
        ingrName3:'',
        ingrQuant3:'',
        ingrName4:'',
        ingrQuant4:'',
        ingrName5:'',
        ingrQuant5:'',
        ingrName6:'',
        ingrQuant6:'',
        ingrName7:'',
        ingrQuant7:'',
        ingrName8:'',
        ingrQuant8:'',
        ingrName9:'',
        ingrQuant9:'',
        img:'',
    });
       console.log(resObj)
    const value={
        user,setUser,resObj,setResObj,resObj2,setResObj2,userLogout,filterItem,setFilterItem
    }
    return <CustomContext.Provider value={value}>
        {props.children}
    </CustomContext.Provider>
}

