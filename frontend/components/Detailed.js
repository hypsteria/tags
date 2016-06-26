import React from 'react';
import uuid from 'uuid-v4';
import { getOne } from '../actions';
import { connect } from 'react-redux';
import { Row, Col, Image } from 'react-bootstrap';
import DetailedTag from './DetailedTag';
import _ from 'lodash';

class Detailed extends React.Component {

	constructor({ props, items, tags, params }) {
		super(props);
		this.state = { 
			item: _.find(items, {'id' : params.id}),
			tags: tags
		};		
	};

	render() {
		let item = this.state.item;

		console.log(item);

		let tags = item.tags.map((item, i) => {
			let tag = _.find(this.state.tags, {name: item});
			return <DetailedTag key={uuid()} {...tag} />;
		});

		return(
			<div>
				<h2>{item.name}</h2>
				<Row>
					<Col xs={12} sm={4} >
						<Image src={item.img} responsive />
					</Col>
					<Col xs={12} sm={8} >
						<h4>Добавленные метки</h4>
						{tags}
					</Col>
				</Row>
			</div>
		);
	};

};


const mapStateToProps = (state, ownProps) => {
	return {
		items: state.ClotheList.items,
		tags: state.ClotheList.tags
	};
};

export default connect(mapStateToProps)(Detailed);
// export default Detailed;
