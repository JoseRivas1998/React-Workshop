import React, { Component } from 'react';
import { Col } from 'react-bootstrap';

class SignUp extends Component {
    render() {
        return (
            <Col xs={12} md={{span: 6, offset: 3}}>
                <h2 className="text-center">Sign Up</h2>
            </Col>
        );
    }
}

export default SignUp;
