import Link from 'next/link';
import styled from "styled-components";
import { useRouter } from 'next/router';

const HeadContationer = styled.header`
  transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  box-shadow: rgb(0 0 0 / 20%) 0px 2px 4px -1px, rgb(0 0 0 / 14%) 0px 4px 5px 0px, rgb(0 0 0 / 12%) 0px 1px 10px 0px;
  display: flex;
  flex-direction: column;
  width: 100%;
  box-sizing: border-box;
  flex-shrink: 0;
  position: fixed;
  z-index: 1100;
  top: 0px;
  left: auto;
  right: 0px;
  background-color: rgba(0, 0, 0, 0.87);
  color: rgba(0, 0, 0, 0.87);
`;

const NavContainer = styled.div`
  position: relative;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  padding-left: 16px;
  padding-right: 16px;
  min-height: 56px;
  background-color: rgb(17, 18, 32);
`;

export default function NavBar() {
  const router = useRouter();
  console.log(router);
  return (
    <HeadContationer>
      <NavContainer>
      <Link href='/'>
        <a>Home Sweet Home </a>
      </Link>
      <Link href='/about'>
        <a>About this</a>
      </Link>
      </NavContainer>
    </HeadContationer>
  );
}