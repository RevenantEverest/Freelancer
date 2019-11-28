import React, { Component } from 'react';
import './HomePage.css';

import { Container, Row, Col } from 'react-bootstrap';
import { MDBJumbotron, MDBCardTitle, MDBBtn } from 'mdbreact';

import WhatWeOffer from '../WhatWeOffer/WhatWeOffer';

class HomePage extends Component {

    render() {
        return(
            <div id="HomePage">
                <Container fluid>
                <Row>
                    <Col style={{ paddingRight: 0, paddingLeft: 0 }}>
                    <MDBJumbotron style={{ padding: 0, background: "inherit" }} fluid>
                        <Col 
                        className="text-white text-center py-5 px-4" 
                        style={{ 
                            background: "url(https://i.imgur.com/XmiQzCg.jpg)", 
                            backgroundSize: "cover", 
                            backgroundAttachment: "fixed",  
                            position: "relative",
                            top: "0",
                            marginBottom: "0" }}
                        >
                            <Col className="py-5">
                                <MDBCardTitle className="h1-responsive pt-3 m-5 font-bold">Create your beautiful website with MDBootstrap</MDBCardTitle>
                                <p className="mx-5 mb-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat fugiat, laboriosam, voluptatem,
                                optio vero odio nam sit officia accusamus minus error nisi architecto nulla ipsum dignissimos. Odit sed qui, dolorum!
                                </p>
                                <MDBBtn outline color="white" className="mb-5">Get Started</MDBBtn>
                            </Col>
                        </Col>
                    </MDBJumbotron>
                    </Col>
                </Row>
                <Row style={{ marginBottom: "5%" }}>
                    <Col>
                        <WhatWeOffer />
                    </Col>
                </Row>
                </Container>
            </div>
        );
    }
};

export default HomePage;