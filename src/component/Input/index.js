import styled from "styled-components";
import { SearchIcon } from "../icons";
const InputContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  width: fix-content;
  flex-grow: 0;
  gap: 30px;
  width: 100%;
  input {
    width: 100%;
    padding: 0.9rem;
    border-radius: 15px;
    background-color: ${(props) => (props.secondary ? "#fafafa" : "#f4f4f4")};
    border: ${(props) =>
      props.secondary ? "1px solid rgba(135, 135, 135, 0.4)" : "none"};
    &:focus {
      outline-color: ${({ theme }) => theme.colors.primary};
    }
  }
  div {
    background-color: ${({ theme }) => theme.colors.primary};
    height: ${(props) => (props.iconSecondary ? "80%" : "100%")};
    position: absolute;
    display: flex;
    align-items: center;
    padding: 0.5rem;
    right: ${(props) => (props.iconSecondary ? "2%" : "0")};
    border-top-right-radius: 15px;
    border-bottom-right-radius: 15px;
    border-top-left-radius: ${(props) => props.iconSecondary && "13px"};
    border-bottom-left-radius: ${(props) => props.iconSecondary && "13px"};
    cursor: pointer;
  }
`;

const Input = ({
  icon = false,
  secondary = false,
  iconSecondary = false,
  iconComponent: IconComponent,
  ...rest
}) => {
  return (
    <InputContainer secondary={secondary} iconSecondary={iconSecondary}>
      <input {...rest} />

      {icon && (
        <div className="icon">
          <IconComponent />
        </div>
      )}
    </InputContainer>
  );
};

export { Input };
