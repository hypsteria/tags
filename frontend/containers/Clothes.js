import React from 'react'
import { Media } from 'react-bootstrap'
import { WashButton } from '../components' 

const ClotheItem = ({ img, name, selected, hide, onClick }) => {
	return (<li>
				<a href='#'>
					<Media>
						<Media.Left>
							<img width={64} height={64} src={img} alt="Image"></img>
						</Media.Left>
						<Media.Body>
							<p>{name}</p>
						</Media.Body>
					</Media>
				</a>
				<WashButton />
			</li>);
}

export default ClotheItem