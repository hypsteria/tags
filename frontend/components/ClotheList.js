import React from 'react'
import uuid from 'uuid-v4'
import { connect } from 'react-redux'
import { ClotheItem } from '../containers'

const ClotheList = ({items, dispatch}) => {
	return <ul className="clotheList">{
		items.map(({id, img, name, selected, hide} = item, i) => {
			return <ClotheItem id={id} img={img} name={name} selected={selected} hide={hide} key={uuid()}/>;
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
				hide: false,
				id: '1111212423432'
			},
			{
				img: '/assets/img/tshirt.jpg',
				name: 'Dats my t-shirt too!11',
				selected: false,
				hide: false,
				id: '235134543'
			},
			{
				img: '/assets/img/tshirt.jpg',
				name: 'My uncle t-shirt',
				selected: false,
				hide: false,
				id: '325324r'
			}
		]
	};
};

export default connect(mapStateToProps)(ClotheList)