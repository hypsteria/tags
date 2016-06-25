import React from 'react';

const style = {
	'marginRight': '10px',
};

const Icon = (props) => {

	let classes = 'fa fa-' + props.icon; 

	return (
		<i className={classes} style={style} ></i>
	);
};

export default Icon;