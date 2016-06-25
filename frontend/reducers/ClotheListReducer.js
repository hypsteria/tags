import { DummyBase } from '../other'

const ClotheListReducer = (state = {
	items: [...DummyBase.items]
}, action) => {
	switch (action.type) {
		default:
			return state;
	}
}

export default ClotheListReducer