import Navbar from './Navbar';
import Footer from './Footer';

export default function Layout({ children }) {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex flex-col flex-1 max-w-screen-lg mx-auto">
        {children}
      </div>
      <Footer />
    </div>
  );
}
