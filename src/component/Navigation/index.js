import styled from "styled-components";
import { Container } from "@/layout/Container";
import NavLink from "next/link";
import { Logo, LogoWhite } from "../icons";
import { useRouter } from "next/router";
import { useMemo } from "react";
const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  ul {
    display: flex;
    list-style: none;
    gap: 4rem;
    a {
      height: fit-content;
      text-decoration: none;
      font-size: 20px;
      line-height: 24px;
      font-weight: 500;
      color: ${(props) => (props.inverse ? "white" : "#878787")};
      &:hover {
        color: ${(props) => (props.inverse ? "#F15A29" : "#F15A29")};
      }
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
  const { pathname } = useRouter();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const inverse = useMemo(() => pathname !== "/", []);

  return (
    <Container>
      <Nav inverse={inverse}>
        <div>{inverse ? <LogoWhite /> : <Logo />}</div>
        <ul>
          <NavLink href="/">Home</NavLink>
          <NavLink href="/">Podcast</NavLink>
          <NavLink href="/about-us">About</NavLink>
          <NavLink href="/contact">Contact</NavLink>
        </ul>
      </Nav>
    </Container>
  );
};

export { Navigation };
