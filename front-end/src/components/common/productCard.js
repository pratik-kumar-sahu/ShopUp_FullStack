import { useNavigate } from 'react-router-dom';
import { useAuthContext } from '../../state/contexts';
import { addToCart, addToWishlist } from '../../state/requests';
import { FontAwesomeIcon } from './fontAwesomeIcon';

export const ProductCard = (props) => {
	const { _id, name, description, image, brandName, mrp, currentPrice, ratings } = props.product;

	const navigate = useNavigate();

	const {
		authState: { wishlist, cart },
		authDispatch
	} = useAuthContext();

	const splitInBullets = (description) => {
		const split = description.split(',');
		return split.map((desc, index) => (
			<div key={index} className='productCard-details__bullet'>
				&bull; {desc}
			</div>
		));
	};

	const handleWishlist = (productId) => {
		addToWishlist(productId, authDispatch);
	};

	const handleCart = (productId) => {
		addToCart(productId, authDispatch);
	};

	return (
		<div className='productCard flex-column overflow m-5 cursor'>
			<div className='productCard-section1 mt-2'>
				<img className='productCard-image cursor mr-5 mb-2' src={image} alt='mobile' />
				<div className='productCard-section2'>
					<div>
						<div>
							<FontAwesomeIcon iconStyle={'fas fa-star productCard-rating'} />
							<FontAwesomeIcon iconStyle={'fas fa-star productCard-rating'} />
							<FontAwesomeIcon iconStyle={'fas fa-star productCard-rating'} />
							<FontAwesomeIcon
								iconStyle={'fas fa-star-half-alt productCard-rating'}
							/>
							<FontAwesomeIcon iconStyle={'far fa-star productCard-rating'} />
							<span className='productCard-rating mx-2'>{ratings}</span>
						</div>
						<div style={{ fontWeight: 'bolder' }}>₹ {currentPrice}/-</div>
						<div
							style={{
								textDecoration: 'line-through',
								fontSize: '1.4rem'
							}}
						>
							₹ {mrp}/-
						</div>
					</div>
				</div>
			</div>
			<div className='productCard-details mt-2'>
				<p className='productCard-details__brand'>{brandName}</p>
				<h4 title={name} className='productCard-details__name'>
					{name}
				</h4>
				{splitInBullets(description)}
			</div>
			<div className='tags tags-bottom flex-row'>
				{wishlist.includes(_id) ? (
					<div
						className='wish wish-active flex-j-a-center cursor'
						onClick={() => navigate('/wishlist')}
					>
						Go to Wish
					</div>
				) : (
					<div
						className='wish flex-j-a-center cursor'
						onClick={() => handleWishlist(_id)}
					>
						Add to Wish
					</div>
				)}

				{cart.includes(_id) ? (
					<div
						className='cart cart-active flex-j-a-center cursor'
						onClick={() => navigate('/cart')}
					>
						Go to Cart
					</div>
				) : (
					<div className='cart flex-j-a-center cursor' onClick={() => handleCart(_id)}>
						Add to Cart
					</div>
				)}
			</div>
			<div className='tags tags-top flex-row'>
				<div className='deals flex-j-a-center'>Hot This Week 😍</div>
			</div>
		</div>
	);
};
