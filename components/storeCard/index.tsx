import Image from 'next/image';

import { Product } from '@lib/products';

import AddButton from './AddButton';

interface StoreCardProps {
  product: Product;
}

export default function StoreCard({ product }: StoreCardProps) {
  return (
    <li className="max-w-[320px] flex-1 basis-[250px] rounded-2xl bg-gray-100 p-2 shadow-soft">
      <div className="relative aspect-square w-full overflow-hidden rounded-xl">
        <Image
          src={product.imgUrl}
          alt={product.imgAlt}
          fill
          className="object-cover"
        />
      </div>
      <div className="relative px-5 py-2">
        <h3 className="pb-2 text-[15px] font-medium tracking-wide text-gray-500">
          {product.title}
        </h3>
        <p className="text-xl font-semibold tabular-nums text-gray-800">
          $ {product.price}
        </p>
        <AddButton productId={product.id} />
      </div>
    </li>
  );
}
