import React from 'react';
import { Row, Col } from 'react-bootstrap';

const ErrorComponent = () => (
    <Row className="show-grid">
			<Col xs={6} md={12}>
				 <h2 className="error">Sorry, Can't get data for those dates :(</h2>
			</Col>
		</Row>
);

export default ErrorComponent;