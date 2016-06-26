import React from 'react';
import Menu from './Menu';
import Content from './Content';
import { Row, Col } from 'react-bootstrap';
import AlertDismissable from './AlertDismissable';

const App = ({children}) => {
	return (
		<div>
			<Menu />
			<div className="container">
				<AlertDismissable />
				<Content>{children}</Content>
			</div>
		</div>
	);
};

export default App;