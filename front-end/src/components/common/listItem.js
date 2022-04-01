import { FontAwesomeIcon } from './fontAwesomeIcon';
import { useNavigate } from 'react-router-dom';

export const ListItem = ({ iconStyle, containerStyle, itemName, pathName = '#' }) => {
	const navigate = useNavigate();

	return (
		<div
			className={`list-item cursor ${containerStyle}`}
			onClick={() => navigate(`${pathName}`)}
		>
			<FontAwesomeIcon iconStyle={iconStyle} />
			<span>{itemName}</span>
		</div>
	);
};
