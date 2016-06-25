import { DummyBase } from '../other'
import { ClotheActions } from '../actions'

// Return join of all items
function recalculateRules(items) {
	let rules = {};
	for(item of items) {
		if ( item.notAllowed )
			for( rule of item.notAllowed )
				rules[rule] = true;
	}
}

// Return changed copy of items array
function findAndChange(items, id, props) {
	return items.map((item) => {
		// TODO: Refactoring?
		if ( item.id == id )
			return Object.assign({}, item, props);
		else
			return Object.assign({}, item, {});
	});
}

const ClotheListReducer = (state = {
	items: [...DummyBase.items],
	notAllowed: {}
}, action) => {

	switch (action.type) {
		case ClotheActions.ADD_TO_LAUNDRY: {
			const items = findAndChange(state.items, action.id, {
				selected: true
			});

			return Object.assign({}, state, {
				notAllowed: recalculateRules(items),
				items
			});
		}

		case ClotheActions.REMOVE_FROM_LAUNDRY: {
			const items = findAndChange(state.items, action.id, {
				selected: false
			});

			return Object.assign({}, state, {
				notAllowed: recalculateRules(items),
				items
			})
		}

		default:
			return state;
	}
}

export default ClotheListReducer