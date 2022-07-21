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
    padding: 90px 24px;
    align-items: center;
`;

const Profile = styled.div`
    width: 50%;
    margin-left: 40px;

`;

const Div = styled.div`
    padding-top: 16%;
`;

export default function Chest() {
  const router = useRouter();
  console.log(router);
  return (
    <ChestSection>
        <div className='text-2xl font-semibold'>Juwon Hong</div>
        <ChestBox>
          <div className='d-flex justify-content-center'>
            <Image src={randomPic} alt="" width={300} height={300}/>
          <Profile>
            <Div>Handong Global University</Div>
            <Div>Computer Science & Global Entrepreneurship</Div>
            <Div>Web Noob</Div>
          </Profile>
          </div>
        </ChestBox>
    </ChestSection>
  );
}