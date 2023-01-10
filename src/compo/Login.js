import { useState } from "react"
import { useNavigate } from "react-router-dom"
import {Button, Container,Input} from 'reactstrap'
export default function Login()
{
    const [Logform,setform]=useState({user:"",password:""})
    
    const navigate=useNavigate()
    const handle=(e)=>{
        setform({...Logform,[e.target.name]:e.target.value})
        console.log(e)
    }
    const submit=()=>{
    
    if(Logform.user==='admin'&& Logform.password==='123')
    {
        console.log("hello")
        localStorage.setItem('islogged','true')
        navigate("/home")
    }
}

    return(
        <>
        <Container>
<form>
    <Input type="text" name="user" onChange={handle}></Input>
    <Input type="password" name="password" onChange={handle}></Input>
    <Button color='primary' onClick={submit}>Submit</Button>

</form>
        </Container>
        </>
    )
}