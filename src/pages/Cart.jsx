import React, { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useDispatch, useSelector } from 'react-redux';
import { emptyCart, removeFromCart } from '../redux/slices/cartSlice';
import { Link, Navigate, useNavigate } from 'react-router-dom';

export default function Cart() {
  const cartArray = useSelector((state)=>state.cartReducer)
  // console.log(cartArray);
  const dispatch = useDispatch()
  const [total , setTotal] = useState(0)
  const navigate = useNavigate()

  const getTotal= ()=>{
    if(cartArray.length>0){
      setTotal(cartArray?.map(item =>item.price).reduce((p1,p2)=>p1+p2))
    }
    else{
      setTotal(0)
    }
  }

  useEffect(()=>{
    getTotal()
  },[cartArray])

  const handleCart = ()=>{
    alert('Thank You ... For place your order')
    dispatch(emptyCart())
    navigate('/')
    
  }

  return (
    <div>
       {cartArray?.length>0?
      
        <Row className='ms-5 me-5' style={{marginTop:'150px'}}>
        
        { cartArray?.map((item,index)=>(
        <Col className='mb-5' sm={12} md={6} lg={4} xl={3}>
         <Card style={{ width: '13rem',borderRadius:'20px',borderWidth:'10px',height:'400px',borderBlockColor:'yellow',borderBlockEndColor:'blue' }}>
         <Card.Img variant="top" src={item.thumbnail} style={{height:'150px'}}/>
         <Card.Body >
           <Card.Title>{item.title.slice(0,20)}...</Card.Title>
           <Card.Text>
             <p>ITEM NO: {index+1}</p>
             <p>PRICE : {item.price}</p>
           </Card.Text>
           <div className='d-flex align-items-center justify-content-between'>
             <Button onClick={()=>dispatch(removeFromCart(item.id))}  variant="outline-success rounded"><i class="fa-solid fa-trash"></i></Button>
           </div>
           
   
         </Card.Body>
          </Card>
         </Col>
         ))}
       <div className="col-lg-4 d-flex justify-content-center align-item-center flex-column mb-5">
          <div className='border shadow p-5'>
            <h2 className='text-primary'>CART sammary</h2>
            <h4>total number of product: <span className='text-success fw-bolder fs-2'>{cartArray.length}</span></h4>
            <h4>total price:<span className='text-danger fw-bolder fs-3'>{total}</span></h4>
            <button onClick={handleCart} className='btn btn-success rounded w-100 mt-3'>check out</button>
          </div>
        </div>
          
          
         </Row>  
 
    :
    <div style={{height:'100vh'}} className='d-flex flex-colum justify-content-center align-items-center'>
     <img src="https://assets.materialup.com/uploads/87d4df96-a55f-4f4b-9a17-a696eded97f3/preview.gif" alt="no gif" />
     <h4 className='text-danger mt-3'>Your Cart Is Empty</h4>
    <button className='btn btn-success rounded mt-3'> <Link style={{textDecoration:'none',color:'white'}} to={'/'}> <i class="fa-solid fa-arrow-left me-3"></i> Back To Home</Link></button>
    </div>}
    </div>
  )
}
