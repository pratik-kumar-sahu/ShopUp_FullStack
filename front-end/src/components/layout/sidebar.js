import { ListItem } from '../common';

export const Sidebar = () => {
	return (
		<div className='sidebar m-5 p-5'>
			<ListItem
				iconStyle={'fab fa-phoenix-squadron list-item__icon list-item__icon-shadow mr-4'}
				itemName={'ShopUp'}
				pathName={'/'}
			/>

			<ListItem
				iconStyle={'fas fa-home list-item__icon list-item__icon-shadow mr-4'}
				containerStyle={'mt-2'}
				itemName={'Homepage'}
				pathName={'/'}
			/>

			<ListItem
				iconStyle={'fas fa-user list-item__icon list-item__icon-shadow mr-4'}
				containerStyle={'mt-2'}
				itemName={'SignIn'}
				pathName={'/signin'}
			/>

			<ListItem
				iconStyle={'fas fa-user list-item__icon list-item__icon-shadow mr-4'}
				containerStyle={'mt-2'}
				itemName={'SignUp'}
				pathName={'/signup'}
			/>
		</div>
	);
};
