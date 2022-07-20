import NavBar from './NavBar';
import Top from './Top';
import Chest from './Chest';

export default function Layout({ children }) {
  return (
    <>
      <NavBar />
      <div>{children}</div>
      <Top />
      <Chest />
    </>
  );
}
