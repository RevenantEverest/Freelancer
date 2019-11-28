import React, { Component } from 'react';
import './Footer.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Container, Row, Col } from 'react-bootstrap';
import { MDBFooter } from 'mdbreact';

class Footer extends Component {

    render() {
        return(
            <div id="Footer">
                <MDBFooter color="elegant-color-dark" className="font-small pt-4 mt-4">
                <Container className="text-center text-md-left">
                <Row>
                        <Col lg={5} md={5} sm={4} xs={12} style={{ marginBottom: "5%" }}>
                            <h5 className="title">Freelancer</h5>
                            <Row>
                            <Col>
                                <FontAwesomeIcon className="Footer_Icon" icon={['fab', 'facebook-f']} />
                                <FontAwesomeIcon className="Footer_Icon" icon={['fab', 'instagram']} />
                                <FontAwesomeIcon className="Footer_Icon" icon={['fab', 'twitter']} />
                            </Col>
                            </Row>
                        </Col>
                        <Col lg={3} md={3} sm={4} xs={12} style={{ marginBottom: "5%" }}>
                            <h5 className="title">Links</h5>
                            <ul>
                            <li className="list-unstyled">
                                <a href="#!">Link 1</a>
                            </li>
                            <li className="list-unstyled">
                                <a href="#!">Link 2</a>
                            </li>
                            <li className="list-unstyled">
                                <a href="#!">Link 3</a>
                            </li>
                            <li className="list-unstyled">
                                <a href="#!">Link 4</a>
                            </li>
                            </ul>
                        </Col>
                        <Col lg={3} md={3} sm={4} xs={12} style={{ marginBottom: "5%" }}>
                            <h5 className="title">Links</h5>
                            <ul>
                            <li className="list-unstyled">
                                <a href="#!">Link 1</a>
                            </li>
                            <li className="list-unstyled">
                                <a href="#!">Link 2</a>
                            </li>
                            <li className="list-unstyled">
                                <a href="#!">Link 3</a>
                            </li>
                            <li className="list-unstyled">
                                <a href="#!">Link 4</a>
                            </li>
                            </ul>
                        </Col>
                </Row>
                </Container>
                <div className="footer-copyright text-center py-3">
                    <Container fluid>
                    <Row className="justify-content-md-center">
                        <Col lg={12} md={12} sm={12} xs={12}>
                        <p style={{ display: "inline" }}>&copy; {new Date().getFullYear()} Copyright: </p>
                        <a style={{ display: "inline" }} href="https://freelancer.com"> Freelancer.com </a>
                        </Col>
                    </Row>
                    </Container>
                </div>
                </MDBFooter>
            </div>
        );
    }
};

export default Footer;