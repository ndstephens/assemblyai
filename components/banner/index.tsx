import Image from 'next/image';

import MaxWidth from '@ui/maxWidth';

import ballcap from 'public/images/baseball-cap.jpg';
import tshirt from 'public/images/tshirt.jpg';

export default function Banner() {
  return (
    <div className="flex h-[min(calc(100lvb-80px),700px)] items-center bg-gradient-to-b from-gray-900 to-gray-800 text-gray-50">
      <MaxWidth>
        <div className="isolate mx-auto -mt-20 grid max-w-2xl grid-cols-[1fr,min-content] gap-y-8 xs:px-8 sm:grid-cols-4 sm:gap-y-10 md:px-0 lg:max-w-[876px] lg:grid-cols-5">
          {/* HEADER */}
          <h1 className="col-span-full text-4xl font-medium leading-[1.1] xs:text-5xl sm:col-span-4 md:text-6xl">
            The best assemblage of company swag is here.
          </h1>
          {/* BALL-CAP IMG */}
          <div className="relative -z-10 hidden lg:block">
            <div className="border-orbit-cw absolute top-8 right-0 aspect-square w-[115%] overflow-hidden rounded-full shadow-3xl shadow-primary-500 after:rounded-full">
              <Image
                src={ballcap}
                alt="White baseball cap with company logo printed on its front"
                placeholder="blur"
                className="rounded-full object-cover"
              />
            </div>
          </div>
          {/* T-SHIRT IMG */}
          <div className="relative -z-10 col-span-2 hidden sm:block">
            <div className="border-orbit-ccw relative mx-auto aspect-square w-[70%] overflow-hidden rounded-[2rem] shadow-3xl shadow-primary-800 before:[animation-duration:7s] after:rounded-[2rem]">
              <Image
                src={tshirt}
                alt="White t-shirt with company logo printed on its front"
                placeholder="blur"
                className="rounded-[2rem] object-cover"
              />
            </div>
          </div>
          {/* SUB-HEADER */}
          <p className="col-span-1 col-start-2 flex w-[230px] flex-col gap-y-2 text-gray-300 xs:w-[260px] xs:text-xl sm:col-span-2 sm:col-start-auto sm:mt-10 sm:w-auto md:ml-4 md:text-2xl">
            <span>No corny mouse pads or refrigerator magnets</span>
            <span className="ml-16">
              ...our <span className="text-primary-400">AI</span> knows better.
            </span>
          </p>
        </div>
      </MaxWidth>
    </div>
  );
}
