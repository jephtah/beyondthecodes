import { useEffect } from "react";
import Head from "next/head";
import Layout from "@/layout";
import { Container } from "@/layout/Container";
import { Input } from "@/component";
import { Arrow, MicrophoneIcon, Play } from "@/component/icons";
import { Button } from "@/component/Button";
import styled from "styled-components";
import { SearchIcon } from "@/component/icons";
import { useAnimation, motion } from "framer-motion";
// import { useInView } from "react-intersection-observer";
import Animate from "@/layout/Animate";

const HeaderContainer = styled.header`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  flex-wrap: wrap;
  margin-bottom: 6rem;
  h1 {
    font-size: 60px;
    line-height: 70px;
    letter-spacing: 1.1%;
    font-weight: 800;
    // margin-bottom: 3rem;
  }
  p {
    font-size: 24px;
    font-weight: 400;
  }
  @media screen and (max-width: 1000px) {
    grid-template-columns: 1fr;
  }
`;
const ImageContainer = styled.div`
  position: relative;
  div {
    position: absolute;
    top: 60%;
    left: -5%;
    background-color: black;
    padding: 1.5rem;
    display: flex;
    align-items: center;
  }
  img {
    height: 100%;
    width: 100%;
  }
  div:nth-child(2) {
    margin-right: 10rem;
  }
`;
const HeaderTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-content: space-between;
  justify-content: space-between;
  margin-right: 4.43rem;
  & > div:nth-child(2) {
    width: 85%;
  }
  h1 {
    // margin-right: 5rem;
    margin-bottom: 4rem;
  }
  p {
    color: #878787;
  }
  @media screen and (max-width: 1000px) {
    margin-right: 0;
    margin-bottom: 1rem;
    & > div:nth-child(2) {
      width: 100%;
    }
    p {
      margin-bottom: 1rem;
    }
  }
`;

const SeeAllEpisodesContainer = styled.section`
  background-image: url("./images/microphone-bg.png");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  margin-bottom: 6rem;
  padding: 5rem;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  align-content: space-between;
  p {
    color: white;
    line-height: 37px;
    font=-size: 18px;
    margin-bottom: 2rem;
  }
  @media screen and (max-width: 700px) {
    padding: 3rem 2rem;
  }
`;
const Flex = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  margin-bottom: 6rem;
  flex-wrap: wrap;
  justify-content:space-between:
  img {
    width: 100%;
  }
  @media screen and (max-width: 1000px) {
    grid-template-columns: 1fr;
    img {
      width: 100%;
    }
  }
`;
const FlexColumn = styled.div`
  h3 {
    color: ${({ theme }) => theme.colors.primary};
    font-size: 35px;
    line-height: 70px;
  }
  div:nth-child(1) {
    height: 10%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    width: fix-content;
    & > * {
      cursor: pointer;
    }
    span {
      border-radius: 50%;
      border: 1px solid #878787;
      justify-content: center;
      align-items: center;
      padding: 3px 4px;
      margin-left: 0.5rem;
    }
  }
  div:nth-child(2) {
    background-color: rgba(244, 244, 244, 0.5);
    padding: 5rem;
    height: 90%;
    padding: 3rem;

    p {
      color: #878787;
      font-size: 17px;
      line-height: 37px;
      padding-bottom: 0;
    }
  }
  @media screen and (max-width: 1000px) {
    div:nth-child(1) {
      margin: 1rem 0;
    }
  }
`;
const LatestEpisodeImageContainer = styled.div`
  position: relative;
  background: linear-gradient(360deg, #000000 -14.94%, rgba(0, 0, 0, 0) 77.34%);
  display: flex;
  justify-content: flex-start;

  img {
    z-index: -1;
    width: 100%;
    height: 100%;
    position: absolute;
  }
  & > div {
    // max-width: 60%;
    margin-top: 3rem;
    & > * {
      margin-top: 1rem;
    }
    p {
      color: white;
    }
    p:nth-child(2) {
      font-size: 28px;
      font-weight: 700;
    }
    padding: 5rem;
    padding-top: 10rem;
  }
  @media screen and (max-width: 600px) {
    & > div {
      padding: 5rem 2rem;
    }
  }
`;
const SectionOneDiv = styled.div`
  padding: 3rem 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: start;
  p {
    font-size: 18px;
    line-height: 37px;
    color: ${({ theme }) => theme.colors.text};
    span {
      color: ${({ theme }) => theme.colors.primary};
    }
  }
  @media screen and (max-width: 1000px) {
    padding: 0rem;
    p {
      margin-bottom: 1rem;
    }
  }
`;

