import { Route, Routes } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';

import { Cart, Home, Products, SignIn, SignUp, Welcome, Wishlist } from '../pages';
import { Navbar } from '../common';

export const RouteContainer = (props) => {
	const { handleSidebar } = props;

	return (
		<div className='routeContainer'>
			<Toaster position='top-center' reverseOrder={false} />
			<Navbar handleSidebar={handleSidebar} />
			<Routes>
				<Route path='/' element={<Welcome />} />
				<Route path='/products' element={<Products />} />
				{/* <Route path='/signin' element={<SignIn />} />
				<Route path='/signup' element={<SignUp />} /> */}
				<Route path='/wishlist' element={<Wishlist />} />
				<Route path='/cart' element={<Cart />} />
			</Routes>
		</div>
	);
};
