import React, { Component } from "react";
import { Nav, Navbar, NavbarBrand, NavbarToggler, Collapse, NavItem, Jumbotron } from 'reactstrap';
import { NavLink } from 'react-router-dom';



class Header extends Component {

constructor(props){
  super(props);
  this.state={
    isNavOpen:false
  };
  this.toggleNav=this.toggleNav.bind(this);
}

toggleNav(){
    this.setState({
        isNavOpen: !this.state.isNavOpen
  
    });
  }
  render() {
    return (
      <React.Fragment>
      <Navbar dark expand="md">
      <div className="container">
          <NavbarToggler onClick={this.toggleNav} className="m-3" />
          <NavbarBrand className="mr-auto" href="/"></NavbarBrand>
          <Collapse isOpen={this.state.isNavOpen} navbar>
              <Nav className="ml-5" navbar>
              <NavItem>
                  <NavLink className="nav-link"  to='/home'><span>HOME</span> Home</NavLink>
              </NavItem>
              <NavItem>
                  <NavLink className="nav-link" to='/aboutus'><span>PLAY</span> About Us</NavLink>
              </NavItem>
              <NavItem>
                  <NavLink className="nav-link"  to='/menu'><span>PRICING</span> Menu</NavLink>
              </NavItem>
              <NavItem>
                  <NavLink className="nav-link" to='/contactus'><span>PING TEST</span></NavLink>
              </NavItem>
              </Nav>
          </Collapse>
      </div>
  </Navbar>
       
      </React.Fragment>
    );
  }
}
export default Header;