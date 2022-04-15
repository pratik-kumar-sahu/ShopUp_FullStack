const baseUrl = '/api';

export const productsApi = {
	GET: {
		getAllProducts: `${baseUrl}/products`,
		getProductById: `${baseUrl}/products/:productId`
	}
};

export const categoriesApi = {
	GET: {
		getAllCategories: `${baseUrl}/categories`,
		getCategoryById: `${baseUrl}/categories/:categoryId`
	}
};

export const wishlistApi = {
	GET: {
		getWishlist: `${baseUrl}/user/wishlist`
	},
	POST: {
		saveWishlist: `${baseUrl}/user/wishlist`
	},
	DELETE: {
		deleteProductFromWishlist: `${baseUrl}/user/wishlist/:productId`
	}
};

export const cartApi = {
	GET: {
		getCart: `${baseUrl}/user/cart`
	},
	POST: {
		saveCart: `${baseUrl}/user/cart`,
		updateProductInCart: `${baseUrl}/user/cart/:productId`
	},
	DELETE: {
		deleteProductFromCart: `${baseUrl}/user/cart/:productId`
	}
};

export const loginApi = {
	POST: {
		loginUser: `${baseUrl}/auth/login`
	}
};

export const signupApi = {
	POST: {
		registerUser: `${baseUrl}/auth/signup`
	}
};
