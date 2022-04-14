import { StyledNumberSection } from './NumbersSection.styled';

const NumbersSection = ({ rotation, revolution, radius, temperature }) => {
  const numberSectionVariants = {
    hidden: {
      opacity: 0,
      x: 200,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: { delay: 0.2, duration: 1.5 },
    },
    exit: {
      opacity: 0,
      x: 200,
      transition: { delay: 0.2, duration: 1.5 },
    },
  };
  return (
    <StyledNumberSection
      variants={numberSectionVariants}
      initial='hidden'
      animate='visible'
      exit='exit'
    >
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
