import { useContext } from "react"
import Context from "./Context"
import {Container,Row,Col} from 'reactstrap'
import CardComponent from './Card'
export default function Teacher()
{
    const context=useContext(Context)
    return(
        <>
        <Container>
        

        <Row xs="3">
            {context.people.map((data)=>{
                if(data.division==='Teacher')
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