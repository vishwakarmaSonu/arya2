import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

function Footer() {
    return (
        <footer style={{background:"#A5F1E9" , color:"#000000" }}>
            <Container>
                <Row>
                    <Col className="text-center py-3">Copyright &copy;<span style={{color:"brown" ,fontweight:"900"}}>Vishwakarma Arts</span>  2023 
        
        
        </Col>
                </Row>
            </Container>
        </footer>
    )
}

export default Footer
