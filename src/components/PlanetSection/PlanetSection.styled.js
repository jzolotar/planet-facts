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

  @media (min-width: 63.5rem) {
    grid-template-columns: 2fr 1fr;
    grid-template-rows: 2fr 1fr 1fr;
    grid-template-areas:
      'img text-section'
      'img tabs'
      'numbers-section numbers-section';

    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
  }
`;
