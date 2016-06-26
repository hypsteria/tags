import React from 'react';
import { Radio } from 'react-bootstrap';

const styleImg = {
	'margin' : '0 5px'
}

const RadioItem = ({name, id, children}) => {

	var src = '/assets/icons/' + id + '.svg';

	return (
		<Radio inline name={name} id={id} >
			<span>
				<img src={src} style={styleImg} />
				{children}
			</span>
		</Radio>
	);
};

export default RadioItem;