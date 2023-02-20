export type Product = {
  id: number;
  title: string;
  price: number;
  imgUrl: string;
  imgAlt: string;
};

export const products: Product[] = [
  {
    id: 1,
    title: 'Notebook',
    price: 15,
    imgUrl: '/images/notebook.jpg',
    imgAlt:
      'White hardbound paper notebook with company name and logo printed on lower right corner of the cover.',
  },
  {
    id: 2,
    title: 'Tote Bag',
    price: 35,
    imgUrl: '/images/tote-bag.jpg',
    imgAlt:
      'White canvas tote bag with company name and logo printed near the top center on one side.',
  },
  {
    id: 3,
    title: 'Baseball Cap',
    price: 25,
    imgUrl: '/images/baseball-cap.jpg',
    imgAlt: 'White baseball cap with company logo printed on its front.',
  },
  {
    id: 4,
    title: 'T-Shirt',
    price: 25,
    imgUrl: '/images/tshirt.jpg',
    imgAlt:
      'White cotton t-shirt, short-sleeved, with company name and logo printed across chest on front of shirt.',
  },
  {
    id: 5,
    title: 'Coffee Mug',
    price: 15,
    imgUrl: '/images/mug-round.jpg',
    imgAlt:
      'White coffee mug, short and round, with company logo printed on it.',
  },
  {
    id: 6,
    title: 'Phone Case',
    price: 30,
    imgUrl: '/images/phone-case.jpg',
    imgAlt:
      'Clear plastic cell phone protective case with company name and logo printed on its center back.',
  },
];
