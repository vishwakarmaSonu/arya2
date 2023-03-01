import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Navbar, Nav, Container, Row, NavDropdown } from 'react-bootstrap'



function Header() {
    
    

    return (
        <header>
            <Navbar  style={{background:"#ECB390", color:"black"}} expand="lg" collapseOnSelect>
                <Container>
                   
                        <Navbar.Brand href='/'> <span style={{color:"green"}}>Vishwakarma Arts </span></Navbar.Brand>
                    

                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        
                        <Nav className="ml-auto">
                        
                     
        
                           
                        
                           <Nav.Link href='/about'>About</Nav.Link>
                           <Nav.Link href='https://vishwakarmaartorder.pythonanywhere.com/app1/touch'>Contact</Nav.Link>


                       
       
                            
                           


                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    )
}

export default Header
