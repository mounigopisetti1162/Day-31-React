import { useContext } from "react"
import Context from "./Context"
import {Container,Row,Col} from 'reactstrap'
import CardComponent from './Card'
export default function Student()
{
    const context=useContext(Context)
    return(
        <>
        <Container>
        

        <Row xs="3">
            {context.people.map((data)=>{
                if(data.division==='Student')
                {
                 return(
                    
                    <Col key={data.id}>
                  <CardComponent
                   
                    data={data}
                    key={data.id}
                  />
                </Col>
                 )
                    }
                
                
                }
            
            )}
            </Row>
            </Container>  
        </>
    )
}