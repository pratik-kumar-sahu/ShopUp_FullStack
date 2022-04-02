import { FontAwesomeIcon } from './fontAwesomeIcon';

export const ProductCard = (props) => {
	const { name, description, image, brandName, mrp, currentPrice, ratings } = props.product;

	const splitInBullets = (description) => {
		const split = description.split(',');
		return split.map((desc, index) => (
			<div key={index} className='productCard-details__bullet'>
				&bull; {desc}
			</div>
		));
	};

	return (
		<div className='productCard flex-column overflow m-5'>
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
				<div className='wish flex-j-a-center cursor'>WishList</div>
				<div className='cart flex-j-a-center cursor'>Buy Now</div>
			</div>
			<div className='tags tags-top flex-row'>
				<div className='deals flex-j-a-center'>Hot This Week 😍</div>
			</div>
		</div>
	);
};
