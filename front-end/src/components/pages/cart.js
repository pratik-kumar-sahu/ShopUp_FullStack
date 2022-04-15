import { useEffect, useState } from 'react';
import { useAuthContext, useStateContext } from '../../state/contexts';
import { ProductCardCart } from '../common';

export const Cart = () => {
	const [demo, setDemo] = useState([]);

	const {
		authState: { cart }
	} = useAuthContext();

	const {
		state: { products }
	} = useStateContext();

	useEffect(() => {
		setDemo(products.filter((product) => cart.includes(product._id)));
	}, [products, cart]);

	return (
		<div style={{ flexWrap: 'wrap' }} className='flex-row mt-4'>
			{demo.length ? (
				demo.map((product) => <ProductCardCart key={product._id} product={product} />)
			) : (
				<div>No items</div>
			)}
		</div>
	);
};
