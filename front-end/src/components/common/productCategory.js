export const ProductCategory = (props) => {
	const { brandName, image } = props.category;

	return (
		<div className='productCategory flex-j-a-center-column cursor m-5'>
			<img className='productCategory-image my-2' src={image} alt={brandName} />
			<p className='productCategory-brand'>{brandName}</p>
		</div>
	);
};
