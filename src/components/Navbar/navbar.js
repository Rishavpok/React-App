import React, { Component } from 'react';
import { Navbar , Nav , NavDropdown ,NavLink } from 'react-bootstrap';
import { Button  } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './navbar.css';
const NavBar = () => {
    return ( 
<React.Fragment>
  <Navbar bg="light" expand="lg">
    <main className="container" >
  <Link  to="/" >
  <img   width="150"  src="logo.png" />
  </Link>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      
      <NavLink className="nav-link" href="/doctor" >
      <h6 className="nav-head" >Doctors</h6>
         <p className="nav-text" >Book an appointment</p>
      </NavLink>
      <Nav.Link to="/" >
      <h6 className="nav-head" > Consult </h6>
         <p className="nav-text" >Consult with doctors</p>
      </Nav.Link>
      <NavLink to="/pharmacy" >
      <h6 className="nav-head" >Pharmacy</h6>
        <p className="nav-text" >Medicine and health Products</p>
      </NavLink>
      <NavLink  to="/" >
      <h6 className="nav-head" >Daignostic</h6>
        <p className="nav-text" >Book,test and checkup</p>
      </NavLink>

      
    </Nav>
      
     <Nav className="justify-content-end" >
      <div className="dropdown-first" >
      <NavDropdown title="For Provider"  id="basic-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Pactro Prime</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Software for providers</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">List your Practice for free</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.4">Cooprate Wellness</NavDropdown.Item>
      </NavDropdown>
      </div>
       
     <div className="dropdown-second">
     <NavDropdown title="Security & help" id="basic-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Data Security</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Help</NavDropdown.Item>
      </NavDropdown>
     </div>
   
        <div className="buttons" >
        <Button  size="sm">
            <Link className="btn1"  to="/" > 
            Login/Signup
             </Link>
             

        </Button>
        </div>


     </Nav>

  </Navbar.Collapse>
  </main>
</Navbar>



        </React.Fragment>
     );
}
 
export default NavBar;
