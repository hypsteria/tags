import React from 'react';
import { Button, Alert } from 'react-bootstrap';

export class AlertDismissable extends React.Component {
	constructor (props) {
		super(props);
		this.state = {alertVisible: true};
		this.handleAlertDismiss = this.handleAlertDismiss.bind(this);
		this.handleAlertShow = this.handleAlertShow.bind(this);
	}

	handleAlertDismiss() {
		this.setState({alertVisible: false});
	}

	handleAlertShow() {
		this.setState({alertVisible: true});
	}

	render () {

		if (this.state.alertVisible) {
			return (
				<Alert bsStyle="info" onDismiss={this.handleAlertDismiss}>
					<h4>Oh snap! You got an error!</h4>
					<p>{this.props.message}</p>
					<p>
						<Button bsStyle="danger">Take this action</Button>
						<span> or </span>
						<Button onClick={this.handleAlertDismiss}>Hide Alert</Button>
					</p>
				</Alert>
			);
		}

		return (
			<div></div>
		);
	}
};

export default AlertDismissable;