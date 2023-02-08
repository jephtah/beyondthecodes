import styled from "styled-components";
import {
  LogoWhite,
  ArrowRight,
  Instagram,
  Youtube,
  Facebook,
  Twitter,
} from "../icons";
import { Container } from "@/layout/Container";
import { Input } from "../Input";
import { NewsLetter } from "../NewsLetter";

const FooterDiv = styled.footer`
  background-color: black;
  padding: 2rem;
  padding-top: 6rem;
  position: relative;
  margin-top: 20rem;
  & > div {
    max-width: 70%;
    margin: 2rem auto;
    display: flex;
    justify-content: space-between;
    & > div {
      display: flex;
      & > div {
        margin: 0 2rem;
        p {
          font-size: 18px;
          font-weight: 600;
          margin: 1rem 0;
        }
        ul {
          list-style: none;
          li {
            color: white;
            margin: 1rem 0;
          }
        }
      }
    }
  }
  & > div:nth-child(2) {
    border-top: 1px solid #313131;
    padding-top: 2rem;
    display: flex;
    align-items: center;
    div {
      & > * {
        margin: 0.5rem;
      }
    }
  }
  p {
    color: ${({ theme }) => theme.colors.white};
  }
  @media screen and (max-width: 1000px) {
    padding: 2rem 0.5rem;
    & > div:nth-child(1) {
      padding: 0rem;
      // max-width: 90%;
      flex-wrap: wrap;
      justify-content: space-between;
      & > div {
        flex-wrap: wrap;
        justify-content: space-between;
        & > div {
          margin: 0 1rem;
        }
      }
    }
    & > div:nth-child(2) {
      max-width: 100%;
      div {
        p {
          font-size: 14px;
        }
        & > * {
          margin: 2px;
        }
      }
    }
  }
`;

const Footer = () => {
  return (
    <FooterDiv>
      <div>
        <NewsLetter />
        <LogoWhite />
        <div>
          <div>
            <p>Explore</p>
            <ul>
              <li>Podcast</li>
              <li>About</li>
              <li>Policy</li>
            </ul>
          </div>
          <div>
            <p>Need Help</p>
            <ul>
              <li>Contact</li>
              <li>Enquiries/Support</li>
              <li>Enquiries/Support</li>
            </ul>
          </div>
          <div>
            <p>Newsletter</p>
            <p>Get rich contents via mail</p>
            <Input
              placeholder="Enter your email"
              icon
              iconSecondary
              iconComponent={ArrowRight}
            />
          </div>
        </div>

        {/* </Container> */}
      </div>
      <div>
        <div>
          <p>Copyright ©2023</p>
          <span />
          <p>Beyond The Codes</p>
        </div>
        <div>
          <Facebook />
          <Instagram />
          <Twitter />
          <Youtube />
        </div>
      </div>
    </FooterDiv>
  );
};
export { Footer };
