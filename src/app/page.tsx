import './main.scss';

const getProducts = async () => {
	const response = await fetch(
		'https://medusa-store-production.up.railway.app/store/products'
	);
	const products = await response.json();
	return products.products;
};

export default async function ProductsList() {
	console.log('test here');
	const products = await getProducts();
	console.log(products);
	return (
		<main>
      {products.map((item: any) => {
        console.log(item.images.url);
				return (
					<div className='product'>
						<h3>Product</h3>
						<img src={item.thumbnail} alt='' />

						<p>Name: {item.title}</p>
						<p>Price: {item.variants[0].prices[0].amount / 100}</p>
					</div>
				);
			})}

			{/* <div className='product'>
				<h3>Product</h3>
				<img
					src='https://medusa-public-images.s3.eu-west-1.amazonaws.com/coffee-mug.png'
					alt=''
				/>
				<p>Name:</p>
				<p>Price</p>
			</div>
			<div className='product'>
				<h3>Product</h3>
				<img
					src='https://medusa-public-images.s3.eu-west-1.amazonaws.com/coffee-mug.png'
					alt=''
				/>
				<p>Name:</p>
				<p>Price</p>
			</div>
			<img
				src='https://medusa-public-images.s3.eu-west-1.amazonaws.com/coffee-mug.png'
				alt=''
			/> */}
		</main>
	);
}
