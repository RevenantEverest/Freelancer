import React, { Component } from 'react';
import './Login.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Container, Row, Col, Form } from 'react-bootstrap';
import { MDBBtn } from 'mdbreact';

class Login extends Component {

    constructor() {
        super();
        this.state = {
            validated: false,
            formComplete: false
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange = (e) => this.setState({ [e.target.name]: e.target.value });

    handleSubmit(e) {
        e.preventDefault();
    }

    renderFormComplete() {
        return(
            <Row style={{ marginBottom: "5%" }}>
                <Col style={{ paddingLeft: "0" }}>
                <MDBBtn color="green" style={{ width: "100%", fontWeight: "600", fontSize: "12px" }}>Thank you for your message!</MDBBtn>
                </Col>
            </Row>
        );
    }

    renderSubmitButton() {
        return(
            <MDBBtn color="elegant" style={{ width: "100%", marginLeft: "0" }} className="Button" type="submit" value="submit">
            Login
            </MDBBtn>
        );
    }

    render() {
        const { validated } = this.state;
        return(
            <div id="Login">
            <Container>
                <Row style={{ marginBottom: "5%" }} className="text-center">
                <Col>
                    <h1 className="h2">Login</h1>
                </Col>
                </Row>
                <Row style={{ marginBottom: "5%" }} className="justify-content-md-center">
                <Col lg={12} md={8} >
                    <Container>
                    <Row>
                        <Col>
                        <Form
                        noValidate
                        validated={validated}
                        onSubmit={this.handleSubmit}
                        style={{ 
                            color: '#cccccc', 
                            display: 'block', 
                            marginLeft: 'auto', 
                            marginRight: 'auto'
                        }}
                        id="Contact-Form"
                        >
                            <Form.Group controlId="exampleForm.ControlInput1" style={{ marginBottom: "5%" }}>
                                <Form.Label style={{ width: '100%' }}>
                                    Email Address
                                </Form.Label>
                                <Form.Control
                                    required
                                    type="email" 
                                    placeholder="name@example.com" 
                                    name="email" 
                                    onChange={this.handleChange} 
                                    className="Login-Input"
                                />
                            </Form.Group>
                            <Form.Group controlId="exampleForm.ControlInput1">
                                <Form.Label style={{ width: '100%' }}>
                                    Password
                                </Form.Label>
                                <Form.Control
                                    required
                                    type="password" 
                                    placeholder="******" 
                                    name="password" 
                                    onChange={this.handleChange} 
                                    className="Login-Input"
                                />
                            </Form.Group>
                            <Form.Group >
                                {this.state.formComplete ? this.renderFormComplete() : this.renderSubmitButton()}
                            </Form.Group>
                        </Form>
                        </Col>
                    </Row>
                    </Container>
                </Col>
                </Row>
            </Container>
            </div>
        );
    }
};

export default Login;