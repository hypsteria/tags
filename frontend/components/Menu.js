import React from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import Icon from './Icon';

const Menu = () => {

	return (
		<Navbar inverse>
			<Navbar.Header>
				<Navbar.Brand>
					<a href="#"><Icon icon="tags"/>TagzApp</a>
				</Navbar.Brand>
				<Navbar.Toggle />
			</Navbar.Header>
			<Navbar.Collapse>
				<Nav pullRight>
					<NavItem eventKey={3} href="#"><Icon icon="question"/>FAQ</NavItem>
					<NavItem eventKey={2} href="#"><Icon icon="info"/>Tags Information</NavItem>
					<NavItem eventKey={1} href="#"><Icon icon="plus"/>Add Item</NavItem>
				</Nav>
			</Navbar.Collapse>
		</Navbar>
	);

};

export default Menu;