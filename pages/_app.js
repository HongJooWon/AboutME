<<<<<<< HEAD
import Layout from '../components/Layout';
import 'bootstrap/dist/css/bootstrap.css';
import Head from 'next/head';


export default function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Head>
        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
          integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm"
          crossOrigin="anonymous"
        />
      </Head>
      <Component {...pageProps} />
    </Layout>
  );
}
=======
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
>>>>>>> 288070b483ae06d2dbad75e6737f5c4615d39fd8
