import { v4 as uuid } from 'uuid';

/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */

export const products = [
	{
		_id: uuid(),
		name: 'iPhone 13 Mini (Blue, 128 GB)',
		description:
			'13.72 cm (5.4 inch) Super Retina XDR Display, 12MP + 12MP | 12MP Front Camera, A15 Bionic Chip Processor',
		image: 'https://rukminim1.flixcart.com/image/312/312/ktketu80/mobile/s/n/i/iphone-13-mlpk3hn-a-apple-original-imag6vpyrhqjgqzw.jpeg?q=70',
		brandName: 'Apple',
		mrp: '69,900',
		currentPrice: '64,900',
		categoryName: 'Mobiles',
		ratings: 4,
		tags: ['popular'],
		deals: 'Hot This Week 😍'
	},
	{
		_id: uuid(),
		name: 'iPhone 13 (Blue, 128 GB)',
		description:
			'15.49 cm (6.1 inch) Super Retina XDR Display, 12MP + 12MP | 12MP Front Camera, A15 Bionic Chip Processor',
		image: 'https://rukminim1.flixcart.com/image/312/312/ktketu80/mobile/s/n/i/iphone-13-mlpk3hn-a-apple-original-imag6vpyrhqjgqzw.jpeg?q=70',
		brandName: 'Apple',
		mrp: '79,900',
		currentPrice: '74,900',
		categoryName: 'Mobiles',
		ratings: 4.5,
		tags: ['popular'],
		deals: 'Hot This Week 😍'
	},
	{
		_id: uuid(),
		name: 'iPhone 12 Mini (Blue, 64 GB)',
		description:
			'13.72 cm (5.4 inch) Super Retina XDR Display, 12MP + 12MP | 12MP Front Camera, A14 Bionic Chip with Next Generation Neural Engine Processor',
		image: 'https://rukminim1.flixcart.com/image/312/312/kg8avm80/mobile/r/2/r/apple-iphone-12-mini-dummyapplefsn-original-imafwgbfcswp9fh5.jpeg?q=70',
		brandName: 'Apple',
		mrp: '59,900',
		currentPrice: '49,999',
		categoryName: 'Mobiles',
		ratings: 5,
		tags: ['popular'],
		deals: 'Hot This Week 😍'
	},
	{
		_id: uuid(),
		name: 'iPhone 12 (Black, 64 GB)',
		description:
			'15.49 cm (6.1 inch) Super Retina XDR Display, 12MP + 12MP | 12MP Front Camera, A14 Bionic Chip with Next Generation Neural Engine Processor',
		image: 'https://rukminim1.flixcart.com/image/312/312/kg8avm80/mobile/r/h/z/apple-iphone-12-dummyapplefsn-original-imafwg8dqgncgbcb.jpeg?q=70',
		brandName: 'Apple',
		mrp: '65,900',
		currentPrice: '59,999',
		categoryName: 'Mobiles',
		ratings: 4,
		tags: ['popular'],
		deals: 'Hot This Week 😍'
	},
	{
		_id: uuid(),
		name: 'Galaxy Note 20 Ultra 5G (Mystic Black, 256 GB) (12 GB RAM)',
		description:
			'17.53 cm (6.9 inch) Quad HD+ Display, 108MP + 12MP + 12MP | 10MP Front Camera, Exynos Octa Core Processor',
		image: 'https://rukminim1.flixcart.com/image/312/312/kdhphu80/mobile/z/6/j/samsung-note-20-canvas-sm-n986bzkgins-original-imafudkhukrhaqgm.jpeg?q=70',
		brandName: 'Samsung',
		mrp: '1,16,000',
		currentPrice: '1,04,999',
		categoryName: 'Mobiles',
		ratings: 4,
		tags: ['popular'],
		deals: 'Hot This Week 😍'
	}
];
