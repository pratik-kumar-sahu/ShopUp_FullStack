import { useEffect, useState } from 'react';
import { useAuthContext, useStateContext } from '../../state/contexts';
import { ProductCardWishlist } from '../common';

export const Wishlist = () => {
	const [demo, setDemo] = useState([]);

	const {
		authState: { wishlist }
	} = useAuthContext();

	const {
		state: { products }
	} = useStateContext();

	useEffect(() => {
		setDemo(products.filter((product) => wishlist.includes(product._id)));
	}, [products, wishlist]);

	return (
		<div style={{ flexWrap: 'wrap' }} className='flex-row mt-4'>
			{demo.length ? (
				demo.map((product) => <ProductCardWishlist key={product._id} product={product} />)
			) : (
				<div>No items</div>
			)}
		</div>
	);
};
