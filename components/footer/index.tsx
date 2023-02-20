import MaxWidth from '@ui/maxWidth';

export default function Footer() {
  return (
    <div className="bg-gradient-to-b from-gray-100 to-gray-200">
      <MaxWidth>
        <div className="flex h-32 items-end justify-center pb-8">
          <p className="text-base text-gray-400">
            &copy; 2023 AssemblyAI, Inc.
          </p>
        </div>
      </MaxWidth>
    </div>
  );
}
