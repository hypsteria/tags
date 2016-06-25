import React from 'react'
import { Media } from 'react-bootstrap'
import { WashButton } from '../components'
import { Link } from 'react-router' 

const ClotheItem = ({ id, img, name, selected, hide, onClick }) => {
	let url = '/' + id;
	return (<li>
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
				<WashButton />
			</li>);
}

export default ClotheItem