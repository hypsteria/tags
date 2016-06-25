import React from 'react';
import { Table } from 'react-bootstrap';

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
				<tr>
					<td><img src="/assets/icons/wh-washing-30deg.svg" /></td>
					<td>Стирка в тёплой воде (Температура до 30 С)</td>
				</tr>
				<tr>
					<td><img src="/assets/icons/wh-washing-40deg.svg" /></td>
					<td>Стирка белья в теплой воде с нейтральными моющими средствами и стирка цветного белья (Температура до 40 С)</td>
				</tr>
				<tr>
					<td><img src="/assets/icons/wh-washing-50deg.svg" /></td>
					<td>Стирка цветного белья (Температура до 50 С)</td>
				</tr>
				<tr>
					<td><img src="/assets/icons/wh-washing-60deg.svg" /></td>
					<td>Стирка цветного белья (Температура до 60 С)<br/>Изделия не стойкое к кипячению, например, тонкое белье из хлопка или полиэстровых тканей.</td>
				</tr>
				<tr>
					<td><img src="/assets/icons/wh-washing-70deg.svg" /></td>
					<td></td>
				</tr>
				<tr>
					<td><img src="/assets/icons/wh-washing-95deg.svg" /></td>
					<td>Стирка с кипячением<br/>Изделия из хлопка и льна, белое или цветное стойкое к кипячению.</td>
				</tr>
				<tr>
					<td><img src="/assets/icons/wh-washing.svg" /></td>
					<td>Нормальная стирка</td>
				</tr>
				<tr>
					<td><img src="/assets/icons/wh-washing-permanent-press.svg" /></td>
					<td>Щадящая стирка. Точно выдерживать температуру воды, не подвергать сильной механической обработке, при отжиме - медленный режим центрифуги</td>
				</tr>
				<tr>
					<td><img src="/assets/icons/wh-washing-extra-care.svg" /></td>
					<td>Деликатная стирка. Большое количество воды, минимальная механическая обработка, быстрое полоскание.</td>
				</tr>
				<tr>
					<td><img src="/assets/icons/wh-washing-hand.svg" /></td>
					<td>Только ручная стирка, не подлежит стирке в стиральной машине. Не тереть, не отжимать. Максимальная температура - 40 С.</td>
				</tr>
				<tr>
					<td><img src="/assets/icons/wh-washing-not-allowed.svg" /></td>
					<td>Стирка запрещена</td>
				</tr>
				<tr>
					<td><img src="/assets/icons/wh-wringing-not-allowed.svg" /></td>
					<td>Не отжимать, не выкручивать</td>
				</tr>
				<tr>
					<td><img src="/assets/icons/wh-bleaching.svg" /></td>
					<td>Можно отбеливать</td>
				</tr>
				<tr>
					<td><img src="/assets/icons/wh-bleaching-not-allowed.svg" /></td>
					<td>Нельзя отбеливать. При стирке не использовать средства, содержащие отбеливатели (хлор)</td>
				</tr>
				<tr>
					<td><img src="/assets/icons/wh-bleaching-non-chlorine.svg" /></td>
					<td>Можно отбеливать, но только без хлора</td>
				</tr>
				<tr>
					<td><img src="/assets/icons/wh-drycleaning.svg" /></td>
					<td>Cухая чистка</td>
				</tr>
				<tr>
					<td><img src="/assets/icons/wh-drycleaning-not-allowed.svg" /></td>
					<td>Химчистка запрещена</td>
				</tr>
				<tr>
					<td><img src="/assets/icons/wh-drying-tumble.svg" /></td>
					<td>Можно отжимать и сушить в стиральной машине</td>
				</tr>
				<tr>
					<td><img src="/assets/icons/wh-drying-tumble-not-allowed.svg" /></td>
					<td>Нельзя выжимать и сушить в стиральной машине</td>
				</tr>
				<tr>
					<td><img src="/assets/icons/wh-drying-not-allowed.svg" /></td>
					<td>Не сушить</td>
				</tr>
				<tr>
					<td><img src="/assets/icons/wh-drying-tumble-low-heat.svg" /></td>
					<td>Сушить при низкой температуре (щадящая сушка)</td>
				</tr>
				<tr>
					<td><img src="/assets/icons/wh-drying-tumble-medium-heat.svg" /></td>
					<td>Сушить при средней температуре (нормальная сушка)</td>
				</tr>
				<tr>
					<td><img src="/assets/icons/wh-drying-tumble-high-heat.svg" /></td>
					<td>Сушить при высокой температуре</td>
				</tr>
			</tbody>
		</Table>
	</div>
);

export default Info;