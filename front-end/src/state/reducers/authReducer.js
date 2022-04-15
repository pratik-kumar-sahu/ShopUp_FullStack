import { loaderAction, userAction } from '../actions';

export const authReducer = (state, action) => {
	switch (action.type) {
		case loaderAction.startLoader:
			return { ...state, showLoader: action.payload };

		case loaderAction.stopLoader:
			return { ...state, showLoader: action.payload };

		case userAction.fetchWishlist:
			return { ...state, wishlist: action.payload };

		case userAction.fetchCart:
			return { ...state, cart: action.payload };

		case userAction.addToWishlist:
			return { ...state, wishlist: [...state.wishlist, action.payload] };

		case userAction.removeFromWishlist:
			return {
				...state,
				wishlist: state.wishlist.filter((item) => item._id !== action.payload)
			};

		case userAction.addToCart:
			return { ...state, cart: [...state.cart, action.payload] };

		case userAction.removeFromCart:
			return { ...state, cart: state.cart.filter((item) => item._id !== action.payload) };

		default:
			throw Error('Action not implemeted');
	}
};
