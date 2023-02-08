import styled from "styled-components";

const ButtonContainer = styled.button`
  padding: 0.7rem 4rem;
  background-color: ${(props) => (props.secondary ? "white" : "#F15A29")};
  border-radius: ${(props) => (props.secondary ? "0px" : "15px")};
  color: ${(props) => (props.secondary ? "#373737" : "white")};
  border: none;
  font-size: 14px;
  line-height: 24px;
  cursor: pointer;
`;

const Button = ({ value = "", secondary = false, ...rest }) => {
  return (
    <ButtonContainer secondary={secondary} {...rest}>
      {value}
    </ButtonContainer>
  );
};
export { Button };
