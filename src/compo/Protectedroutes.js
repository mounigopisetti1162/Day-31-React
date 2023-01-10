import {Navigate} from 'react-router-dom'
export default function Protected(props)
{
    let islogged=localStorage.getItem("islogged")|| 'false'
    console.log(islogged)
    if(islogged==='true')
    {
        return props.children;
    }
    else{
        return <Navigate to='/' repalce/>
    }
    
    
}