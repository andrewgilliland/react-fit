import Footer from './Footer';

export default function Layout({ children }) {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex flex-col flex-1">{children}</div>
      <Footer />
    </div>
  );
}
