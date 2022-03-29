import { ListItem } from '../common';

export const Sidebar = () => {
	return (
		<div className='sidebar m-5 p-5'>
			<ListItem
				iconStyle={'fab fa-phoenix-squadron'}
				otherStyle={'list-item__icon mr-3'}
				itemName={'ShopUp'}
			/>

			<hr className='hr my-5' />

			<ListItem
				iconStyle={'fas fa-home'}
				otherStyle={'list-item__icon mr-3'}
				itemName={'Homepage'}
			/>
		</div>
	);
};
