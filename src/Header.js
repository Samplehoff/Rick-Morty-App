import React from 'react';
//import {NavLink} from 'react-router-dom';
import {Navbar, Nav, Form, FormControl, Button} from 'react-bootstrap'
import './Header.css'

class Header extends React.Component {
    render() {
        return (
            <div>

                
              <Navbar bg="dark" variant="dark" className="font-style">
                <Navbar.Brand href="/">Earth C-137</Navbar.Brand>
                  <Nav className="mr-auto">
                    <Nav.Link href="/characters">Multiverse</Nav.Link>
                    <Nav.Link href="/episodes">Adventures</Nav.Link>
                    <Nav.Link href="/locations">Episodes</Nav.Link>
                  </Nav>
                  <Form inline>
                      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                      <Button variant="outline-info">Search</Button>
                    </Form>
                </Navbar>
            </div>

        );
    }
}


export default Header 