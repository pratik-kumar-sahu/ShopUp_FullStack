import { productAction } from './actions';
import { categoriesApi, productsApi } from './apis';
import axios from 'axios';

export const fetchCategories = async (dispatch) => {
	try {
		const {
			data: { categories },
			status
		} = await axios.get(categoriesApi.GET.getAllCategories);

		if (status === 200) {
			dispatch({ type: productAction.fetchCategories, payload: categories });
		} else {
			throw new Error('Server not responded');
		}
	} catch (error) {
		console.log(error);
		throw error;
	}
};

export const fetchProducts = async (dispatch) => {
	try {
		const {
			data: { products },
			status
		} = await axios.get(productsApi.GET.getAllProducts);

		if (status === 200) {
			dispatch({ type: productAction.fetchProducts, payload: products });
		} else {
			throw new Error('Server not responded');
		}
	} catch (error) {
		console.log(error);
		throw error;
	}
};
