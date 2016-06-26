const LaundryTags = [
	{
		img:"/assets/icons/wh-washing-30deg.svg",
		description:"Стирка в тёплой воде (Температура до 30°С)",
		name:'washing-30deg',
		category:'washing',
		notAllowed: [
			'washing-40deg',
			'washing-50deg',
			'washing-60deg',
			'washing-70deg',
			'washing-95deg'
		]	
	},
	{
		img:"/assets/icons/wh-washing-40deg.svg",
		description:"Стирка белья в теплой воде с нейтральными моющими средствами и стирка цветного белья (Температура до 40°С)",
		name:'washing-40deg',
		category:'washing',
		notAllowed: [
			'washing-30deg',
			'washing-50deg',
			'washing-60deg',
			'washing-70deg',
			'washing-95deg'			
		]
	},
	{
		img:"/assets/icons/wh-washing-50deg.svg",
		description:"Стирка цветного белья (Температура до 50°С)",
		name:'washing-50deg',
		category:'washing',
		notAllowed: [
			'washing-30deg',
			'washing-40deg',
			'washing-60deg',
			'washing-70deg',
			'washing-95deg'	
		]
	},
	{
		img:"/assets/icons/wh-washing-60deg.svg",
		description:"Стирка цветного белья (Температура до 60°С). Изделия не стойкое к кипячению, например, тонкое белье из хлопка или полиэстровых тканей.",
		name:'washing-60deg',
		category:'washing',
		notAllowed: [
			'washing-30deg',
			'washing-40deg',
			'washing-50deg',
			'washing-70deg',
			'washing-95deg'	
		]
	},
	{
		img:"/assets/icons/wh-washing-70deg.svg",
		description:"Стирка цветного белья (Температура до 70°С)",
		name:'washing-70deg',
		category:'washing',
		notAllowed: [
			'washing-30deg',
			'washing-40deg',
			'washing-50deg',
			'washing-60deg',
			'washing-95deg'	
		]
	},
	{
		img:"/assets/icons/wh-washing-95deg.svg",
		description:"Стирка с кипячением. Изделия из хлопка и льна, белое или цветное стойкое к кипячению.",
		name:'washing-95deg',
		category:'washing',
		notAllowed: [
			'washing-30deg',
			'washing-40deg',
			'washing-50deg',
			'washing-60deg',
			'washing-70deg'
		]
	},
	{
		img:"/assets/icons/wh-washing.svg",
		description:"Нормальная стирка",
		name:'washing',
		category:'washing',
		notAllowed: [
			'washing-40deg',
			'washing-50deg',
			'washing-60deg',
			'washing-70deg',
			'washing-95deg'
		]
	},
	{
		img:"/assets/icons/wh-washing-permanent-press.svg",
		category:'washing',
		description: "Щадящая стирка. Точно выдерживать температуру воды, не подвергать сильной механической обработке, при отжиме - медленный режим центрифуги",
		name:'washing-permanent-press'
	},
	{
		img:"/assets/icons/wh-washing-extra-care.svg",
		category:'washing',
		description:"Деликатная стирка. Большое количество воды, минимальная механическая обработка, быстрое полоскание.",
		name:'washing-extra-care'
	},
	{
		img:"/assets/icons/wh-washing-hand.svg",
		category:'washing',
		description: "Только ручная стирка, не подлежит стирке в стиральной машине. Не тереть, не отжимать. Максимальная температура - 40°С.",
		name: 'wh-washing-hand'
	},
	{
		img:"/assets/icons/wh-washing-not-allowed.svg",
		description:"Стирка запрещена",
		category:'washing',
		name:'washing-not-allowed',
		notAllowed: [
			'all-washing'
		]
	},
	{
		img:"/assets/icons/wh-wringing-not-allowed.svg",
		category:'wringing',
		description:"Не отжимать, не выкручивать",
		name:'wringing-not-allowed'
	},
	{
		img:"/assets/icons/wh-bleaching.svg",
		category:'bleaching',
		description:"Можно отбеливать",
		name:'bleaching',
		notAllowed: [
			'bleaching-not-allowed'
		]
	},
	{
		img:"/assets/icons/wh-bleaching-not-allowed.svg",
		description:"Нельзя отбеливать. При стирке не использовать средства, содержащие отбеливатели (хлор)",
		category:'bleaching',
		name:'bleaching-not-allowed',
		notAllowed: [
			'bleaching',
			'bleaching-non-chlorine'
		]
	},
	{
		img:"/assets/icons/wh-bleaching-non-chlorine.svg",
		description:"Можно отбеливать, но только без хлора",
		category:'bleaching',
		name:'bleaching-non-chlorine',
		notAllowed: [
			'bleaching'
		]
	},
	{
		img:"/assets/icons/wh-drycleaning.svg",
		description:"Cухая чистка",
		category:'dry',
		name:'drycleaning',
		notAllowed: [
			'drycleaning-not-allowed'
		]
	},
	{
		img:"/assets/icons/wh-drycleaning-not-allowed.svg",
		description:"Химчистка запрещена",
		category:'dry',
		name:'drycleaning-not-allowed',
		notAllowed: [
			'drycleaning',
			'drying-tumble',
			'drying-tumble-high-heat',
			'drying-tumble-medium-heat',
			'drying-tumble-low-heat'
		]
	},
	{
		img:"/assets/icons/wh-drying-tumble.svg",
		description:"Можно отжимать и сушить в стиральной машине",
		category: 'dry',
		name:'drying-tumble',
		notAllowed: [
			'drycleaning-not-allowed'
		]
	},
	{
		img:"/assets/icons/wh-drying-tumble-not-allowed.svg",
		description:"Нельзя выжимать и сушить в стиральной машине",
		category: 'dry',
		name:'drying-tumble-not-allowed',
		notAllowed: [
			'drying-tumble'
		]
	},
	{
		img:"/assets/icons/wh-drying-not-allowed.svg",
		description:"Не сушить",
		category: 'dry',
		name:"drying-not-allowed",
		notAllowed: [
			'all-dry',
			'drying-tumble-low-heat',
			'drying-tumble-medium-heat',
			'drying-tumble-high-heat'
		]
	},
	{
		img:"/assets/icons/wh-drying-tumble-low-heat.svg",
		description:"Сушить при низкой температуре (щадящая сушка)",
		name:"drying-tumble-low-heat",
		notAllowed: [
			'drying-tumble-medium-heat',
			'drying-tumble-high-heat',
			'drying-not-allowed'
		]
	},
	{
		img:"/assets/icons/wh-drying-tumble-medium-heat.svg",
		description:"Сушить при средней температуре (нормальная сушка)",
		name:"drying-tumble-medium-heat",
		notAllowed: [
			'drying-tumble-high-heat',
			'drying-not-allowed'
		]
	},
	{
		img:"/assets/icons/wh-drying-tumble-high-heat.svg",
		description:"Сушить при высокой температуре",
		name:"drying-tumble-high-heat",
		notAllowed: [
			'drying-not-allowed'
		]
	}
];

export default LaundryTags