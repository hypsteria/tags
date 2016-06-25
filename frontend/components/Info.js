import React from 'react';
import { Table } from 'react-bootstrap';
import { LaundryTags } from '../other';
import uuid from 'uuid-v4'

const Info = () => (
	<div>
		<Table striped bordered condensed hover>
			<thead>
				<tr>
					<th>1</th>
					<th>Описание</th>
				</tr>
			</thead>
			<tbody>
				{
					LaundryTags.map(({img, description} = item, i) => {
						return (
							<tr key={ uuid() }>
								<td><img src={ img } /></td>
								<td>{ description }</td>
							</tr>
						);
					})
				}
			</tbody>
		</Table>
	</div>
);

export default Info;