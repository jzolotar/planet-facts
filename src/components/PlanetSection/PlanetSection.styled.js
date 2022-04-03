import styled from 'styled-components';

export const StyledPlanetSection = styled.section`
  color: white;

  @media (min-width: 52rem) {
    padding: 0 2rem;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-areas:
      'img img'
      'text-section tabs'
      'numbers-section numbers-section';
  }
`;
