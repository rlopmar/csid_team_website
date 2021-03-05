import React from 'react';
import styled from 'styled-components';
import Gallery from 'react-grid-gallery';
import { colors } from 'global';
import { slideshowAnim } from './slideshowAnim';
import getImages, { IGallery } from './images';

function thumbnailStyle() {
  return {
    objectFit: 'contain',
    width: '100%',
    height: '100%',
    objectPosition: 'center',
    backgroundColor: '#F4F5F4',
    cursor: 'pointer',
  };
}

export default function TeamEvents() {
  const [images, setImages] = React.useState<IGallery>([]);

  React.useEffect(() => {
    setImages(getImages());
  }, []);

  return (
    <Container>
      <Title>Team events</Title>
      <SlideWrapper>
        <SlideShow>
          <Images className='slideshow'>
            <Gallery
              maxRows={3}
              enableImageSelection={false}
              images={images}
              thumbnailStyle={thumbnailStyle}
            />
          </Images>
        </SlideShow>
      </SlideWrapper>
    </Container>
  );
}

const Container = styled.div`
  position: relative;
  display: block;
  margin-left: auto;
  margin-right: auto;
  margin-top: 50px;
  box-sizing: content-box;
  margin-bottom: 20px;
`;

const SlideWrapper = styled.div`
  width: 100vw;
`;

const SlideShow = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  height: 550px;
  overflow: hidden;
`;

const Images = styled.div`
  z-index: 1;
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  width: 4000px;
  animation: ${slideshowAnim} 90s linear infinite;
`;

const Title = styled.h2`
  color: ${colors.primary.doveGray};
  margin-bottom: 30px;
  text-align: center;
`;
