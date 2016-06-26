import { DummyBase } from '../other'
import { ClotheActions } from '../actions'

// Return join of all items
function recalculateRules(items) {
	let rules = {};
	for(let item of items) {
		if ( item.notAllowed ) {
			for(let rule of item.notAllowed ) {
				rules[rule] = true;
			}
		}
	}

	return rules;
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

function hideByRules(items, notAllowed) {
	return items.map((item) => {
		// TODO: Refactoring!
		if( notAllowed[item.name] )
			return Object.assign({}, item, {hide: true});
		else
			return Object.assign({}, item, {hide: false});
	});
}

const ClotheListReducer = (state = {
	items: [...DummyBase.items],
	notAllowed: {}
}, action) => {
	console.log(action);
	switch (action.type) {
		case ClotheActions.ADD_TO_LAUNDRY: {
			const items = findAndChange(state.items, action.id, {
				selected: true
			});

			const notAllowed = recalculateRules(items);

			return Object.assign({}, state, {
				notAllowed,
				items: hideByRules(items, notAllowed)
			});
		}

		case ClotheActions.REMOVE_FROM_LAUNDRY: {
			const items = findAndChange(state.items, action.id, {
				selected: false
			});

			const notAllowed = recalculateRules(items);

			return Object.assign({}, state, {
				notAllowed,
				items: hideByRules(items, notAllowed)
			});	
		}

		default:
			return state;
	}
}

export default ClotheListReducer