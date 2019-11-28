import React, { Component } from 'react';
import './WhatWeOffer.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Container, Row, Col } from 'react-bootstrap';
import { 
    MDBJumbotron, 
    MDBCardTitle, 
    MDBBtn, 
    MDBCard,
    MDBCardBody,
    MDBCardText
} from 'mdbreact';

class WhatWeOffer extends Component {

    render() {
        return(
            <div id="WhatWeOffer">
            <Container>
            <Row className="text-center justify-content-center" style={{ marginBottom: "5%" }}>
                <Col>
                <h2 className="h2">What We Offer</h2>
                </Col>
            </Row>
            <Row>
                <Col style={{ marginBottom: "5%" }} lg={4} md={4} sm={12} xs={12}>
                <MDBCard className="text-center w-auto">
                    <MDBCardBody style={{ background: "#1a1a1a", height: "200px" }}>
                    <MDBCardTitle>
                    <FontAwesomeIcon className="h1" icon="question-circle" />
                    </MDBCardTitle>
                    <MDBCardText tag="div" className="h5" style={{ height: "50px", color: "#cccccc" }}>
                        Need more help than what's provided here? Join our support server!
                        
                    </MDBCardText>
                    <a target="_blank" rel="noopener noreferrer" href="https://discord.gg/TqKHVUa">
                    <MDBBtn color="elegant" className="Button">
                    Join Support Server
                    </MDBBtn>
                    </a>
                    </MDBCardBody>
                </MDBCard>
                </Col>
                <Col style={{ marginBottom: "5%" }} lg={4} md={4} sm={12} xs={12}>
                <MDBCard className="text-center w-auto">
                    <MDBCardBody style={{ background: "#1a1a1a", height: "200px" }}>
                    <MDBCardTitle>
                    <FontAwesomeIcon className="h1" icon="question-circle" />
                    </MDBCardTitle>
                    <MDBCardText tag="div" className="h5" style={{ height: "50px", color: "#cccccc" }}>
                        Need more help than what's provided here? Join our support server!
                        
                    </MDBCardText>
                    <a target="_blank" rel="noopener noreferrer" href="https://discord.gg/TqKHVUa">
                    <MDBBtn color="elegant" className="Button">
                    Join Support Server
                    </MDBBtn>
                    </a>
                    </MDBCardBody>
                </MDBCard>
                </Col>
                <Col style={{ marginBottom: "5%" }} lg={4} md={4} sm={12} xs={12}>
                <MDBCard className="text-center w-auto">
                    <MDBCardBody style={{ background: "#1a1a1a", height: "200px" }}>
                    <MDBCardTitle>
                    <FontAwesomeIcon className="h1" icon="question-circle" />
                    </MDBCardTitle>
                    <MDBCardText tag="div" className="h5" style={{ height: "50px", color: "#cccccc" }}>
                        Need more help than what's provided here? Join our support server!
                        
                    </MDBCardText>
                    <a target="_blank" rel="noopener noreferrer" href="https://discord.gg/TqKHVUa">
                    <MDBBtn color="elegant" className="Button">
                    Join Support Server
                    </MDBBtn>
                    </a>
                    </MDBCardBody>
                </MDBCard>
                </Col>
                <Col style={{ marginBottom: "5%" }} lg={4} md={4} sm={12} xs={12}>
                <MDBCard className="text-center w-auto">
                    <MDBCardBody style={{ background: "#1a1a1a", height: "200px" }}>
                    <MDBCardTitle>
                    <FontAwesomeIcon className="h1" icon="question-circle" />
                    </MDBCardTitle>
                    <MDBCardText tag="div" className="h5" style={{ height: "50px", color: "#cccccc" }}>
                        Need more help than what's provided here? Join our support server!
                        
                    </MDBCardText>
                    <a target="_blank" rel="noopener noreferrer" href="https://discord.gg/TqKHVUa">
                    <MDBBtn color="elegant" className="Button">
                    Join Support Server
                    </MDBBtn>
                    </a>
                    </MDBCardBody>
                </MDBCard>
                </Col>
            </Row>
            </Container>
            </div>
        );
    }
};

export default WhatWeOffer;