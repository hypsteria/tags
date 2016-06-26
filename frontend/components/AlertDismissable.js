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
				<Alert onDismiss={this.handleAlertDismiss}>
					<h4>Рекомендации к стирке</h4>
					<div className="text">{this.props.message}</div>
					<div>
						<Button onClick={this.handleAlertDismiss}>Сбросить фильтр</Button>
					</div>
				</Alert>
			);
		}

		return null;
	}
};

export default AlertDismissable;