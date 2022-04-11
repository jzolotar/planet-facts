import styled from 'styled-components';

export const Styled404Page = styled.section`
  height: 35vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  padding: 0 1rem;
  gap: 0.25rem;

  h1 {
    font-size: 2.5rem;
    @media (min-width: 53rem) {
      font-size: 4.5rem;
    }
  }

  p {
    font-size: 0.9rem;
    text-align: center;
    @media (min-width: 53rem) {
      font-size: 1.2rem;
    }
  }

  a {
    margin-top: 1rem;
    text-decoration: none;
    cursor: pointer;
    background-color: white;
    border-radius: 5px;
    padding: 0.25rem 1rem;
    text-align: center;
    color: hsl(240, 67%, 8%);
    @media (min-width: 53rem) {
      font-size: 1.2rem;
    }
  }
`;
