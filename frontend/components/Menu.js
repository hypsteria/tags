import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import Icon from './Icon';
import MenuItem from './MenuItem';

const Menu = () => {

	return (
		<Navbar inverse>
			<Navbar.Header>
				<Navbar.Brand>
					<Icon icon="tags"/>TagzApp
				</Navbar.Brand>
				<Navbar.Toggle />
			</Navbar.Header>
			<Navbar.Collapse>
				<Nav pullRight>
					<MenuItem link="/"><Icon icon="home"/>Главная</MenuItem>
					<MenuItem link="/add"><Icon icon="question"/>FAQ</MenuItem>
					<MenuItem link="/info"><Icon icon="info"/>Информация</MenuItem>
					<MenuItem link="/add"><Icon icon="plus"/>Добавить одежду</MenuItem>
				</Nav>
			</Navbar.Collapse>
		</Navbar>
	);

};

export default Menu;