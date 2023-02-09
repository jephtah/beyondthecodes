import styled from "styled-components";
import { Play } from "../icons";
const ButtonContainer = styled.button`
  padding: 0.7rem 3rem;
  background-color: ${(props) => (props.secondary ? "white" : "#F15A29")};
  border-radius: ${(props) => (props.secondary ? "0px" : "15px")};
  color: ${(props) => (props.secondary ? "#373737" : "white")};
  border: none;
  font-size: ${(props) => (props.secondary ? "18px" : "15px")};
  line-height: 24px;
  cursor: pointer;
  white-space: nowrap;
  font-weight: ${(props) => props.secondary && "700"};
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Div = styled.div`
  position: relative;
  span {
    position: absolute;
    left: 2rem;
  }
`;
const Button = ({
  value = "",
  secondary = false,
  iconComponent: IconComponent,
  ...rest
}) => {
  return (
    <Div>
      <ButtonContainer secondary={secondary} {...rest}>
        {IconComponent && (
          <span>
            <IconComponent />
          </span>
        )}

        {value}
      </ButtonContainer>
    </Div>
  );
};
export { Button };
