import '@fortawesome/fontawesome-svg-core/styles.css'
import "tailwindcss/tailwind.css";
import React from 'react';

export default function MyApp({ Component, pageProps }) {
  return (
      <Component {...pageProps} />
  );
}


