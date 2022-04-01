import { FontAwesomeIcon } from './fontAwesomeIcon';

export const Navbar = () => {
	return (
		<nav id='navbar' className='navigation-hovered flex-j-space-a-center p-5 mb-3'>
			<div className='flex-align-center'>
				<FontAwesomeIcon iconStyle={'fa fa-bars list-item__headerIcon mr-4'} />
				<input
					className='navigation-hovered__search'
					type='search'
					placeholder='Search...'
				/>
			</div>
			<div className='flex-row'>
				<FontAwesomeIcon iconStyle={'fas fa-heart list-item__headerIcon mr-4'} />
				<FontAwesomeIcon iconStyle={'fas fa-cart-plus list-item__headerIcon mr-4'} />
				<FontAwesomeIcon iconStyle={'fas fa-user list-item__headerIcon mr-4'} />
			</div>
		</nav>
	);
};
