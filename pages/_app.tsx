import type {AppProps} from 'next/app'
import 'tailwindcss/tailwind.css';

import '@/styles/globals.css';
import { AuthProvider } from '@/lib/auth';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider>
      <Component {...pageProps} />
    </AuthProvider>
  );
}

export default MyApp;
