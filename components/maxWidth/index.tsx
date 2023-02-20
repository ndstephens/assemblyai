interface MaxWidthProps {
  children: React.ReactNode;
}

export default function MaxWidth({ children }: MaxWidthProps) {
  return <div className="mx-auto max-w-[1100px] px-4 xs:px-8">{children}</div>;
}
