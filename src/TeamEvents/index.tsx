import React from 'react';
import styled from 'styled-components';
import Gallery from 'react-grid-gallery';
import { colors } from 'global';
import IMAGES from './images';
import { slideshowAnim } from './slideshowAnim';
import { device } from 'global';

const Container = styled.div`
  position: relative;
  display: block;
  margin-left: auto;
  margin-right: auto;
  margin-top: 50px;
  background-color: #f4f5f4;
  box-sizing: content-box;
  margin-bottom: 20px;
`;

const SlideWrapper = styled.div`
  box-shadow: 0 0 50px rgb(0, 0, 0, 0.3), 0 5px 10px rgb(30, 30, 30, 0.5),
    inset 0 0 20px rgb(0, 0, 0);
  border-radius: 0;
  width: 100vw;

  @media${device.desktopL} {
    border-radius: 10px;
    max-width: 1400px;
  }
`;

const SlideShow = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  height: 500px;
  overflow: hidden;
  border-radius: 0;

  @media${device.desktopL} {
    border-radius: 20px;
  }
`;

const Images = styled.div`
  z-index: 1;
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  width: 2000px;
  animation: ${slideshowAnim} 40s linear infinite;
`;

const Title = styled.h2`
  color: ${colors.primary.doveGray};
  margin-bottom: 30px;
  text-align: center;
`;

export default function TeamEvents() {
  return (
    <Container>
      <Title>Team events</Title>
      <SlideWrapper>
        <SlideShow>
          <Images className='slideshow'>
            <Gallery
              margin={0}
              maxRows={3}
              enableImageSelection={false}
              images={IMAGES}
            />
          </Images>
        </SlideShow>
      </SlideWrapper>
    </Container>
  );
}
