import '@/styles/globals.css';
import '@/styles/Components.css';
import '@/styles/Timeline.css';
import '@/styles/Button.css';
import '@/styles/Animation.css';
import '@/styles/Input.css';
import '@/styles/Message.css';
import '@/styles/Dialog.css';

import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
