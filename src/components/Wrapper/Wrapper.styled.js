import styled from 'styled-components';
import { starsBackground } from './starsBg';

export const StyledWrapper = styled.div`
  position: relative;
  min-height: 100vh;
  overflow: auto;
  background-color: ${(props) => props.theme.colors.black};

  ::after {
    content: '';
    position: absolute;
    height: 2px;
    width: 2px;
    top: -2px;
    background-color: white;
    box-shadow: ${starsBackground};
  }
`;
