import React from 'react';
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import img from "../assets/image.png"
import logo from "../assets/logo.png"

const LayoutContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

const BackgroundContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: -1;
`;

const GradientBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 50%;
  background-image: url(${img});
  background-size: cover;
`;

const WhiteBackground = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 50%;
  background-color: white;
`;

const Header = styled.header`
  width: 100%;
  padding: 20px;
  text-align: center
`;

const Logo = styled.img`
  height: 150px;
`;

const ContentContainer = styled.main`
  background-color: white;
  border-radius: 8px;
  padding: 20px;
  margin: 20px auto;
  width: 80%;
  max-width: 1000px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const Layout: React.FC = () => {
  return (
    <LayoutContainer>
      <BackgroundContainer>
        <GradientBackground />
        <WhiteBackground />
      </BackgroundContainer>
      <Header>
        <Logo src={logo} alt="ITM Logo" />
      </Header>
      <ContentContainer>
        <Outlet />
      </ContentContainer>
    </LayoutContainer>
  );
};

export default Layout;