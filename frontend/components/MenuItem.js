import React from 'react';
import { Link } from 'react-router';

const MenuItem = (props) => (
	<li><Link to={props.link}>{props.children}</Link></li>
);

export default MenuItem;