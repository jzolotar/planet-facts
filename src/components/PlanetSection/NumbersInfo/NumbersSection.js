import { StyledNumberSection } from './NumbersSection.styled';

const NumbersSection = ({ rotation, revolution, radius, temperature }) => {
  return (
    <StyledNumberSection>
      <li>
        <p>Rotation time</p>
        <h1>{rotation}</h1>
      </li>
      <li>
        <p>Revolution time</p>
        <h1>{revolution}</h1>
      </li>
      <li>
        <p>Radius</p>
        <h1>{radius}</h1>
      </li>
      <li>
        <p>Average temp.</p>
        <h1>{temperature}</h1>
      </li>
    </StyledNumberSection>
  );
};

export default NumbersSection;
