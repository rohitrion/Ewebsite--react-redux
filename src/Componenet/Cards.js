import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useDispatch } from 'react-redux';
import { ADD } from '../Redux/actions/action';
import Cardsdata from './Cardsdata';
import "./style.css";
const Cards = () => {


    const [data, setdata] = useState(Cardsdata)


     const dispatch= useDispatch()
 
     const send =(element)=>{
       dispatch(ADD(element));
     }

    return (
        <div className='contianer mt-3'>

            <h2 className='text-center'> The Shopify App</h2>
            <div className='row d-flex justify-content-center align-items-center'>
                {
                    data.map((element, id) => {
                        return (

                            <Card style={{ width: '22rem',border:"none" }} className="mx-2 mt-4 card_style">
                                <Card.Img variant="top" src={element.imgdata} style={{height :"16rem"}} className="mt-3" />
                                <Card.Body>
                                    <Card.Title>{element.rname}</Card.Title>
                                    <Card.Text>
                                    Price : ₹ {element.price}
                                    </Card.Text>
                                    <div className='button_div d-flex justify-content-center'>
                                    <Button 
                                    onClick={()=>send(element)}
                                    className='col-lg-12' variant="primary">Add to Cart</Button>
                                    </div>
                                </Card.Body>
                            </Card>

                        )
                    })
                }

            </div>



        </div>
    )
}

export default Cards