'use client';

import { Popover } from '@headlessui/react';
import { AnimatePresence, motion as m } from 'framer-motion';

import CartIcon from '@assets/icons/cart.svg';
import { Product, products } from '@lib/products';
import { useProducts, useStoreActions } from '@lib/state';
import CartCard from '@ui/cartCard';

export default function Cart() {
  const productsIdsInCart = useProducts();
  const numProductsInCart = productsIdsInCart.length;
  const cartIsEmpty = !numProductsInCart;
  // TODO: why is it still returning undefined as a possibility ?
  const productsInCart = productsIdsInCart
    .map((productId) => products.find((product) => product.id === productId))
    .filter((product) => product !== undefined) as Product[];
  const cartTotal = productsInCart.reduce(
    (total, product) => total + product.price,
    0
  );

  return (
    <Popover className="relative">
      {({ open }) => (
        <>
          <Popover.Button
            aria-label="Shopping cart"
            className="group relative isolate aspect-square w-11 rounded-full"
          >
            <div className="absolute -z-10 h-full w-full rounded-full bg-secondary-500 group-hocusv:animate-single-ping" />
            <div className="flex h-full w-full items-center justify-center rounded-full bg-secondary-500 transition-all group-active:scale-95 group-hocusv:bg-secondary-600">
              <CartIcon
                aria-hidden
                className="mr-[3px] mt-[1px] w-5 text-white"
              />
            </div>
            <CartNumBadge numItems={numProductsInCart} />
          </Popover.Button>

          <AnimatePresence>
            {open && (
              <Popover.Panel
                static
                as={m.div}
                initial={{ opacity: 0, height: 0 }}
                animate={{
                  opacity: 1,
                  height: 'auto',
                  transition: {
                    duration: 0.6,
                    type: 'spring',
                  },
                }}
                exit={{
                  opacity: 0,
                  height: 0,
                  transition: {
                    duration: 0.6,
                    type: 'spring',
                  },
                }}
                className="absolute top-[calc(100%+12px)] right-0 max-h-[calc(100lvb-160px)] overflow-y-auto  overscroll-contain rounded-3xl bg-gray-100 shadow-2xl"
              >
                <div className="relative flex max-h-full w-[300px] flex-col px-5 py-8">
                  <CartHeader itemTotal={numProductsInCart} />
                  {!cartIsEmpty && <CartWrapper products={productsInCart} />}
                  {cartIsEmpty && <EmptyCart />}
                  <CartTotal priceTotal={cartTotal} />
                </div>
              </Popover.Panel>
            )}
          </AnimatePresence>
        </>
      )}
    </Popover>
  );
}

//* =============================================
//*               CART NUM BADGE                =
//*==============================================
function CartNumBadge({ numItems }: { numItems: number }) {
  return (
    <div className="absolute -bottom-1 right-[-7px] flex aspect-square w-5 items-center justify-center rounded-full bg-white leading-none">
      <span className="text-xs font-semibold tabular-nums leading-none text-secondary-500">
        {numItems}
      </span>
    </div>
  );
}

//* =============================================
//*                 CART HEADER                 =
//*==============================================
function CartHeader({ itemTotal }: { itemTotal: number }) {
  const { emptyStore } = useStoreActions();

  return (
    <div className="flex items-baseline justify-between px-1">
      <h2 className="text-sm font-semibold text-gray-700">My Cart</h2>
      <button
        type="button"
        onClick={emptyStore}
        className="rounded-md text-sm font-medium text-secondary-500 transition-colors hover:text-secondary-600"
      >
        Clear(<span className="tabular-nums">{itemTotal}</span>)
      </button>
    </div>
  );
}

//* =============================================
//*                 CART WRAPPER                =
//*==============================================
function CartWrapper({ products }: { products: Product[] }) {
  return (
    <m.ul
      layout
      layoutRoot
      role="list"
      className="flex flex-1 flex-col pt-8 pb-4"
    >
      <AnimatePresence initial={false}>
        {products.map((product) => (
          <CartCard key={product.id} product={product} />
        ))}
      </AnimatePresence>
    </m.ul>
  );
}

//* =============================================
//*                 EMPTY CART                  =
//*==============================================
function EmptyCart() {
  return (
    <div className="flex w-full flex-col items-center justify-center py-24">
      <p className="pb-4 text-3xl font-bold text-primary-800">Empty Cart</p>
      <p className="text-center font-semibold leading-5 text-gray-400">
        Your cart is still empty. Please browse from our great selection.
      </p>
    </div>
  );
}

//* =============================================
//*                 CART TOTAL                  =
//*==============================================
function CartTotal({ priceTotal }: { priceTotal: number }) {
  return (
    <div className="flex items-baseline justify-between border-t border-gray-400 pt-6">
      <span className="pl-1 text-sm font-bold  text-gray-500">Total:</span>
      <span className="pr-3 text-xl font-semibold tabular-nums text-gray-800">
        $ {priceTotal}
      </span>
    </div>
  );
}
