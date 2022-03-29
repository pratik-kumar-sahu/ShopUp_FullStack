import { FontAwesomeIcon } from './fontAwesomeIcon';

export const ListItem = ({ iconStyle, otherStyle, itemName }) => {
	return (
		<div className='list-item flex-align-center'>
			<FontAwesomeIcon iconStyle={iconStyle} otherStyle={otherStyle} />
			<span>{itemName}</span>
		</div>
	);
};
