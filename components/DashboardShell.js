import Link from 'next/link';

import { useAuth } from '@/lib/auth';
import DashboardBody from './DashboardBody';
import DashboardNav from './DashboardNav';
import Footer from './Footer';

const DashboardShell = ({ children }) => {
  const auth = useAuth();

  return (
    <>
      <DashboardNav />
      <DashboardBody>
        {children}
      </DashboardBody>
      <Footer />
    </>
  );
};

export default DashboardShell;
