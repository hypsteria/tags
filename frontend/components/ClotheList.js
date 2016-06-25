import React from 'react'
import { ClotheItem } from '../containers'

const ClotheList = () => {
	const { items } = this.props;
	return <ul>{
		items.map(({img, name, selected, hide} = item, i) => {
			return <ClotheItem img={img} name={name} selected={selected} hide={hide} key={i}/>;
		});
	}</ul>;
}

// TODO: reducers!

export default ClotheList