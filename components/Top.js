import { useRouter } from 'next/router';
import styled from "styled-components";

const TopSection = styled.div`
  display: flex;
  flex-direction: column;
  background-color: rgb(0, 0, 0);
  width: 100%;
  position: relative;
  height: calc(100vh);
`;

const MovieBox = styled.video`
  object-fit: cover;
  opacity: 0.5;
  filter: alpha(opacity=50);
  height: 100%;
`;

const IntroBox = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: flex-end;
  color: rgb(255, 255, 255);
  font-size: 20px;
  bottom: 42%;
`;

export default function Top() {
  const router = useRouter();
  console.log(router);
  return (
    <TopSection>
      <MovieBox autoPlay muted loop>
        <source src="https://res.cloudinary.com/dhkrgqqaf/video/upload/v1658366594/ex1/Laptop_-_1625_wmi3c6.mp4" type="video/mp4"/>
      </MovieBox>
      <IntroBox>
        <p>안녕하세요</p>
        <p>이 웹사이트는 제 첫 웹어플리케이션입니다</p>
      </IntroBox>
        {/* <Image src={randomPic} alt="" width={500} height={800}/> */}
    </TopSection>
    //https://drive.google.com/file/d/1B01PaLFETjxjQ8yJAGdF9hv6oWx26Gq40g/view?usp=sharing
  );
}