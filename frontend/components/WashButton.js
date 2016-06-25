import React from 'react';

const WashButton = ({onClick}) => (
	<div className="button-cell">
		<button className="wash-button" onClick={onClick}>
			<img src="/assets/icons/washing-machine.svg" width={32} height={32} />
			<span>В стирку!</span>
		</button>
	</div>
);

export default WashButton;
