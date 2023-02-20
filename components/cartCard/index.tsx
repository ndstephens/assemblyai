import Image from 'next/image';

import { motion as m } from 'framer-motion';

import DeleteIcon from '@assets/icons/x.svg';
import { Product } from '@lib/products';
import { useStoreActions } from '@lib/state';

interface CartCardProps {
  product: Product;
}

export default function CartCard({ product }: CartCardProps) {
  const { removeProduct } = useStoreActions();

  return (
    <m.li
      layout
      initial={{ opacity: 0, height: 0 }}
      animate={{ opacity: 1, height: 'auto' }}
      exit={{ opacity: 0, height: 0 }}
      className="relative"
    >
      <div className="pb-4">
        <div className="flex justify-between overflow-hidden rounded-lg bg-gray-200">
          <div className="relative aspect-square h-20 overflow-hidden rounded-l-lg">
            <Image
              src={product.imgUrl}
              alt={product.imgAlt}
              fill
              className="object-cover"
            />
          </div>
          <div className="flex h-full flex-col items-end gap-y-2 py-2 pr-3 pl-5">
            <h3 className="text-sm font-light tracking-wide text-gray-500">
              {product.title}
            </h3>
            <p className="text-xl font-medium tabular-nums text-gray-800">
              $ {product.price}
            </p>
          </div>
        </div>
      </div>

      <button
        type="button"
        aria-label="Delete from cart"
        onClick={() => removeProduct(product.id)}
        className="group absolute -top-1 -left-2 isolate aspect-square w-6 rounded-full"
      >
        <div className="absolute -z-10 h-full w-full rounded-full bg-gray-500 group-hocusv:animate-single-ping" />
        <div className="flex h-full w-full items-center justify-center rounded-full bg-gray-400 transition-all group-active:scale-95 group-hocusv:bg-gray-500">
          <DeleteIcon aria-hidden className="w-4 text-white" />
        </div>
      </button>
    </m.li>
  );
}
