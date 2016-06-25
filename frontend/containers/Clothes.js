import React from 'react'

const ClotheItem = () => {
	const { img, name, selected, hide, onClick } = this.props;

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