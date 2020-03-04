import React from 'react';
import {Navbar} from 'react-bootstrap';
//import {Navbar.Brand} from 'react-bootstrap/Navbar.Brand'
import './Footer.css';

class Footer extends React.Component{
    render() {
        return (
            <Navbar bg="dark">
                <Navbar.Brand href="/">
                    <img
                        src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Rick_and_Morty.svg"
                        width="100"
                        height="30"
                        className="d-inline-block align-bottom"
                        alt="Rick and Morty logo"
                    />
                </Navbar.Brand>
            </Navbar>
        )
    }
}

export default Footer;