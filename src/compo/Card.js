import * as React from 'react';
import Card from '@mui/material/Card';
import { useContext } from 'react';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import { CardTitle,CardSubtitle, CardBody } from 'reactstrap';
import Context from './Context';
export default function CardComponent({data,id})
{
  const context=useContext(Context)
    const navigate=useNavigate()
    const {avatar,name,field,division}=data
    return(
        <>
        <Card
       
    >
<CardBody>
      <img alt="Sample" src={avatar} />
        <CardTitle tag="h5">{name}</CardTitle>
        <CardSubtitle className="mb-2 text-muted" tag="h6">
          {field}
        </CardSubtitle>
        <CardSubtitle className="mb-2 text-muted" tag="h6">
          {division}
        </CardSubtitle>
    
                <Button
                    color="primary"
                    onClick={() =>
                      navigate(`/action/${data.id}`, {
                        state: { isView: false }
                      })
                    }
                  >
                    Update
                  </Button>
                  <Button
                    color="warning"
                    onClick={() =>
                      navigate(`/action/${data.id}`, {
                        state: { isView: true }
                      })
                    }
                  >
                  View
                  </Button>
<Button color="error"
                    onClick={() => context.deleted(data.id)}
                    > Delete</Button>
               

</CardBody>
</Card>
</>
    )
}