import { FontAwesomeIcon } from './fontAwesomeIcon';
import { useNavigate } from 'react-router-dom';

export const ListItem = ({ iconStyle, itemName, containerStyle = '', pathName = '#' }) => {
	const navigate = useNavigate();

	return (
		<div
			className={`list-item cursor ${containerStyle}`}
			onClick={() => navigate(`${pathName}`)}
		>
			<FontAwesomeIcon iconStyle={iconStyle} />
			<span className={`${itemName && 'mr-4'}`}>{itemName}</span>
		</div>
	);
};
