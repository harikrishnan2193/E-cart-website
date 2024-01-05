import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import Badge from 'react-bootstrap/Badge';
import { useSelector } from 'react-redux';


export default function Header() {
  //to access the state value
  const wishlist =useSelector((state)=>state.wishlistReducer)
  // console.log(wishlist);
  const cart =useSelector((state)=>state.cartReducer)
  console.log(cart);


  return (
    <>
      <Navbar expand="lg" className="bg-dark fixed-top">
      <Container>
        <Navbar.Brand href=""><i class="fa-solid fa-cart-shopping fa-bounce text-white"></i> <Link style={{textDecoration:'none',color:'white'}} to={'/'}>E-CART</Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link className='btn border border-secondary rounded ms-3 mt-2'  href="#home"><Link style={{textDecoration:'none',color:'white'}} to={'/wishlist'}> <i class="fa-solid fa-heart text-danger"></i> Wishlist <Badge className='rounded ms-1' bg="danger">{wishlist.length}</Badge></Link></Nav.Link>
            <Nav.Link className='btn border border-secondary rounded ms-3 mt-2'  href="#link"><Link style={{textDecoration:'none',color:'white'}} to={'/cart'}> <i class="fa-solid fa-cart-shopping text-warning"></i> Cart <Badge className='rounded ms-1' bg="danger">{cart.length}</Badge></Link></Nav.Link>
           
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  )
}
