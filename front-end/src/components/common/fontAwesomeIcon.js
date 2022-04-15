import { useNavigate } from 'react-router-dom';

export const FontAwesomeIcon = ({ iconStyle, pathName = '#' }) => {
	const navigate = useNavigate();

	return <i className={`${iconStyle} cursor`} onClick={() => navigate(`${pathName}`)} />;
};
