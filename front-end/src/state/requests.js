import { loaderAction, productAction, userAction } from './actions';
import { categoriesApi, loginApi, productsApi, signupApi } from './apis';
import { notify } from '../components/common';
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

export const userLogin = async (userDetails) => {
	try {
		const response = await axios.post(loginApi.POST.loginUser, { ...userDetails });

		console.log(response);
	} catch (error) {
		console.log(error);
		throw error;
	}
};

export const userSignup = async (userDetails) => {
	try {
		const response = await axios.post(signupApi.POST.registerUser, { ...userDetails });

		console.log(response);
	} catch (error) {
		console.log(error);
		throw error;
	}
};

export const fetchWishlist = (dispatch) => {
	try {
		const wishlistedProducts = localStorage.getItem('wishlist');
		if (!wishlistedProducts) {
			wishlistedProducts = [];
		}
		dispatch({ type: userAction.fetchWishlist, payload: JSON.parse(wishlistedProducts) });
	} catch (error) {}
};

export const fetchCart = (dispatch) => {
	try {
		const cartProducts = localStorage.getItem('cart');
		if (!cartProducts) {
			cartProducts = [];
		}
		dispatch({ type: userAction.fetchCart, payload: JSON.parse(cartProducts) });
	} catch (error) {}
};

export const addToWishlist = async (productId, dispatch) => {
	try {
		let wishlistedProducts = JSON.parse(localStorage.getItem('wishlist'));
		if (wishlistedProducts === null) {
			wishlistedProducts = [];
		}
		if (!wishlistedProducts.includes(productId)) {
			notify.success('👏 Great Job! Added to wishlist');
			wishlistedProducts.push(productId);
			localStorage.setItem('wishlist', JSON.stringify(wishlistedProducts));
			dispatch({ type: userAction.addToWishlist, payload: productId });
		}
	} catch (error) {
		throw error;
	}
};

export const removeFromWishlist = async (productId, dispatch) => {
	try {
		let wishlistedProducts = JSON.parse(localStorage.getItem('wishlist'));
		if (wishlistedProducts.includes(productId)) {
			notify.success('Removed from wishlist');
			wishlistedProducts = wishlistedProducts.filter((id) => id !== productId);
			localStorage.setItem('wishlist', JSON.stringify(wishlistedProducts));
			dispatch({ type: userAction.removeFromWishlist, payload: productId });
		}
	} catch (error) {
		throw error;
	}
};

export const addToCart = async (productId, dispatch) => {
	try {
		let cartProducts = JSON.parse(localStorage.getItem('cart'));
		if (cartProducts === null) {
			cartProducts = [];
		}
		if (!cartProducts.includes(productId)) {
			notify.success('🛒 Nice choice! Added to cart');
			cartProducts.push(productId);
			localStorage.setItem('cart', JSON.stringify(cartProducts));
			dispatch({ type: userAction.addToCart, payload: productId });
		}
	} catch (error) {
		throw error;
	}
};

export const removeFromCart = async (productId, dispatch) => {
	try {
		let cartProducts = JSON.parse(localStorage.getItem('cart'));
		if (cartProducts.includes(productId)) {
			notify.success('Removed from cart');
			cartProducts = cartProducts.filter((id) => id !== productId);
			localStorage.setItem('cart', JSON.stringify(cartProducts));
			dispatch({ type: userAction.removeFromWishlist, payload: productId });
		}
	} catch (error) {
		throw error;
	}
};
