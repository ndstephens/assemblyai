import Link from 'next/link';

import LogoIcon from '@assets/icons/logo_dark.svg';

export default function Logo() {
  return (
    <div className="flex items-center">
      <Link href="/" className="rounded p-1">
        <LogoIcon className="w-[140px] xs:w-[160px]" />
      </Link>
      <span className="ml-2 mt-[4px] text-sm font-bold text-secondary-500 xs:mt-[5px] xs:text-base">
        Store
      </span>
    </div>
  );
}
