import React from 'react';
import Icon from './Icon'

const WashButton = ({onClick, selected}) => {
	if(selected)
		return (
			<div className="button-cell">
				<button className="wash-button" onClick={onClick}>
					<Icon icon="check" />
				</button>
			</div>
		);
	else
	return (
		<div className="button-cell">
			<button className="wash-button" onClick={onClick}>
				<img src="/assets/icons/washing-machine.svg" width={32} height={32} />
				<span>В стирку!</span>
			</button>
		</div>
	);
};

export default WashButton;
