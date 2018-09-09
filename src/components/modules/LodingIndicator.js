import styled from 'styled-components';

const LoadingIndicator = styled.div`
  background-color: rgba(255, 255, 255, 0.3);
  background-image: url(/images/tr-loader-small.gif);
  background-repeat: no-repeat;
  background-position: center;
  height: 100vh;
  width: 100vw;
  position: fixed;
  top: 0;
  left: 0;
`;

export default LoadingIndicator;
