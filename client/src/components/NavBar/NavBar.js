import React, { Component } from 'react';
import './NavBar.css';

import { withRouter } from 'react-router-dom';
import { 
    MDBNavbar, 
    MDBNavbarNav,
    MDBNavbarBrand, 
    MDBNavItem,
    MDBNavLink,
    MDBNavbarToggler, 
    MDBCollapse, 
    MDBContainer,
    MDBBtn,
    MDBModal,
    MDBModalHeader,
    MDBModalBody
} from 'mdbreact';

import Login from '../Login/Login';
import SignUp from '../SignUp/SignUp';

class NavBar extends Component {

    constructor() {
        super();
        this.state = {
            isOpen: false,
            modal1: false,
            modal2: false
        }
        this.togglePostCollapse = this.togglePostCollapse.bind(this);
    }
    
    toggleCollapse = () => this.setState({ isOpen: !this.state.isOpen });
    togglePostCollapse() {
        if(this.state.isOpen) this.setState({ isOpen: false });
    }

    renderHome = () => this.props.pathname === "/" ? <MDBNavLink to="#">Home</MDBNavLink> : <MDBNavLink link="link" to="/">Home</MDBNavLink>;
    renderGettingStarted = () => this.props.pathname === "/" ? <MDBNavLink link="link" to="/gettingstarted">Getting Started</MDBNavLink> : <MDBNavLink to="#">Getting Started</MDBNavLink>;
    renderFeatures = () => this.props.pathname === "/" ?  <MDBNavLink link="link" to="/features">Features</MDBNavLink> : <MDBNavLink to="#">Features</MDBNavLink>;
    renderPremium = () => this.props.pathname === "/" ?  <MDBNavLink link="link" to="/premium">Premium</MDBNavLink>: <MDBNavLink to="#">Premium</MDBNavLink>;

    toggle = nr => () => {
        let modalNumber = 'modal' + nr;
        this.setState({[modalNumber]: !this.state[modalNumber]});
    }

    findModal = (index) => this.state[("modal" + index)];

    render() {
        return(
            <div id="NavBar">
            <MDBNavbar color="elegant-color-dark" dark expand="md">
                <MDBContainer>
                    <MDBNavbarBrand>
                    <strong className="white-text">Freelancer</strong>
                    </MDBNavbarBrand>
                    <MDBNavbarToggler onClick={this.toggleCollapse} />
                    <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} onClick={this.togglePostCollapse} navbar>
                    <MDBNavbarNav left>
                        <MDBNavItem>
                        {this.renderHome()}
                        </MDBNavItem>
                        <MDBNavItem>
                        {this.renderGettingStarted()}
                        </MDBNavItem>
                        <MDBNavItem>
                        {this.renderFeatures()}
                        </MDBNavItem>
                        <MDBNavItem>
                        {this.renderPremium()}
                        </MDBNavItem>
                    </MDBNavbarNav>
                    <MDBNavbarNav right>
                        <MDBNavItem>
                            <MDBBtn color="elegant" size="sm" onClick={this.toggle(1)}>Login</MDBBtn>
                        </MDBNavItem>
                        <MDBNavItem>
                            <MDBBtn color="white" size="sm" outline onClick={this.toggle(2)}>Sign Up</MDBBtn>
                        </MDBNavItem>
                    </MDBNavbarNav>
                    </MDBCollapse>
                </MDBContainer>
            </MDBNavbar>

            <MDBModal isOpen={this.findModal(1)} toggle={this.toggle(1)} centered>
                <MDBModalHeader toggle={this.toggle(1)} className="Modal" />
                <MDBModalBody className="Modal">
                    <Login />
                </MDBModalBody>
            </MDBModal>


            <MDBModal isOpen={this.findModal(2)} toggle={this.toggle(2)} centered>
                <MDBModalHeader toggle={this.toggle(2)} className="Modal" />
                <MDBModalBody className="Modal">
                    <SignUp />
                </MDBModalBody>
            </MDBModal>
            </div>
        );
    }
};

export default withRouter(NavBar);