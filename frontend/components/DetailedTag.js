import React from 'react';

const styleImg = {
	'marginRight': '10px',
};

const styleTag = {
	'marginBottom': '10px',
};

const DetailedTag = (props) => {
	return (
		<div style={styleTag}>
			<img src={props.img} style={styleImg} />
			{props.description}
		</div>
	);
};

export default DetailedTag;