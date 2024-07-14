import React, { useEffect, useState } from 'react'
import Dish from './Dish';
import Switch from '@mui/material/Switch';



const AllDish = () => {

    const[resData,setData]=useState([])

    async function getData(){

        const res=await fetch('http://localhost:8000/');
        const data=await res.json();
        console.log(data);
        setData(data);
    }
    useEffect(()=>{
        getData()
    },[])
  
    return (
    <div>
   {resData.length>0 && resData.map((e)=>{
       return <Dish details={e}/>
   })}
    </div>
  )
}

export default AllDish
