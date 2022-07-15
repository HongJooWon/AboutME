import NavBar from './NavBar';
import Top from './Top';
import Chest from './Chest';

export default function Layout({ children }) {
  return (
    <>
      <NavBar />
      <div class="">{children}</div>
      <Top />
      <Chest />
    </>
  );
}
