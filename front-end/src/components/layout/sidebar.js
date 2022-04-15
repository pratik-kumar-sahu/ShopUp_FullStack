import { ListItem } from '../common';
import { useLocation } from 'react-router-dom';

export const Sidebar = (props) => {
	const { showSidebar } = props;

	const location = useLocation();
	const currentRoute = location.pathname;

	return (
		<div className='sidebar ml-5 my-5 p-5'>
			<ListItem
				iconStyle={`fab fa-phoenix-squadron list-item__icon list-item__icon-shadow ${
					showSidebar && 'mr-4'
				}`}
				containerStyle={`${currentRoute === '/' && 'list-item-active'}`}
				itemName={showSidebar ? 'ShopUp' : ''}
				pathName={'/'}
			/>

			<ListItem
				iconStyle={`fas fa-home list-item__icon list-item__icon-shadow ${
					showSidebar && 'mr-4'
				}`}
				containerStyle={`mt-2 ${currentRoute === '/products' && 'list-item-active'}`}
				itemName={showSidebar ? 'Homepage' : ''}
				pathName={'/products'}
			/>

			{/* <ListItem
				iconStyle={`fas fa-user list-item__icon list-item__icon-shadow ${
					showSidebar && 'mr-4'
				}`}
				containerStyle={`mt-2 ${currentRoute === '/signin' && 'list-item-active'}`}
				itemName={showSidebar ? 'SignIn' : ''}
				pathName={'/signin'}
			/>

			<ListItem
				iconStyle={`fas fa-user list-item__icon list-item__icon-shadow ${
					showSidebar && 'mr-4'
				}`}
				containerStyle={`mt-2 ${currentRoute === '/signup' && 'list-item-active'}`}
				itemName={showSidebar ? 'SignUp' : ''}
				pathName={'/signup'}
			/> */}
		</div>
	);
};
