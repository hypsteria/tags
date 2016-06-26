import React from 'react';
import { FormControl, ControlLabel, FormGroup, HelpBlock, Button } from 'react-bootstrap';
import RadioItem from './RadioItem';

const AddForm = ({}) => {
	return (
		<div>
			<h2>Добавить одежду</h2>
			<form
				onSubmit={e => {
					e.preventDefault();
				}}
			>
				<FormGroup controlId="formControlsText">
					<ControlLabel>Наименование</ControlLabel>
					<FormControl type="text" placeholder="" />
				</FormGroup>
				<FormGroup controlId="formControlsFile">
					<ControlLabel>Фотография</ControlLabel>
					<FormControl type="file" />
					<HelpBlock>Фыйлы не более 1Мб</HelpBlock>
				</FormGroup>
				<FormGroup className="lined">
					<ControlLabel>Стирка</ControlLabel>
					<RadioItem 
						name='wash'
						id='wh-washing'>
							Можно стирать
					</RadioItem>
					{' '}
					<RadioItem 
						name='wash'
						id='wh-washing-hand'>
							Ручная стирка
					</RadioItem>
					{' '}
					<RadioItem 
						name='wash'
						id='wh-washing-not-allowed'>
							Стирка запрещена
					</RadioItem>
				</FormGroup>
				<FormGroup className="lined">
					<ControlLabel>Температурный режим</ControlLabel>
					<RadioItem 
						name='wash-temp'
						id='wh-washing-30deg'>
					</RadioItem>
					{' '}
					<RadioItem 
						name='wash-temp'
						id='wh-washing-40deg'>
					</RadioItem>
					{' '}
					<RadioItem 
						name='wash-temp'
						id='wh-washing-50deg'>
					</RadioItem>
					{' '}
					<RadioItem 
						name='wash-temp'
						id='wh-washing-60deg'>
					</RadioItem>
					{' '}
					<RadioItem 
						name='wash-temp'
						id='wh-washing-70deg'>
					</RadioItem>
					{' '}
					<RadioItem 
						name='wash-temp'
						id='wh-washing-95deg'>
					</RadioItem>
				</FormGroup>
				<FormGroup className="lined">
					<ControlLabel>Режим стирки</ControlLabel>
					<RadioItem 
						name='wash-cycle'
						id='wh-washing'>
					</RadioItem>
					{' '}
					<RadioItem 
						name='wash-cycle'
						id='wh-washing-permanent-press'>
					</RadioItem>
					{' '}
					<RadioItem 
						name='wash-cycle'
						id='wh-washing-extra-care'>
					</RadioItem>
				</FormGroup>
				<FormGroup className="lined">
					<ControlLabel>Отбеливание</ControlLabel>
					<RadioItem 
						name='bleaching'
						id='wh-bleaching'>
						Отбеливание разрешено
					</RadioItem>
					{' '}
					<RadioItem 
						name='bleaching'
						id='wh-bleaching-not-allowed'>
						Нельзя отбеливать
					</RadioItem>
					{' '}
					<RadioItem 
						name='bleaching'
						id='wh-bleaching-non-chlorine'>
						Можно отбеливать, но только без хлора
					</RadioItem>
				</FormGroup>
				<FormGroup className="lined">
					<ControlLabel>Химчистка</ControlLabel>
					<RadioItem 
						name='drycleaning'
						id='wh-drycleaning'>
						Сухая чистка
					</RadioItem>
					{' '}
					<RadioItem 
						name='drycleaning'
						id='wh-drycleaning-not-allowed'>
						Химчистка запрещена
					</RadioItem>
				</FormGroup>
				<FormGroup className="lined">
					<ControlLabel>Отжим и сушка</ControlLabel>
					<RadioItem 
						name='drying'
						id='wh-drying-tumble'>
						Сухая чистка
					</RadioItem>
					{' '}
					<RadioItem 
						name='drying'
						id='wh-drying-not-allowed'>
						Можно отжимать и сушить в стиральной машине
					</RadioItem>
					{' '}
					<RadioItem 
						name='drying'
						id='wh-drying-tumble-not-allowed'>
						Нельзя выжимать и сушить в стиральной машине
					</RadioItem>
					{' '}
					<RadioItem 
						name='drying'
						id='wh-drying-tumble-low-heat'>
						Щадящая сушка
					</RadioItem>
					{' '}
					<RadioItem 
						name='drying'
						id='wh-drying-tumble-medium-heat'>
						Нормальная сушка
					</RadioItem>
					{' '}
					<RadioItem 
						name='drying'
						id='wh-drying-tumble-high-heat'>
						Сушка при высокой температуре
					</RadioItem>
				</FormGroup>
				<Button type="submit">
					Добавить
				</Button>
			</form>
		</div>
	);
};

export default AddForm;