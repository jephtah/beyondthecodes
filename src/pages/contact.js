import Head from "next/head";
import Layout from "@/layout";
import styled from "styled-components";
import { Input } from "@/component";
import { Container } from "@/layout/Container";
import { Button } from "@/component/Button";
import { InstagramDark, LinkedInDark, TwitterDark } from "@/component/icons";
const Header = styled.header`
  height: 75vh;
  width: 100%;
  display: flex;
  justify-content: center;
  padding-top: 15rem;

  div {
    color: white;
    text-align: center;
    max-width: 50%;
    h1 {
      font-size: 80px;
      font-weight: 300;
      line-height: 70px;
      margin-bottom: 4rem;
    }
    p {
      font-size: 20px;
      line-height: 37px;
    }
  }
  @media screen and (max-width: 700px) {
    padding-top: 10rem;
    div {
      max-width: 90%;
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
const FormContainer = styled.section`
  background-color: #fafafa;
  padding: 3rem;
  margin-bottom: 7rem;
  h2 {
    font-size: 35px;
    line-height: 42px;
  }
  form {
    div:nth-child(1),
    div:nth-child(2) {
      display: flex;
      justify-content: space-between;
      & > * {
        width: 95%;
        margin: 0.5rem 0;
      }
    }
    textarea {
      width: 100%;
      //   resize: none;
      width: 100%;
      height: 263px;
      background-color: #fafafa;
      padding: 0.4rem;
      border: 1px solid rgba(135, 135, 135, 0.4);
    }
    div:last-child {
      display: flex;
      margin: 0.5rem 0;
      justify-content: flex-end;
    }
  }
  @media screen and (max-width: 700px) {
    padding: 1rem;
    h2 {
      font-size: 25px;
    }
  }
`;
const Flex = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 2rem 0;
  justify-content: center;
`;
const SocialCard = styled.div`
  padding: 2rem 6rem;
  margin: 0.5rem 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fafafa;
  cursor: pointer;
  p {
    margin-left: 1rem;
  }
`;
const SocialSection = styled.section`
  p {
    text-align: center;
  }
`;
const Contact = () => {
  return (
    <>
      <Head>
        <title>Beyond The Codes</title>
        <meta name="description" content="Beyond the Codes" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ImageContainer src="./images/contact-header-bg.png" alt="" />
      <Layout>
        <Container>
          <Header>
            <div>
              <h1>Contact Us</h1>
              <p>
                If you are interested in working with us, we would be delighted
                to explore collaboration options. If you also have ideas for
                future episodes or guests or any other suggestions, please let
                us know.
              </p>
            </div>
          </Header>
          <FormContainer>
            <h2>Kindly provide the information below</h2>
            <form>
              <div>
                <Input placeholder="Name" secondary />
                <Input placeholder="Email Address" secondary />
              </div>
              <div>
                <Input placeholder="Phone Number (Optional)" secondary />
                <Input placeholder="Choose a Subject Option" secondary />
              </div>

              <textarea placeholder="Enter your message here"></textarea>
              <div>
                <Button value="Submit" />
              </div>
            </form>
          </FormContainer>
          <SocialSection>
            <p>
              Follow us on Twitter, LinkedIn, Instagram and tag us to your posts
              using the <strong>#BTCPod</strong> hashtag.
            </p>
            <Flex>
              <SocialCard>
                <TwitterDark /> <p>Twitter</p>
              </SocialCard>
              <SocialCard>
                <InstagramDark /> <p>Instagram</p>
              </SocialCard>
              <SocialCard>
                <LinkedInDark /> <p>LinkedIn</p>
              </SocialCard>
            </Flex>
          </SocialSection>
        </Container>
      </Layout>
    </>
  );
};

export default Contact;
