'use client';

import PlusIcon from '@assets/icons/plus.svg';
import { useProducts, useStoreActions } from '@lib/state';

interface AddButtonProps {
  productId: number;
}

export default function AddButton({ productId }: AddButtonProps) {
  const { addProduct } = useStoreActions();
  const productIdsInCart = useProducts();
  const isAlreadyInCart = productIdsInCart.includes(productId);

  return (
    <button
      type="button"
      aria-label="Add to cart"
      disabled={isAlreadyInCart}
      onClick={() => addProduct(productId)}
      className="group absolute bottom-2 right-4 isolate aspect-square w-9 rounded-full disabled:cursor-not-allowed"
    >
      <div className="absolute -z-10 h-full w-full rounded-full bg-primary-500 group-enabled:group-hocusv:animate-single-ping" />
      <div className="flex h-full w-full items-center justify-center rounded-full bg-primary-200 transition-all group-active:scale-95 group-enabled:bg-primary-400 group-enabled:group-hocusv:bg-primary-500">
        <PlusIcon aria-hidden className="w-6 text-white" />
      </div>
    </button>
  );
}
