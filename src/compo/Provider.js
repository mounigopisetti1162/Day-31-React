import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Context from "./Context";
import {toast} from'react-toastify'
import axios from 'axios'


export default function Provider(props)
{
    const [people,setpeople]=useState([])
    const url="https://63ac054434c46cd7ae74a1f8.mockapi.io/mouni"
    const getpeople=()=>{
        axios(url).then((res)=>setpeople(res.data))
      
    }

    const deleted = (id) => {
        axios.delete("https://63ac054434c46cd7ae74a1f8.mockapi.io/mouni/"+id).then((res)=>{
            getpeople();
            toast.success("Deleted Successfully")})
      };
    console.log("provider")
    console.log(people)


    useEffect(()=>{
        getpeople()
    },[])
    return(
        <Context.Provider value={{people,setpeople,getpeople,deleted}}>
            {props.children}
        </Context.Provider>

        
    )
}