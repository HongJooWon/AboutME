import Link from 'next/link';
import 'bootstrap/dist/css/bootstrap.css';
import Image from "next/image";
import randomPic from '../public/fff.png';
import { useRouter } from 'next/router';
import styled from "styled-components";

const ChestSection = styled.div`
    display: flex;
    flex-direction: column;
    padding: 100px 24px;
    align-items: center;
    height: calc(100vh - 58px);
`;

const ChestBox = styled.div`
    display: flex;
    flex-direction: column;
    padding: 100px 24px;
    align-items: center;
`;

export default function Chest() {
  const router = useRouter();
  console.log(router);
  return (
    <ChestSection>
        <h2>홍주원(弘柱元)</h2>
        <ChestBox>
        <div ><Image src={randomPic} alt="" width={300} height={300}/></div>
        <div >...</div>
        </ChestBox>
    </ChestSection>
  );
}