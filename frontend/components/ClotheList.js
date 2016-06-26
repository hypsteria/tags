import React from 'react'
import uuid from 'uuid-v4'
import { connect } from 'react-redux'
import { addToLaundry, removeFromLaundry } from '../actions'
import ClotheItem from './ClotheItem'

const ClotheList = ({items, dispatch}) => {
	return <ul className="clotheList">{
		items.map(({id, img, name, selected, hide} = item, i) => {
			return <ClotheItem buttonAdd={ () => (dispatch(addToLaundry(id))) }
							   buttonRemove={ () => (dispatch(removeFromLaundry(id))) }
							   id={id}
							   img={img}
							   name={name}
							   selected={selected}
							   hide={hide}
							   key={uuid()}/>;
		})
	}</ul>;
};

const mapStateToProps = (state, ownProps) => {
	return {
		items: state.ClotheList.items
	};
};

export default connect(mapStateToProps)(ClotheList)