const SectionTwoDiv = styled.div`
  h2 {
    font-size: 35px;
    line-height: 70px;
    color: ${({ theme }) => theme.colors.primary};
  }
  p {
    font-size: 18px;
    line-height: 37px;
    color: ${({ theme }) => theme.colors.text};
  }
  br {
    display: block;
    content: "";
    margin: 4rem;
  }
  @media screen and (max-width: 1000px) {
    br {
      margin: 1rem;
    }
    p {
      margin-bottom: 1rem;
    }
  }
`;
const AboutHost = styled(Flex)`
  div:last-child {
    display: flex;
    justify-content: flex-end;
  }
`;

const LatestEpisodeTextContainer = styled(FlexColumn)``;

const SectionThreeDiv = styled.div``;

export default function Home() {
  return (
    <>
      <Head>
        <title>Beyond The Codes</title>
        <meta name="description" content="Beyond the Codes" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <main>
          <Container>
            <HeaderContainer>
              <HeaderTextContainer>
                <div>
                  <h1>Growing Visionary Technical Leaders</h1>
                  <p>
                    Equipping technical professionals with soft skills by top
                    technical leaders.
                  </p>
                </div>
                <Input
                  placeholder="Search Podcast..."
                  iconComponent={SearchIcon}
                />
              </HeaderTextContainer>
              <ImageContainer>
                <div>
                  <MicrophoneIcon />
                </div>
                <img src="./images/header-image-1.png" alt="header image" />
              </ImageContainer>
            </HeaderContainer>

            <Animate>
              <Flex>
                <img src="./images/microphone.png" alt="microphone" />
                <SectionOneDiv>
                  <p>
                    Join <span>Jephtah Uche</span>, Kippa’s Co-founder and
                    Founding CTO as he speaks with some of Africa’s most
                    seasoned CTOs and Tech Leads to provide in-depth research
                    and expert analysis on the technical aspects of lead
                    technical roles.
                  </p>
                  <Button value="See all Episodes" />
                </SectionOneDiv>
              </Flex>
            </Animate>
            <Animate>
              <AboutHost>
                <SectionTwoDiv>
                  <h2>About the host</h2>
                  <p>
                    Jephtah Uche is a technology leader with over a decade of
                    experience leading teams from different points towards
                    achieving several outstanding objectives. He has a deep
                    interest in scaling technology products and teams whilst
                    applying the best practices. His greatest strength lies in
                    taking products from 0 - 1. <br />
                    As the CTO and co-founder of Kippa, Jephtah has trained
                    engineers to become awesome leaders and even more amazing
                    managers, and is motivated to do the same for a wider
                    spectrum of engineers using this community. 
                    <br />
                    Jephtah will shine the spotlight on some of the most
                    experienced technical leaders and lead a wide range of
                    discussions that are critical for current and aspiring tech
                    leaders. 
                  </p>
                </SectionTwoDiv>
                <div>
                  <img src="./images/jeph.png" alt="Jephtha" />
                </div>
              </AboutHost>
            </Animate>
            <Animate>
              <SeeAllEpisodesContainer>
                <p>
                  Whether you&apos;re a tech lead, a manager, or a developer
                  looking to advance in your career, the Beyond The Codes
                  Podcast is the perfect resource for you. Be sure to tune in
                  bi-weekly for the latest episode and don’t forget to follow us
                  on social media for additional content and updates.
                </p>
                <Button value="See all Episodes" />
              </SeeAllEpisodesContainer>
            </Animate>
            <Flex>
              <LatestEpisodeImageContainer>
                <img src="./images/gymming.png" alt="gym" />
                <div>
                  <p>Eps. 01 - 45 Min</p>
                  <p>How to build your personal resilience.</p>
                  <Button
                    value="Start listening"
                    secondary
                    iconComponent={Play}
                  />
                </div>
              </LatestEpisodeImageContainer>
              <FlexColumn>
                <div>
                  <p>See all episodes</p>
                  <span>
                    <Arrow />
                  </span>
                </div>
                <div className="section2">
                  <h3>Latest Episode</h3>
                  <p>
                    This section is a short description of this latest episode
                    and what people should should expect to learn and also the
                    name of the guest interviewed.
                  </p>
                </div>
              </FlexColumn>
            </Flex>
          </Container>
        </main>
      </Layout>
    </>
  );
}
