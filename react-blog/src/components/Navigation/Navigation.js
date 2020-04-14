import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

import AccountDropDown from './AccountDropDown/AccountDropDown';

const navigation = (props) => (
    <Navbar bg="light" expand="md">
        <LinkContainer to="/">
            <Navbar.Brand>My Blog</Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle />
        <Navbar.Collapse>
            <Nav className="ml-auto">
                <AccountDropDown/>
            </Nav>
        </Navbar.Collapse>
    </Navbar>
);

export default navigation;