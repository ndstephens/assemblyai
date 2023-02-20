import '@styles/globals.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" dir="ltr">
      <head />
      <body
        className="isolate flex h-full flex-col bg-gray-900"
        style={{ WebkitTapHighlightColor: 'transparent' }}
      >
        {children}
      </body>
    </html>
  );
}
