import React from 'react';
import { Button, Form, FormGroup, FormControl, Row, Col } from 'react-bootstrap';

class FormComponent extends React.Component {
    constructor(props) {
        super();
    }

    state = {
        fromDate: '',
        toDate: '',
        formValid: false
    };

    handleUserInput (e) {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({[name]: value}, this.validateForm);
    }

    validateForm() {
        if(this.state.fromDate && this.state.toDate){
             this.setState({formValid: true});
        }
    }

    render() {
        return (
            <Row className="show-grid">
                <h1>Get Sessions</h1>
                <Col xs={12} md={12}>
                <Form onSubmit={this.props.handleSubmit}>
                <FormGroup controlId="formInlineFromDate">
                    <label className="pull-left">From Date:</label>
                    <FormControl type="date" name="fromDate" value={this.state.fromDate} placeholder='dd/mm/yyyy' onChange={(event) => this.handleUserInput(event)}/>
                </FormGroup>
                <FormGroup controlId="formInlineToDate">
                    <label className="pull-left">To Date:</label>
                    <FormControl type="date" name="toDate" value={this.state.toDate} placeholder='dd/mm/yyyy' onChange={(event) => this.handleUserInput(event)}/>
                </FormGroup>
                <Button style={{marginBottom: 30}} name="btn" type="submit" bsStyle="success" bsSize="large" block disabled={!this.state.formValid}>Get Data</Button>
                </Form>
                </Col>
            </Row>
        );
    }
}

export default FormComponent;