import React from 'react';
import Menu from './Menu';
import Content from './Content';
import { Row, Col } from 'react-bootstrap';


const App = () => {

	return (
		<Row>
			<Col xs={12} md={12} >
				<Menu />
				<Content />
			</Col>
		</Row>
	);

};

export default App;