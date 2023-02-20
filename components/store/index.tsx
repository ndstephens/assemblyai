import { products } from '@lib/products';
import MaxWidth from '@ui/maxWidth';
import StoreCard from '@ui/storeCard';

export default function Store() {
  return (
    <div className="bg-gray-100">
      <MaxWidth>
        <div className="px-4 py-24 xs:px-8">
          <h2 className="mb-8 text-2xl font-semibold text-secondary-500">
            Browse Our Products
          </h2>
          <ul
            role="list"
            className="flex flex-wrap justify-evenly gap-x-8 gap-y-16"
          >
            {products.map((product) => (
              <StoreCard key={product.id} product={product} />
            ))}
          </ul>
        </div>
      </MaxWidth>
    </div>
  );
}
