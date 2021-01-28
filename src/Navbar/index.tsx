import styled from 'styled-components';
import { device } from 'global';

const Nav = styled.nav`
  height: 70px;
  width: 100%;
  background-color: rgb(40, 200, 100);
  position: inline-block;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-content: center;
  margin-bottom: 0;
  z-index: 2;
`;

const Sections = styled.div`
  display: flex;
  line-height: 70px;
  cursor: pointer;
`;

const NavItem = styled.div`
  margin-right: 5px;
  color: white;
  text-shadow: 1px 1px black;
  font-size: 1rem;

  &:hover {
    filter: brightness(0.8);
  }

  @media${device.mobile} {
    margin-right: 8px;
    font-size: 0.9rem;
  }

  @media${device.mobileL} {
    font-size: 1.2rem;
    margin-right: 20px;
  }

  @media${device.tablet} {
    font-size: 1.5rem;
  }
`;

const Logo = styled.div`
  visibility: hidden;

  @media${device.mobileL} {
    display: block;
  }
`;

const sections = ['About', 'Team', 'Our work', 'Career'];

export default function Navbar() {
  return (
    <Nav>
      <Logo>LOGO</Logo>
      <Sections>
        {sections.map((section) => (
          <NavItem key={section}>{section}</NavItem>
        ))}
      </Sections>
    </Nav>
  );
}
