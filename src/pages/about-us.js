import styled from "styled-components";
import Layout from "@/layout";
import { Container } from "@/layout/Container";
import Head from "next/head";
import { Button } from "@/component/Button";

const ImageContainer = styled.img`
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: -1;
  margin-top: 0;
  object-fit: cover;
`;
const Header = styled.header`
  height: 95vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-top: 20rem;
  margin-bottom: 20rem;
  overflow: hidden;
  div:nth-child(1) {
    color: white;
    text-align: center;
    max-width: 50%;
    margin: 6rem auto;
    img {
      overflow: hidden;
    }
    h1 {
      font-size: 80px;
      font-weight: 300;
      line-height: 70px;
      margin-bottom: 4rem;
      color: ${({ theme }) => theme.colors.primary};
    }
    p {
      font-size: 20px;
      line-height: 37px;
    }
  }
  @media screen and (max-width: 700px) {
    // height: 100vh;
    margin-bottom: 2rem;
    padding-top: 5rem;
    div:nth-child(1) {
      padding-top: 0rem;
      max-width: 90%;
      margin: 1rem auto;
      h1 {
        font-size: 50px;
      }
      p {
        font-size: 16px;
        line-height: 27px;
      }
    }
  }
`;
const Grid = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  margin-bottom: 6rem;
  flex-wrap: wrap;
  justify-content:space-between:
  @media screen and (max-width: 1000px) {
    grid-template-columns: 1fr;
  }
`;

const VisionSection = styled(Grid)`
  margin: 10rem 0;
  & > div:nth-child(1) {
    position: relative;
    img {
      width: 80%;
    }
    & > div:nth-child(2) {
      height: 100%;
      background-color: ${({ theme }) => theme.colors.primary};
      position: absolute;
      width: 80%;
      height: 70%;
      left: 20%;
      top: 40%;
      z-index: -2;
    }
    & > div:nth-child(3) {
      background-color: #e0e0e0;
      height: 15%;
      position: absolute;
      width: 50%;
      z-index: -1;
      top: 30%;
      right: 10%;
    }
  }
  & > div:last-child {
    padding: 7rem;
    h3 {
      font-size: 35px;
      line-height: 70px;
    }
    p {
      color: #878787;
      font-size: 18px;
      line-height: 37px;
    }
  }
  @media screen and (max-width: 1000px) {
    & > div:nth-child(1) {
      & > div:nth-child(2) {
        width: 70%;
      }
    }
  }
  & > div:last-child {
    padding: 2rem;
  }
`;

const MissionSection = styled.section`
  margin: 10rem 0;
  h2 {
    text-align: center;
    font-size: 35px;
  }
  & > div {
    display: grid;
    justify-content: center;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 3rem;
    margin: 6em 0;
    div {
      background-color: #fafafa;
      padding: 4rem;
      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;
      p {
        color: #878787;
      }
      span {
        display: flex;
        justify-content: center;
        align-items: center;
        position: absolute;
        background-color: ${({ theme }) => theme.colors.primary};
        color: white;
        padding: 1rem 1.5rem;
        top: -10%;
        left: 10%;
      }
    }
  }
  @media screen and (max-width: 500px) {
    & > div {
      grid-template-columns: 1fr;
    }
  }
`;
const LastSection = styled(Grid)`
  margin: 6rem 0;
  & > div:nth-child(1) {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: start;
    p {
      color: #878787;
      font-size: 18px;
      line-height: 37px;
      margin-right: 7rem;
    }
  }
  & > div:nth-child(2) {
    position: relative;
    display: flex;
    justify-content: flex-end;
    img {
      width: 80%;

      top: -20%;
      right: 0;
    }

    & > div:nth-child(2) {
      height: 100%;
      background-color: ${({ theme }) => theme.colors.primary};
      position: absolute;
      width: 80%;
      height: 70%;
      left: 0;
      bottom: -10%;
      z-index: -2;
    }
    & > div:nth-child(3) {
      background-color: #e0e0e0;
      height: 15%;
      position: absolute;
      width: 50%;
      z-index: -1;
      top: 30%;
      left: 10%;
    }
  }
  @media screen and (max-width: 700px) {
    & > div:nth-child(1) {
      margin: 0;
      p {
        margin-right: 0;
        margin-bottom: 1.5rem;
      }
    }

    & > div:nth-child(2) {
      width: 90%;
    }
  }
`;
const Box = styled.div`
  background-color: transparent;
  position: absolute;
  width: 100%;
  height: 13rem;
  bottom: 0;
  z-index: 4;
  display: flex;
  align-items: flex-end;
  width: 100vw;
  // overflow: hidden;
  div {
    background-color: white;
    width: 50%;
    height: 100%;
    margin: 0 0.3rem;
  }
`;
const AboutUs = () => {
  const heights = [100, 20, 50, 70, 30, 60, 80];
  return (
    <>
      <Head>
        <title>Beyond The Codes</title>
        <meta name="description" content="Beyond the Codes" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ImageContainer src="./images/about-us-bg.png" alt="" />
      <Box>
        {new Array(10)
          .fill(0)
          .map((i) =>
            heights.map((height) => (
              <div style={{ height: height + "%" }} key={height}></div>
            ))
          )}

        {/* {heights.map((height) => (
          <div style={{ height: height + "%" }} key={height}></div>
        ))} */}
      </Box>
      <Layout>
        <Container>
          <Header>
            <div>
              <h1>About Us</h1>
              <p>
                Beyond The Codes is a media brand that spotlights technical
                leaders, getting them to share their stories, with the aim to
                inspire technical excellence in Africa that goes beyond the
                codes.
              </p>
            </div>

            <img src="./images/about-header.png" alt="" width="100%" />
          </Header>
          <VisionSection>
            <div>
              <img src="./images/vision-image-1.png" alt="" />
              <div></div>
              <div></div>
            </div>
            <div>
              <h3>Our Vision</h3>
              <p>
                To create a world where techies are more integrated and
                recognised.
              </p>
            </div>
          </VisionSection>

          <MissionSection>
            <h2>Our Mission</h2>
            <div>
              <div>
                <span>1</span>
                <p>
                  To provide a platform where we spotlight technical leaders and
                  their work.
                </p>
              </div>
              <div>
                <span>2</span>
                <p>
                  To provide a platform where technical people can learn about
                  skill sets that are outside their day to day work.
                </p>
              </div>
              <div>
                <span>3</span>
                <p>
                  To create a community where technical people can interact,
                  feel safe and grow their social and leadership skills.
                </p>
              </div>
            </div>
          </MissionSection>
          <LastSection>
            <div>
              <p>
                We aim to be the go-to resource for anyone looking to stay
                up-to-date on the latest trends and best practices in lead
                technical roles. Whether you&apos;re a seasoned veteran in the
                tech industry or just starting out, we are committed to
                producing high-quality content that is both informative and
                entertaining for all listeners.
              </p>
              <Button value="See all Episodes" />
            </div>
            <div>
              <img src="./images/mission-image-1.png" alt="" />
              <div></div>
              <div></div>
            </div>
          </LastSection>
        </Container>
      </Layout>
    </>
  );
};

export default AboutUs;
