import { ProductCard, ProductCategory } from '../common';
import { useStateContext } from '../../state/contexts';
import { useEffect, useState } from 'react';

export const Products = () => {
	const [filteredProducts, setFilteredProducts] = useState([]);

	const {
		state: { categories, products }
	} = useStateContext();

	useEffect(() => {
		if (products.length) {
			setFilteredProducts(products);
		}
	}, [products]);

	return (
		<div>
			<section className='mt-5 flex-column'>
				<div className='flex-j-space-a-center ml-5 mt-3'>
					<h3>Popular Brands</h3>
				</div>

				<div style={{ overflowX: 'scroll', height: '23rem' }} className='flex-row'>
					{categories.map((category) => (
						<ProductCategory key={category._id} category={category} />
					))}
				</div>
			</section>

			<section className='pt-5 flex-column'>
				<div className='flex-j-space-a-center ml-5'>
					<h3>Popular Products</h3>
				</div>

				<div style={{ flexWrap: 'wrap' }} className='flex-row mt-4'>
					{filteredProducts.map((product) => (
						<ProductCard key={product._id} product={product} />
					))}
				</div>
			</section>
		</div>
	);
};
