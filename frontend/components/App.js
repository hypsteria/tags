import React from 'react';
import Menu from './Menu';
import Content from './Content';
import { Row, Col } from 'react-bootstrap';
import AlertDismissable from './AlertDismissable';

const App = ({children}) => {
	return (
		<Row>
			<Col xs={12} md={12} >
				<Menu />
				<div className="container">
					<AlertDismissable message='some text' />
					<Content>{children}</Content>
				</div>
			</Col>
		</Row>
	);
};

export default App;