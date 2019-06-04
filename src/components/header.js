import React from "react";
import { Link } from "gatsby"
import headerStyles from './header.module.scss';
import {Navbar,Nav} from "react-bootstrap";


const Header = () => {
    return <React.Fragment>
            <Navbar expand="lg" className={headerStyles.menu}>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                  <Link to="/">Home</Link>
                  <Link to="/about">About</Link>
                  <Link to="/contacts/">Contacts</Link>
                </Nav>
              </Navbar.Collapse>
            </Navbar>
            <div className={headerStyles.brandContainer}>
              Nav Technology
            </div>
          </React.Fragment>
          
    
}
export default Header;