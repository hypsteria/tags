import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import Icon from './Icon';
import MenuItem from './MenuItem';

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
					<MenuItem link="/add"><Icon icon="question"/>FAQ</MenuItem>
					<MenuItem link="/add"><Icon icon="info"/>Tags Information</MenuItem>
					<MenuItem link="/add"><Icon icon="plus"/>Add Item</MenuItem>
				</Nav>
			</Navbar.Collapse>
		</Navbar>
	);

};

export default Menu;