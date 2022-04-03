import { Route, Routes } from 'react-router-dom';

import { Home, SignIn, SignUp } from '../pages';
import { Navbar } from '../common';

export const RouteContainer = () => {
	return (
		<div className='routeContainer'>
			<Navbar />
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/signin' element={<SignIn />} />
				<Route path='/signup' element={<SignUp />} />
			</Routes>
		</div>
	);
};
