import { useEffect, useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import logo from "../Assets/icons/icon-title2.png";
import { FaSearch, FaShoppingCart, FaTimes } from "react-icons/fa";
import { Search } from "./Search";

export const Navbar = () => {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const [isActiveScroll, setIsActiveScroll] = useState(false);
  const [searchactive, setSearchactive] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsActiveScroll(true);
      } else {
        setIsActiveScroll(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Nav isActiveScroll={isActiveScroll}>
      <Logo src={logo} />

      <DesktopNav>
        <NavItem isActiveScroll={isActiveScroll}>
          <Link to="/">Home</Link>
        </NavItem>
        <NavItem isActiveScroll={isActiveScroll}>
          <Link to="/products">Productos</Link>
        </NavItem>
      </DesktopNav>

      <ContainerIcons>
          <ButtonIcon isActiveScroll={isActiveScroll}>
            <Search isActiveScroll={isActiveScroll} />
          </ButtonIcon>
          <ButtonIcon isActiveScroll={isActiveScroll}>
            <Link to="/shopping_cart">
              <FaShoppingCart />
            </Link>
          </ButtonIcon>
      </ContainerIcons>

      <MobileNav style={{ display: isMobileNavOpen ? "flex" : "none" }}>
        <NavItem isActiveScroll={isActiveScroll}>
          <Link to="/">Home</Link>
        </NavItem>
        <NavItem isActiveScroll={isActiveScroll}>
          <Link href="/products">Productos</Link>
        </NavItem>
      </MobileNav>
    </Nav>
  );
};

const Nav = styled.nav`
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: #fff;
  color: #000;
  padding: 20px;
  position: fixed;
  width: 100%;
  -webkit-box-shadow: 0px 3px 5px 0px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 3px 5px 0px rgba(0, 0, 0, 0.75);
  z-index: 1000;
  transition: 0.5s;
  background: ${(props) => (props.isActiveScroll ? "#fff" : "rgba(0,0,0,.2)")};
  @media (max-width: 767px) {
    padding: 10px 10px;
  }
`;

const NavItem = styled.li`
  list-style: none;
  margin: 0 1rem;
  font-family: var(--font-open);
  a {
    color: ${(props) => (props.isActiveScroll ? "#000" : "#fff")};
    text-decoration: none;
    transition: all 0.3s ease;

    &:hover {
      color: #bada55;
    }
  }
`;

const Logo = styled.img`
  width: 130px;
  margin: 0;
  
  @media (max-width: 767px) {
    width: 90px;
  }
`;

const DesktopNav = styled.ul`
  display: flex;
  margin-left: -100px;
  @media (max-width: 767px) {
    display: none;
  }
`;
const ContainerIcons = styled.div`
  display: flex;
`;
const ButtonIcon = styled.button`
  padding: 8px;
  background: none;
  border: none;
  cursor: pointer;
  margin: 0 12px;
  font-size: 18px;
  display: flex;
  align-items: center;
  color: ${(props) => (props.isActiveScroll ? "#000" : "#fff")};
  transition: 0.5s;
  &:hover {
    color: var(--darkorange);
  }
  & > a {
    color: ${(props) => (props.isActiveScroll ? "#000" : "#fff")};
  }
`;
const MobileNav = styled.ul`
  display: none;
  flex-direction: column;
  margin: 0;
  padding: 0;

  @media (max-width: 767px) {
    display: flex;
  }
`;
