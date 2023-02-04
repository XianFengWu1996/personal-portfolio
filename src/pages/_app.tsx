import '@/styles/globals.css';
import '@/styles/Components.css';
import '@/styles/Timeline.css';
import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
