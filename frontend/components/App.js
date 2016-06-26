import React from 'react';
import Menu from './Menu';
import Content from './Content';
import { Row, Col } from 'react-bootstrap';

const App = ({children}) => {
	return (
		<div>
			<Menu />
			<div className="container">
				<Content>{children}</Content>
			</div>
		</div>
	);
};

export default App;