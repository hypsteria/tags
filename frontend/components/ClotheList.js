import React from 'react'
import { uuid } from 'uuid-v4'
import { connect } from 'react-redux'
import { ClotheItem } from '../containers'

const ClotheList = () => {
	const { items, dispatch } = this.props;
	return <ul>{
		items.map(({img, name, selected, hide} = item, i) => {
			return <ClotheItem img={img} name={name} selected={selected} hide={hide} onClick={
				// TODO: Dispatch an action CLOTHE_CLICK
			} key={uuid()}/>;
		});
	}</ul>;
}

export default connect((state, ownProps) => {
	return {
		items: state.ClotheList.items
	};
})(ClotheList)