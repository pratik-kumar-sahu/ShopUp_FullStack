import { FontAwesomeIcon } from "./fontAwesomeIcon";

export const ProductCard = () => {
	return (
		<div className='productCard p-5 mr-5 flex-column'>
			<div className='productCard-section1 mt-2'>
				<img
					className='productCard-image mr-5 mb-2'
					src='https://rukminim1.flixcart.com/image/312/312/kg8avm80/mobile/r/2/r/apple-iphone-12-mini-dummyapplefsn-original-imafwgbfcswp9fh5.jpeg?q=70'
					alt='mobile'
				/>
				<div className='productCard-section2'>
					<div>
						<div>
							<FontAwesomeIcon
								iconStyle={'fas fa-star'}
								otherStyle={'productCard-rating'}
							/>
							<FontAwesomeIcon
								iconStyle={'fas fa-star'}
								otherStyle={'productCard-rating'}
							/>
							<FontAwesomeIcon
								iconStyle={'fas fa-star'}
								otherStyle={'productCard-rating'}
							/>
							<FontAwesomeIcon
								iconStyle={'fas fa-star-half-alt'}
								otherStyle={'productCard-rating'}
							/>
							<FontAwesomeIcon
								iconStyle={'far fa-star'}
								otherStyle={'productCard-rating'}
							/>
							<span className='productCard-rating mx-2'>3.5</span>
						</div>
						<div style={{ fontWeight: 'bolder' }}>₹ 52990/-</div>
						<div
							style={{
								textDecoration: 'line-through',
								fontSize: '1.4rem'
							}}
						>
							₹ 60990/-
						</div>
					</div>
					<div className='mb-2'>
						<FontAwesomeIcon iconStyle={'far fa-heart'} otherStyle={'mr-2'} />
						<FontAwesomeIcon iconStyle={'fas fa-shopping-cart'} />
					</div>
				</div>
			</div>
			<div className='productCard-details mt-2'>
				<p className='productCard-details__brand'>Apple</p>
				<h4>Iphone 12 Mini</h4>
				<div className='productCard-details__bullet'>&bull; Fastest 5G Smartphone</div>
				<div className='productCard-details__bullet'>&bull; A14 Bionic Chip</div>
				<div className='productCard-details__bullet'>
					&bull; Wireless Charging With MagSafe
				</div>
			</div>
		</div>
	);
};