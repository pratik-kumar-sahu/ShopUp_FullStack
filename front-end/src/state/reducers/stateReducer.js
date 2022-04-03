import { productAction } from '../actions';

export const stateReducer = (state, action) => {
	switch (action.type) {
		case productAction.fetchCategories:
			return { ...state, categories: action.payload };

		case productAction.fetchProducts:
			return { ...state, products: action.payload };

		default:
			throw new Error('Action type not found');
	}
};
