import React from 'react'
import { Link } from 'react-router-dom';


export default function Footer() {
  return (
    <>
       <div style={{height:'300px'}} className='d-flex justify-content-center align-items-center w-100 flex-column bg-dark text-white'>
      <div className='d-flex justify-content-evenly align-items-center w-100'>
        <div className="websites" style={{width:'400px'}}>
          <h4 className='mb-3'>
          <i class="fa-solid fa-cart-shopping fa-beat-fade text-white me-2"></i>
            E-CART
          </h4>
          <h6>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus quibusdam fugiat fugit, molestias reprehenderit fuga optio dolor dolorum commodi iure neque illo assumenda voluptates! Harum recusandae sint molestiae facilis iusto.
          </h6>
        </div>
        <div className="links d-flex flex-column">
          <h4 className='mb-3' style={{overflow:'hidden'}}>Links</h4>
          <Link to={'/'} style={{textDecoration:'none',color:'white'}}>Home Page</Link>
          <Link to={'/cart'} style={{textDecoration:'none',color:'white'}}>Cart</Link>
          <Link to={'/wishlist'} style={{textDecoration:'none',color:'white'}}>Wish List</Link>
        </div>
        <div className="guides d-flex flex-column">
        <h4 className='mb-3'style={{overflow:'hidden'}}>Guids</h4>
          <Link to={'https://react.dev/'} style={{textDecoration:'none',color:'white'}}>React</Link>
          <Link to={'https://react-bootstrap.github.io/'} style={{textDecoration:'none',color:'white'}}>React Bootstrap</Link>
          <Link to={'https://bootswatch.com/'} style={{textDecoration:'none',color:'white'}}>Bootswatch</Link>

        </div>
        <div className="contacts">
          <h4 className='mb-3'style={{overflow:'hidden'}}>Contact As</h4>
          <div className='d-flex'>
            <input type="text" className='form-control' placeholder='Enter your email id' />
            <button className='btn btn-warning ms-2 align-items-center justify-content-center d-flex p-3'>Subscribe</button>
          </div>
          <div className='d-flex justify-content-evenly align-items-center mt-2'>
          
          <Link to={'/'} style={{textDecoration:'none',color:'white'}}><i class="fa-brands fa-instagram fa-2x"></i></Link>
          <Link to={'/home'} style={{textDecoration:'none',color:'white'}}><i class="fa-brands fa-twitter fa-2x"></i></Link>
          <Link to={'/watch-history'} style={{textDecoration:'none',color:'white'}}><i class="fa-brands fa-linkedin fa-2x"></i></Link>
          <Link to={'/watch-history'} style={{textDecoration:'none',color:'white'}}><i class="fa-brands fa-facebook fa-2x"></i></Link>

          </div>
        </div>

      </div>

      <p className='mt-5'>copyright @ 2023 media Player</p>


    </div>
    </>
  )
}
