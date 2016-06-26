export const ClotheActions = {
	ADD_TO_LAUNDRY: 'ADD_TO_LAUNDRY',
	REMOVE_FROM_LAUNDRY: 'REMOVE_FROM_LAUNDRY',
	DROP_FILTERS: 'DROP_FILTERS'
};

export function addToLaundry(id) {
	return {
		type: ClotheActions.ADD_TO_LAUNDRY,
		id: id
	};
};

export function removeFromLaundry(id) {
	return {
		type: ClotheActions.REMOVE_FROM_LAUNDRY,
		id: id
	};
};

export function dismissAlert() {
	return {
		type: ClotheActions.DROP_FILTERS
	};
};