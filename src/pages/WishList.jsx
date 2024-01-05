import React from 'react'
import { Button, Col, Row } from 'react-bootstrap'
import Card from 'react-bootstrap/Card';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { removeFromeWishlist } from '../redux/slices/wishlistSlice';
import { addToCart } from '../redux/slices/cartSlice';


export default function WishList() {
  const wishlistArray = useSelector((state)=>state.wishlistReducer)
  console.log(wishlistArray);
  const dispatch = useDispatch()

  const handleWishlist = (item)=>{
    dispatch(addToCart(item))
    dispatch(removeFromeWishlist(item.id))
  }

  return (
    <div>
      <Row className='ms-5 me-5' >
       {wishlistArray?.length>0?
       wishlistArray?.map((item)=>(<Col style={{marginTop:'150px'}}className='mb-5' sm={12} md={6} lg={4} xl={3}>
       <Card style={{ width: '18rem' }}>
       <Card.Img variant="top" src={item.thumbnail} style={{height:'200px'}}/>
       <Card.Body>
         <Card.Title>{item.title.slice(0,20)}...</Card.Title>
         <Card.Text>
           <p>{item.description.slice(0,40)}...</p>
           <p>PRICE : {item.price}</p>
         </Card.Text>
         <div className='d-flex align-items-center justify-content-between'>
           <Button onClick={()=>dispatch(removeFromeWishlist(item.id))} variant="outline-danger rounded"><i class="fa-solid fa-trash"></i></Button>
           <Button onClick={()=>handleWishlist(item)} variant="outline-success rounded"><i class="fa-solid fa-cart-plus"></i></Button>
         </div>
 
       </Card.Body>
     </Card>
       </Col>))
        
       :
       <div style={{height:'100vh'}} className='d-flex flex-colum justify-content-center align-items-center'>
        <img src="https://assets.materialup.com/uploads/87d4df96-a55f-4f4b-9a17-a696eded97f3/preview.gif" alt="no gif" />
        <h4 className='text-danger mt-3'>Your WishList Is Empty</h4>
       <button className='btn btn-success rounded mt-3'> <Link style={{textDecoration:'none',color:'white'}} to={'/'}> <i class="fa-solid fa-arrow-left me-3"></i> Back To Home</Link></button>
       </div>
       }
    </Row>
    </div>
  )
}
