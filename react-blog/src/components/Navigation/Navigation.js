import React from 'react';
import { Navbar } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

const navigation = (props) => (
    <Navbar bg="light">
        <LinkContainer to="/">
            <Navbar.Brand>My Blog</Navbar.Brand>
        </LinkContainer>
    </Navbar>
);

export default navigation;