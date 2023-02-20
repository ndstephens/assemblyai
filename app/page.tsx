import Banner from '@ui/banner';
import Footer from '@ui/footer';
import Header from '@ui/header';
import Store from '@ui/store';

export default function Home() {
  return (
    <>
      <Header />
      <main className="z-[100]">
        <Banner />
        <Store />
      </main>
      <Footer />
    </>
  );
}
