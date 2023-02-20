import Cart from '@ui/cart';
import Logo from '@ui/logo';
import MaxWidth from '@ui/maxWidth';

export default function Header() {
  return (
    <div className="sticky top-0 z-[200] select-none bg-gray-900/90 text-gray-50 backdrop-blur">
      <MaxWidth>
        <header className="flex h-20 items-center justify-between">
          <nav className="flex items-center">
            <Logo />
          </nav>
          <Cart />
        </header>
      </MaxWidth>
    </div>
  );
}
