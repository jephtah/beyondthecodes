import { useState } from "react";
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
  max-width: 70%;
  margin: 2rem auto;
  span {
    display: none;
  }
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
    position: relative;
    flex-direction: column;
    max-width: 100%;
    // max-width: 90%;
    span {
      display: block;
    }
    div {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;
      padding: 0 2rem;
    }
    ul {
      position: absolute;
      flex-direction: column;
      margin-top: 5rem;

      align-self: flex-end;
      text-align: right;
      background-color: ${(props) => (props.inverse ? "#F15A29" : "white")};
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
const Navigation = () => {
  const { pathname } = useRouter();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const inverse = useMemo(() => pathname !== "/", []);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Nav inverse={inverse}>
      <AnimatePresence>
        <div>
          {inverse ? <LogoWhite /> : <Logo />}
          <span onClick={() => setIsOpen((v) => !v)}>
            <p style={{ color: "green" }}>Menu</p>
          </span>
        </div>

        <motion.ul
          initial={{ y: -100, opacity: 0 }}
          animate={true ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 1 }}
        >
          <NavLink href="/">Home</NavLink>
          <NavLink href="/podcast">Podcast</NavLink>
          <NavLink href="/about-us">About</NavLink>
          <NavLink href="/contact">Contact</NavLink>
        </motion.ul>
      </AnimatePresence>
    </Nav>
  );
};

export { Navigation };
