import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-scroll';
import { device } from 'global';

import AddEventListener from 'utils/addEventListener';
import handleScroll from './handleScroll';

const Background = styled.div`
  z-index: 2;
  transition: all 1s ease;
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgb(0, 0, 0, 0);
  width: 100vw !important;
  height: 70px;
  -webkit-touch-callout: none; /* iOS Safari */
  -webkit-user-select: none; /* Chrome/Safari/Opera */
  -khtml-user-select: none; /* Konqueror */
  -moz-user-select: none; /* Firefox */
  -ms-user-select: none; /* Internet Explorer/Edge */
  user-select: none; /* Non-prefixed version */
`;

const Nav = styled.nav`
  position: fixed;
  top: 0 !important;
  right: 0 !important;
  background-color: rgb(0, 0, 0, 0);
  max-height: 70px !important;
  height: 70px !important;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-content: center;
  margin-bottom: 0;
  z-index: 3;
  -webkit-touch-callout: none; /* iOS Safari */
  -webkit-user-select: none; /* Chrome/Safari/Opera */
  -khtml-user-select: none; /* Konqueror */
  -moz-user-select: none; /* Firefox */
  -ms-user-select: none; /* Internet Explorer/Edge */
  user-select: none; /* Non-prefixed version */
`;

const Sections = styled.div`
  display: flex;
  line-height: 70px;
  cursor: pointer;
  -webkit-touch-callout: none; /* iOS Safari */
  -webkit-user-select: none; /* Chrome/Safari/Opera */
  -khtml-user-select: none; /* Konqueror */
  -moz-user-select: none; /* Firefox */
  -ms-user-select: none; /* Internet Explorer/Edge */
  user-select: none; /* Non-prefixed version */
`;

const NavItem = styled.div`
  position: relative;
  margin-right: 5px;
  color: white;
  text-shadow: 1px 1px black;
  padding: 0 5px;
  -webkit-touch-callout: none; /* iOS Safari */
  -webkit-user-select: none; /* Chrome/Safari/Opera */
  -khtml-user-select: none; /* Konqueror */
  -moz-user-select: none; /* Firefox */
  -ms-user-select: none; /* Internet Explorer/Edge */
  user-select: none; /* Non-prefixed version */

  &:hover {
    color: white;
    filter: brightness(0.7);
  }

  @media${device.mobile} {
    margin-right: 8px;
  }

  @media${device.mobileL} {
    margin-right: 20px;
  }

  @media${device.tablet} {
  }
`;

const Logo = styled.div`
  visibility: hidden;
  color: white;
  width: 0px;

  @media${device.mobileL} {
    visibility: visible;
  }
`;

const Img = styled.img`
  margin-top: 13px;
  margin-left: 20px;
  height: 40px;
  width: auto;
  cursor: pointer;
`;

const sections = ['About', 'Team', 'Our work', 'Career'];

export default function Navbar() {
  AddEventListener('scroll', handleScroll);

  return (
    <React.Fragment>
      <Background id='navbar' />
      <Nav>
        <Logo>
          <Link
            key={'hero-link'}
            to={'hero'}
            spy={true}
            smooth={true}
            offset={-70}
          >
            <Img src='/Logos/CSIDLightAsset2xxhdpi.svg'></Img>
          </Link>
        </Logo>
        <Sections>
          {sections.map((section) => (
            <Link
              key={section}
              to={section.toLowerCase()}
              spy={true}
              smooth={true}
              offset={-70}
            >
              <NavItem className='s1'>{section}</NavItem>
            </Link>
          ))}
        </Sections>
      </Nav>
    </React.Fragment>
  );
}
