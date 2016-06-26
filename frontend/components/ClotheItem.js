import React from 'react'
import { Media } from 'react-bootstrap'
import { Link } from 'react-router' 

import WashButton from './WashButton'

const ClotheItem = ({ id, img, name, selected, hide, buttonAdd, buttonRemove }) => {
	let url = '/detail/' + id;
	return (<li className={hide?'hide':''}>
				<Link to={url}>
					<Media>
						<Media.Left>
							<img width={50} height={50} src={img} alt="Image"></img>
						</Media.Left>
						<Media.Body>
							<p>{name}</p>
						</Media.Body>
					</Media>
				</Link>
				<WashButton buttonAdd={buttonAdd} buttonRemove={buttonRemove} selected={selected}/>
			</li>);
}

export default ClotheItem