import { Navigation } from "@/component/Navigation";
import styled from "styled-components";

const BodyContainer = styled.div`
  max-width: 70%;
  margin: 2rem auto;
  @media screen and (max-width: 1000px) {
    max-width: 90%;
  }
`;

const Container = ({ children }) => {
  return <BodyContainer>{children}</BodyContainer>;
};

export { Container };
