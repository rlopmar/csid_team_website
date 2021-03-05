import { keyframes } from 'styled-components';

export const slideshowAnim = keyframes`
  0% {
    left: 0;
  }

  50% {
    left: -2500px;
  }

  100%{
    left: 0;
  }
`;
