import React from 'react';
import { Button, Alert } from 'react-bootstrap';
import { connect } from 'react-redux';

import { dismissAlert } from '../actions';
import { LaundryTags } from '../other';

export class AlertDismissable extends React.Component {
	constructor (props) {
		super(props);
		this.handleAlertDismiss = this.handleAlertDismiss.bind(this);
	}

	handleAlertDismiss() {
		const { dispatch } = this.props;
		dispatch(dismissAlert());
	}

	render () {
		const {alertVisible, message} = this.props;
		if (alertVisible) {
			return (
				<Alert onDismiss={this.handleAlertDismiss}>
					<h4>Рекомендации к стирке</h4>
					<div className="text">
						{message.map((item)=>{
							return <p>{item}</p>;
						})}
					</div>
					<div>
						<Button onClick={this.handleAlertDismiss}>Сбросить фильтр</Button>
					</div>
				</Alert>
			);
		}

		return null;
	}
};

const mapStateToProps = (state, ownProps) => {
	let alertVisible = false;
	let tags = {};
	for(let item of state.ClotheList.items) {
		if( item.selected ) {
			alertVisible = true;
			if(item.tags)
				for(let tag of item.tags)
					tags[tag] = true;
		}
	}

	let instructions = [];
	for(let tag in tags) {
		for( let ltag of LaundryTags ) {
			if( ltag.name == tag )
				instructions.push(ltag);
		}
	}

	let message = [];
	for(let instruction of instructions) {
		message.push(instruction.description);
	}

	return {
		alertVisible,
		message
	};
};

export default connect(mapStateToProps)(AlertDismissable);
