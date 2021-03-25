import Navbar from './Navbar';
import Footer from './Footer';
import DashboardNav from './DashboardNav';
import { useAuth } from '@/lib/auth';

export default function Layout({ children }) {
  const { user } = useAuth();

  if (!user)
    return (
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <div className="flex flex-col flex-1 max-w-screen-lg mx-auto">
          {children}
        </div>
        <Footer />
      </div>
    );

  return (
    <div className="flex flex-col min-h-screen">
      <DashboardNav />
      <div className="flex flex-col flex-1 max-w-screen-lg mx-auto">
        {children}
      </div>
      <Footer />
    </div>
  );
}
