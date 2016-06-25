import React from 'react'
import uuid from 'uuid-v4'
import { connect } from 'react-redux'
import { ClotheItem } from '../containers'

const ClotheList = ({items, dispatch}) => {
	return <ul className="clotheList">{
		items.map(({img, name, selected, hide} = item, i) => {
			return <ClotheItem img={img} name={name} selected={selected} hide={hide} key={uuid()}/>;
		})
	}</ul>;
};

const mapStateToProps = (state, ownProps) => {
	return {
		//items: state.ClotheList.items
		items: [
			{
				img: '/assets/img/tshirt.jpg',
				name: 'Dats my t-shirt',
				selected: false,
				hide: false
			},
			{
				img: '/assets/img/tshirt.jpg',
				name: 'Dats my t-shirt too!11',
				selected: false,
				hide: false
			},
			{
				img: '/assets/img/tshirt.jpg',
				name: 'My uncle t-shirt',
				selected: false,
				hide: false
			}
		]
	};
};

export default connect(mapStateToProps)(ClotheList)