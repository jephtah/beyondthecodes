import styled from "styled-components";
import { Container } from "@/layout/Container";
import NavLink from "next/link";
import { Logo } from "../icons";
const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  ul {
    display: flex;
    list-style: none;
    gap: 4rem;
    a {
      text-decoration: none;
      font-size: 20px;
      line-height: 24px;
      font-weight: 500;
      color: ${({ theme }) => theme.colors.primary};
    }
  }
  @media screen and (max-width: 700px) {
    ul {
      flex-direction: column;
    }
  }
`;
const active = {
  color: "blue",
};
const Navigation = () => {
  return (
    <Container>
      <Nav>
        <div>
          <Logo />
        </div>
        <ul>
          <NavLink href="/">Home</NavLink>
          <NavLink href="/ss">Podcast</NavLink>
          <NavLink href="/about-us">About</NavLink>
          <NavLink href="/contact">Contact</NavLink>
        </ul>
      </Nav>
    </Container>
  );
};

export { Navigation };
