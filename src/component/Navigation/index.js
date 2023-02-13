import { useState, useEffect, useLayoutEffect } from "react";
import styled from "styled-components";
import { Container } from "@/layout/Container";
import NavLink from "next/link";
import { Logo, LogoWhite } from "../icons";
import { useRouter } from "next/router";
import { useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin: 0rem auto;
  position: fixed;
  padding: 0 12%;
  background-color: ${(props) =>
    props.scroll && (props.inverse ? "black" : "white")};
  right: 0;
  left: 0;
  top: 0;
  transition: all 0.2s ease-out;
  box-shadow: ${(props) => props.scroll && "0px 0px 50px rgba(0, 0, 0, 0.09)"};
  div,
  ul {
    padding: 0.5rem 2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  z-index: 10;
  span {
    display: none;
  }
  ul {
    display: flex;
    align-items: center;
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
    flex-direction: column;
    max-width: 100%;
    padding: 0 0%;
    span {
      display: block;
    }
    div {
      width: 100%;
      padding: 0.5rem 2rem;
    }
    ul {
      position: absolute;
      flex-direction: column;
      margin-top: 5rem;
      display: ${(props) => (props.open ? "flex" : "none")};
      transition: all 0.8s ease-out;
      align-self: flex-end;
      text-align: right;
      background-color: ${(props) => (props.inverse ? "black" : "white")};
      width: 100%;
      padding: 2rem 0;

      a {
        padding: 0 2rem;
        &:hover {
          color: ${(props) => (!props.inverse ? "#F15A29" : "#878787")};
        }
      }
    }
  }
`;
const active = {
  color: "blue",
};

const Menu = styled.span`
  margin: 0;
  width: 30px;
  cursor: pointer;
  &:after,
  &:before,
  & span {
    background-color: ${(props) => (props.inverse ? "#fff" : "#F15A29")};
    border-radius: 3px;
    content: "";
    display: block;
    height: 2px;
    margin: 7px 0;
    transition: all 0.2s ease-in-out;
  }
  &:before {
    transform: ${(props) => props.open && "translate(10px) rotate(45deg)"};
  }
  &:after {
    transform: ${(props) =>
      props.open && "translateY(-20px) translateX(10px) rotate(-45deg)"};
  }
  span {
    transform: ${(props) => props.open && " translateY(5px)translateX(10px)"};
  }
`;
const Navigation = () => {
  const { pathname } = useRouter();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const inverse = useMemo(() => pathname !== "/", []);
  const [isOpen, setIsOpen] = useState(false);
  const [scrollY, setScrollY] = useState(false);
  useLayoutEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 20 ? setScrollY(true) : setScrollY(false);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  useEffect(() => {
    setIsOpen(false);
  }, []);

  return (
    <Nav inverse={inverse} scroll={scrollY} open={isOpen}>
      {/* <AnimatePresence> */}
      <div>
        {inverse ? <LogoWhite /> : <Logo />}
        <Menu
          inverse={inverse}
          onClick={() => {
            setIsOpen((v) => !v);
            if (!scrollY) {
              setScrollY(true);
            } else {
              setScrollY(true);
            }
          }}
          open={isOpen}
        >
          <span />
        </Menu>
      </div>

      <ul>
        <NavLink href="/">Home</NavLink>
        <NavLink href="/podcasts">Podcasts</NavLink>
        <NavLink href="/about-us">About</NavLink>
        <NavLink href="/contact">Contact</NavLink>
      </ul>
      {/* </AnimatePresence> */}
    </Nav>
  );
};

export { Navigation };
