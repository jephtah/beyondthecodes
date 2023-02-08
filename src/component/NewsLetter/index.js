import { OverflowFooter } from "@/layout/OverflowFooter";
import { Button } from "../Button";
import styled from "styled-components";

const Div = styled.section`
  display: flex;
  width: 100%;
  flex-direction: column;
  margin-right: 6rem;
  p:nth-child(1) {
    font-size: 38px;
    line-height: 50px;
  }
  @media screen and (max-width: 1000px) {
    margin-bottom: 1rem;
    margin-right: 0;
    p:nth-child(1) {
      font-size: 25px;
      line-height: 25px;
      margin-bottom: 1rem;
    }
  }
`;
const Flex = styled.diz;
const NewsLetter = () => {
  return (
    <OverflowFooter>
      <Div>
        <p>Stay up to date with Newest news for Leaders</p>
        <p>Lorem ipsum may be used as a placeholder before final copy</p>
      </Div>
      <Button value="Subscribe Now" secondary />
    </OverflowFooter>
  );
};

export { NewsLetter };
