import React from 'react';
import { ProductCard, ProductCategory } from '../../common';

export const Home = () => {
	return (
		<div>
			<img
				className='product-banner mt-5'
				src='https://img.freepik.com/free-photo/arrangement-black-friday-clock-with-copy-space_23-2148665530.jpg?t=st=1648464624~exp=1648465224~hmac=3053ad81f8ecdec9106e8fd69fe2320d6d446a92ccc96ddb1acb2ace03bffe9a&w=1380'
				alt='banner'
			/>

			<section className='mt-4 flex-column'>
				<div className='flex-j-space-a-center'>
					<h3>Popular Brands</h3>
					<h5>view all --&gt;</h5>
				</div>

				<div className='flex-row mt-4'>
					<ProductCategory />
					<ProductCategory />
					<ProductCategory />
					<ProductCategory />
				</div>
			</section>

			<section className='mt-4 pt-4 flex-column'>
				<div className='flex-j-space-a-center'>
					<h3>Popular Products</h3>
					<h5>view all --&gt;</h5>
				</div>

				<div className='flex-row mt-4'>
					<ProductCard />
					<ProductCard />
					<ProductCard />
					<ProductCard />
					<ProductCard />
				</div>
			</section>
		</div>
	);
};
