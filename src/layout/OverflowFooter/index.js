import styled from "styled-components";

const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.primary};
  padding: 4rem;
  position: absolute;
  top: -30%;
  //   margin: 0 auto;
  display: flex;
  align-items: center;
  width: 70%;
  justify-content: space-between;
  @media screen and (max-width: 1000px) {
    width: 90%;
    padding: 2rem;
    top: -30%;
  }
`;

const OverflowFooter = ({ children }) => {
  return <Container>{children}</Container>;
};

export { OverflowFooter };
