import { Input, PodcastCard, PodcastPlay } from "@/component";
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
      <Layout overflowFooter={false}>
        <Container>
          <Header>
            <h1>
              Listen to podcast <span>episodes</span>
            </h1>
          </Header>
          <PodcastSection>
            <div>
              <h2>Podcasts</h2>
              <Input placeholder="Search podcast" />
            </div>
            <PodcastPlay />
            <div>
              <PodcastCard />
              <PodcastCard /> <PodcastCard /> <PodcastCard /> <PodcastCard />
            </div>
          </PodcastSection>
        </Container>
      </Layout>
    </>
  );
};

export default Podcast;
