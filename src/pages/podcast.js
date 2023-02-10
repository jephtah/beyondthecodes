import { Input, PodcastCard, PodcastPlay } from "@/component";
import { Button } from "@/component/Button";
import Layout from "@/layout";
import { Container } from "@/layout/Container";
import Head from "next/head";
import styled from "styled-components";

const ImageContainer = styled.img`
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: -1;
  margin-top: 0;
`;
const Header = styled.header`
  text-align: center;
  color: white;
  font-size: 40px;
  line-height: 70px;
  font-weight: 300;
  padding: 0 10rem;
  height: 100vh;
  margin: auto 0;
  span {
    color: ${({ theme }) => theme.colors.primary};
  }
`;
const PodcastSection = styled.section`
  & > div:nth-child(1) {
    display: flex;
    justify-content: space-between;
    font-size: 35px;
    font-weight: 800;
    line-height: 70x;
    > * {
      width: 25%;
    }
  }
`;
const Flex = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  //   margin-bottom: 6rem;
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

const SectionOneDiv = styled(Flex)`
  position: relative;
  margin-top: 15rem;
  img {
    bottom: -20%;
    position: absolute;
    right: 0;
  }
  & > div:nth-child(1) {
    padding-bottom: 4rem;
    color: ${({ theme }) => theme.colors.text};
    font-size: 18px;
    line-height: 37px;
  }
  @media screen and (max-width: 1000px) {
    margin: 4rem 0;
    img {
      position: relative;
      bottom: 0;
    }
    & > div:nth-child(1) {
      padding-bottom: 1rem;
    }
  }
`;
const SectionTwoDiv = styled(Flex)`
  background-color: #fafafa;
  padding: 7rem 10rem;
  h2 {
    font-weight: 800;
    font-size: 35px;
    line-height: 42px;
    margin-bottom: 3rem;
  }
  p {
    font-weight: 400;
    font-size: 18px;
    line-height: 37px;
    color: ${({ theme }) => theme.colors.text};
  }
  form {
    display: flex;
    flex-direction: column;
    margin: 0 2rem;
    & > * {
      margin: 1rem 0;
    }
    button {
      width: 100%;
    }
  }
  @media screen and (max-width: 1000px) {
    padding: 2rem;
    h2 {
      font-size: 24px;
      line-height: 32px;
    }
    p {
      font-size: 14px;
      line-height: 27px;
    }
    form {
      margin: 0;
    }
  }
`;
const Podcast = () => {
  return (
    <>
      <Head>
        <title>Beyond The Codes</title>
        <meta name="description" content="Beyond the Codes" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ImageContainer src="./images/podcast-bg.png" alt="" />
      <Layout podcast>
        <Container>
          <Header>
            {/* <h1>
              Listen to podcast <span>episodes</span>
            </h1> */}
          </Header>
          <SectionOneDiv>
            <div>
              <p>
                The Beyond The Codes Podcast is a bi-weekly podcast that focuses
                on the non-technical aspects of lead technical roles such as
                CTO, Technical Director, VP of Engineering, Lead Developer and
                more. Our host, Jephtah Uche, the co-founder and CTO of Kippa,
                is an expert in the field and brings a wealth of knowledge and
                experience to the podcast.
              </p>
            </div>
            <div>
              <img src="./images/podcast-section.png" alt="" />
            </div>
          </SectionOneDiv>
          <SectionTwoDiv>
            <div>
              <h2>Get new episodes delivered to your inbox.</h2>
              <p>
                Subscribe on Apple podcast, Spotify, Google play or your
                favourite platform.
              </p>
            </div>
            <form>
              <Input placeholder="First Name" secondary />
              <Input placeholder="Last Name" secondary />
              <Input placeholder="Email" secondary />
              <Button value="Subscribe" />
            </form>
          </SectionTwoDiv>
        </Container>
      </Layout>
    </>
  );
};

export default Podcast;
