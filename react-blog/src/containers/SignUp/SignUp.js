import React, { Component } from 'react';
import { Col, Card, Form, Button, Alert } from 'react-bootstrap';
import { connect } from 'react-redux';

import * as inputTypes from '../../util/inputTypes';
import FormGroup from '../../components/FormGroup/FormGroup';
import * as actions from '../../store/actions/index';

class SignUp extends Component {
    state = {
        formElements: {
            email: {
                type: inputTypes.EMAIL,
                label: 'Email',
                required: true,
                touched: false,
                valid: false,
                value: '',
                sanitize: (value) => value.trim().toLowerCase()
            },
            displayName: {
                type: inputTypes.TEXT,
                label: 'Display Name',
                required: true,
                touched: false,
                valid: false,
                value: '',
                sanitize: (value) => value.trim().toLowerCase()
            },
            password: {
                type: inputTypes.PASSWORD,
                label: 'Password',
                required: true,
                touched: false,
                valid: false,
                minLength: 6,
                value: ''
            } // end password
        }, // end formelements
        formIsValid: false
    }; // end state

    checkValiditiy = (input) => {
        const value = input.value;
        let isValid = true;
        if (input.required) {
            isValid = value.trim() !== '' && isValid;
        }
        if (input.minLength) {
            isValid = value.length >= input.minLength && isValid;
        }
        return isValid;
    };

    inputChangedHandler = (event, inputID) => {
        const updatedForm = {
            ...this.state.formElements
        };
        const updatedFormElement = {
            ...updatedForm[inputID]
        };
        if (updatedFormElement.sanitize) {
            updatedFormElement.value = updatedFormElement.sanitize(event.target.value);
        } else {
            updatedFormElement.value = event.target.value;
        }
        updatedFormElement.touched = true;
        updatedFormElement.valid = this.checkValiditiy(updatedFormElement);
        updatedForm[inputID] = updatedFormElement;

        let formIsValid = true;
        for (let key in updatedForm) {
            formIsValid = updatedForm[key].valid && formIsValid;
        }

        this.setState({ formElements: updatedForm, formIsValid: formIsValid });
    };

    onFormSubmit = (event) => {
        event.preventDefault();
        this.props.startSignup(
            this.state.formElements.email.value,
            this.state.formElements.displayName.value,
            this.state.formElements.password.value
        );
    };

    render() {
        const formElements = [];
        for (let key in this.state.formElements) {
            formElements.push({
                id: key,
                config: this.state.formElements[key]
            });
        }
        const inputElements = formElements
            .map(formElement => {
                return (
                    <FormGroup
                        key={formElement.id}
                        type={formElement.config.type}
                        label={formElement.config.label}
                        value={formElement.config.value}
                        changed={(event) => { this.inputChangedHandler(event, formElement.id) }}
                        valid={formElement.config.valid}
                        touched={formElement.config.touched} />
                );
            });
        let warning = null;
        if (this.props.signingUp) {
            warning = (
                <Alert variant="warning">
                    Signing Up...
                </Alert>
            );
        }
        let error = null;
        if (this.props.error) {
            error = (
                <Alert variant="danger">
                    Error signing up, please try again.
                </Alert>
            );
        }
        return (
            <Col xs={12} md={{ span: 6, offset: 3 }}>
                <h2 className="text-center">Sign Up</h2>
                <Card>
                    <Card.Body>
                        <Form onSubmit={this.onFormSubmit}>
                            {inputElements}
                            <Button
                                type="submit"
                                variant="primary"
                                disabled={!this.state.formIsValid}>Sign Up</Button>
                        </Form>
                        {warning}
                        {error}
                    </Card.Body>
                </Card>
            </Col>
        );
    }
}

const mapStateToProps = state => {
    return {
        signingUp: state.auth.signingUp,
        error: state.auth.error
    };
};

const mapDispatchToProps = dispatch => {
    return {
        startSignup: (email, username, password) => dispatch(actions.signup(email, username, password))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
