import { DummyBase, LaundryTags } from '../other'
import { ClotheActions } from '../actions'

function recalculateRules(items) {
	var rules = {};
	for(let item of items) {
		if ( item.selected ) {
			// add tag rules to alls
			// TODO: Refacotr this crap(hackathon solution)
			for(let tag of item.tags ) {
				for( var ltag of LaundryTags ) {
					if( tag == ltag.name ) {
						if( ltag.notAllowed )
							for( let rule of ltag.notAllowed ) {
								rules[rule] = true;
							}
					}
				}
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
		for(let tag of item.tags) {
			if( notAllowed[tag] ) {
				return Object.assign({}, item, {hide: true});
			}
		}

		return Object.assign({}, item, {hide: false});
	});
}

const ClotheListReducer = (state = {
	items: [...DummyBase.items],
	tags: [...LaundryTags],
	notAllowed: {},
}, action) => {
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