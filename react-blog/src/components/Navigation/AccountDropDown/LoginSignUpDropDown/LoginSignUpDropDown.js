import React from 'react';
import { NavDropdown } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

const loginSignUpDropDown = (props) => (
    <NavDropdown title="Not Signed In" id="basic-nav-dropdown" alignRight>
        <LinkContainer to="/signup">
            <NavDropdown.Item>Sign Up</NavDropdown.Item>
        </LinkContainer>
    </NavDropdown>
);

export default loginSignUpDropDown;
