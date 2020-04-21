import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Form } from 'react-bootstrap';

import * as inputTypes from '../../util/inputTypes';

class FormGroup extends Component {
    render() {
        let inputElement = null;
        switch (this.props.type) {
            default:
            case inputTypes.TEXT:
                inputElement = (
                    <Form.Control
                        type="text"
                        placeholder={this.props.placeholder ? this.props.placeholder : this.props.label}
                        value={this.props.value}
                        onChange={this.props.changed}
                        isInvalid={!this.props.valid && this.props.touched}
                        isValid={this.props.valid} />
                );
                break;
            case inputTypes.PASSWORD:
                inputElement = (
                    <Form.Control
                        type="password"
                        placeholder={this.props.placeholder ? this.props.placeholder : this.props.label}
                        value={this.props.value}
                        onChange={this.props.changed}
                        isInvalid={!this.props.valid && this.props.touched}
                        isValid={this.props.valid} />
                );
                break;
            case inputTypes.EMAIL:
                inputElement = (
                    <Form.Control
                        type="email"
                        placeholder={this.props.placeholder ? this.props.placeholder : this.props.label}
                        value={this.props.value}
                        onChange={this.props.changed}
                        isInvalid={!this.props.valid && this.props.touched}
                        isValid={this.props.valid} />
                );
                break;
            case inputTypes.TEXTAREA:
                inputElement = (
                    <Form.Control
                        as="textarea"
                        placeholder={this.props.placeholder ? this.props.placeholder : this.props.label}
                        value={this.props.value}
                        onChange={this.props.changed}
                        isInvalid={!this.props.valid && this.props.touched}
                        isValid={this.props.valid}
                        rows={5} />
                );
                break;
        }
        return (
            <Form.Group>
                <Form.Label>{this.props.label}</Form.Label>
                {inputElement}
            </Form.Group>
        );
    }
}

FormGroup.propTypes = {
    type: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    value: PropTypes.any.isRequired,
    changed: PropTypes.func.isRequired,
    valid: PropTypes.bool.isRequired,
    touched: PropTypes.bool.isRequired,
    placeholder: PropTypes.string
};

export default FormGroup;