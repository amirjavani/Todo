import Footer from "./Footer";
import Header from "./Header";

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <div className="mx-8 md:mx-20">{children}</div>
      <Footer />
    </>
  );
}
