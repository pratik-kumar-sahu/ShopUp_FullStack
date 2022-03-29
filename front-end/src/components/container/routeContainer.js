import { FontAwesomeIcon, ProductCard, ProductCategory } from '../common';

export const RouteContainer = () => {
	return (
		<div className='routeContainer'>
			<nav id='navbar' class='navigation-hovered flex-j-space-a-center p-5 mb-3'>
				<div className='flex-align-center'>
					<FontAwesomeIcon
						iconStyle={'fa fa-bars'}
						otherStyle={'list-item__headerIcon mr-4'}
					/>
					<input
						className='navigation-hovered__search'
						type='search'
						placeholder='Search...'
					/>
				</div>
				<div className='flex-row'>
					<FontAwesomeIcon
						iconStyle={'fas fa-heart'}
						otherStyle={'list-item__headerIcon mr-4'}
					/>
					<FontAwesomeIcon
						iconStyle={'fas fa-cart-plus'}
						otherStyle={'list-item__headerIcon mr-4'}
					/>
					<FontAwesomeIcon
						iconStyle={'fas fa-user'}
						otherStyle={'list-item__headerIcon mr-4'}
					/>
				</div>
			</nav>

			<img
				className='product-banner mt-5'
				src='https://img.freepik.com/free-photo/arrangement-black-friday-clock-with-copy-space_23-2148665530.jpg?t=st=1648464624~exp=1648465224~hmac=3053ad81f8ecdec9106e8fd69fe2320d6d446a92ccc96ddb1acb2ace03bffe9a&w=1380'
				alt='banner'
			/>

			<section className='mt-4 flex-column'>
				<div className='flex-j-space-a-center'>
					<h3>Popular Categories</h3>
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
				</div>
			</section>
		</div>
	);
};
