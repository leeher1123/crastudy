import React, {useState} from "react";
import styled from "styled-components";
import {Link} from "react-router-dom";
import Sidebar from "../Sidebar";
import {GiHamburgerMenu} from "react-icons/gi";

const Header = () => {

    const [sidebar, setSidebar] = useState(false);

    const handleSidebar = () => {
        setSidebar(!sidebar)
    }

    const onClose = () => {
        setSidebar(false);
    }

    return (
        <>
            <Container>
                <Logo>
                    <Link to={'/'}>Jimin</Link>
                </Logo>
                <Nav>
                    <NavItem>
                        <NavLink to={'/'}>home</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink to={'/count'}>count</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink to={'/todo'}>todo</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink to={'/posts'}>posts</NavLink>
                    </NavItem>
                </Nav>
                <NavButton onClick={handleSidebar}>
                    <GiHamburgerMenu/>
                </NavButton>
            </Container>
            <Sidebar open={sidebar}
                     onClose={onClose}/>
        </>
    )
}

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 50px;
`;

const Logo = styled.div`
  font-size: 20px;
  text-transform: capitalize;
  color: #111;
  cursor: pointer;

  a {
    text-decoration: none;
    color: #111;
  }
`;

const Nav = styled.nav`
  display: flex;
  align-items: center;
`;

const NavItem = styled.div`
  margin: 0 10px;
`;

const NavLink = styled(Link)`
  display: flex;
  align-items: center;
  height: 70px;
  padding: 0 20px;
  cursor: pointer;
  text-transform: capitalize;
  text-decoration: none;
  color: #111;

  &:hover {
    color: #18f;
  }
`;

const NavButton = styled.div`
  font-size: 24px;
  cursor: pointer;
`;
export default Header;