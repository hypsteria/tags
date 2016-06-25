import React from 'react'
import { Media } from 'react-bootstrap'

const ClotheItem = ({ img, name, selected, hide, onClick }) => {
	return (<li>
				<label>
					<Media>
						<Media.Left>
							<img width={64} height={64} src={img} alt="Image"></img>
						</Media.Left>
						<Media.Body>
							<p>{name}</p>
						</Media.Body>
					</Media>
				</label>
			</li>);
}

export default ClotheItem