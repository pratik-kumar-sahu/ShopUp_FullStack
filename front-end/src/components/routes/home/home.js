import React, { useEffect } from 'react';
import { ProductCard, ProductCategory } from '../../common';
import { fetchCategories, fetchProducts } from '../../../state/requests';
import { useState } from '../../../state/contexts';

export const Home = () => {
	const {
		state: { categories, products },
		dispatch: productDispatch
	} = useState();

	useEffect(() => {
		fetchProducts(productDispatch);
		fetchCategories(productDispatch);
	}, [productDispatch]);

	return (
		<div>
			<img
				className='product-banner mt-5'
				src='https://i.pinimg.com/originals/ca/e7/2c/cae72ce86998abcadd5051acd91a696b.jpg'
				alt='banner'
			/>

			<section className='mt-4 flex-column'>
				<div className='flex-j-space-a-center'>
					<h3>Popular Brands</h3>
					<h5>view all --&gt;</h5>
				</div>

				<div style={{ overflowX: 'scroll', height: '23rem' }} className='flex-row'>
					{categories.map((category) => (
						<ProductCategory key={category._id} category={category} />
					))}
				</div>
			</section>

			<section className='pt-4 flex-column'>
				<div className='flex-j-space-a-center'>
					<h3>Popular Products</h3>
					<h5>view all --&gt;</h5>
				</div>

				<div style={{ flexWrap: 'wrap' }} className='flex-row mt-4'>
					{products.map((product) => (
						<ProductCard key={product._id} product={product} />
					))}
				</div>
			</section>
		</div>
	);
};
