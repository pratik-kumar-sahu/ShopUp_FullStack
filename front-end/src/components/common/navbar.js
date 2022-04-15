import { useEffect } from 'react';
import { useAuthContext, useStateContext } from '../../state/contexts';
import { fetchCart, fetchCategories, fetchProducts, fetchWishlist } from '../../state/requests';
import { FontAwesomeIcon } from './fontAwesomeIcon';

export const Navbar = (props) => {
	const { showSidebar, setShowSidebar } = props.handleSidebar;

	const { dispatch: productDispatch } = useStateContext();
	const { authDispatch } = useAuthContext();

	useEffect(() => {
		fetchProducts(productDispatch);
		fetchCategories(productDispatch);
		fetchWishlist(authDispatch);
		fetchCart(authDispatch);
	}, [authDispatch, productDispatch]);

	return (
		<nav id='navbar' className='navigation-hovered flex-j-space-a-center p-5 mb-3'>
			<div className='flex-align-center' onClick={() => setShowSidebar(!showSidebar)}>
				<FontAwesomeIcon iconStyle={'fa fa-bars list-item__headerIcon mr-4'} />
				<input
					className='navigation-hovered__search'
					type='search'
					placeholder='Search...'
				/>
			</div>
			<div className='flex-row'>
				<FontAwesomeIcon
					iconStyle={'fas fa-heart list-item__headerIcon mr-4'}
					pathName={'/wishlist'}
				/>
				<FontAwesomeIcon
					iconStyle={'fas fa-cart-plus list-item__headerIcon mr-4'}
					pathName={'/cart'}
				/>
				{/* <FontAwesomeIcon iconStyle={'fas fa-user list-item__headerIcon mr-4'} /> */}
			</div>
		</nav>
	);
};
