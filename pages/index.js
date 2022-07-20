import Seo from '../components/Seo';
import Layout from '../components/Layout';
import NavBar from '../components/NavBar';

export default function Hello() {
  return (
    <>
      <Seo title='Home' />
      <NavBar />
      <Layout />
    </>
  );
}
