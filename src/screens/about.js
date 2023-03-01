import React from 'react'


function about() {
    return (
        <div>
  <h1>About</h1>
      <p className='carousel.caption' ><h4 style={{color:"#A75D5D", margin:"45px"}}>Welcome to Vishwakarma art</h4></p>
      <p style={{ margin:"45px"}}>"VISHWAKARMA ARTS, This is factory which was established in 2020. <h5 style={{color:"red"}}>MANUFACTURER & SUPPLIERS  ALL TYPES OF HANDICRAFT  ITEMS".</h5></p>
      <p  style={{ margin:"45px"}}> The factory provides <span  style={{color:"red"}}>Home Delivery</span>  and it makes even a  <span signle  style={{color:"red"}}>signle item </span> for individuals.</p>
      <p  style={{ margin:"45px"}}> This factory is 100% legal and got approve by the GST. </p>
    

      <p  style={{ color:"green"}}> CONTACT US... </p>
      <li style={{ color:"green"}}>
        vishwakarma.art9588@gmail.com
      </li>
      <li style={{ color:"green"}}>
        9588938688
      </li>
      <br></br>
      <a
          class='social-icon-link facebook'
          href="https://facebook.com"
          target='_blank'
          rel="noopener"
          aria-label='facebook'
        >
          <i class='fab fa-facebook' />
        </a>
        <a  style={{ margin:"20px"}}
          class='social-icon-link linkedin'
          href="https://linkedin.com"
          target='_blank'
          rel="noopener"
          aria-label='linkedin'
        >
          <i class='fab fa-linkedin' />
        </a>

        </div>
    )
}

export default about
