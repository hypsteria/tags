import React from 'react';
import Menu from './Menu';
import Content from './Content';
import { Row, Col } from 'react-bootstrap';
import AlertDismissable from './AlertDismissable';


const App = () => {

	return (
		<Row>
			<Col xs={12} md={12} >
				<Menu />
				<AlertDismissable message='some text' />
				<Content />
			</Col>
		</Row>
	);

};

export default App;