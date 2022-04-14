import { useState } from 'react';
import NumbersSection from './NumbersInfo/NumbersSection';
import PlanetImage from './PlanetImage/PlanetImage';
import { StyledPlanetSection } from './PlanetSection.styled';
import Tabs from './Tabs/Tabs';
import TextSection from './TextSection/TextSection';
import { AnimatePresence } from 'framer-motion';

const PlanetSection = ({ data }) => {
  const {
    name,
    overview,
    structure,
    geology,
    sectionColor,
    rotation,
    revolution,
    radius,
    temperature,
  } = data;

  const [currentSectionId, setCurrentSectionId] = useState(0);

  return (
    <StyledPlanetSection>
      <Tabs
        sectionColor={sectionColor}
        setCurrentSection={setCurrentSectionId}
      />
      <PlanetImage
        overviewImg={overview.image}
        structureImg={structure.image}
        geologyImg={geology.geo}
        currentSection={currentSectionId}
      />
      <TextSection
        name={name}
        overview={overview}
        structure={structure}
        geology={geology}
        currentSection={currentSectionId}
      />
      <NumbersSection
        rotation={rotation}
        revolution={revolution}
        radius={radius}
        temperature={temperature}
      />
    </StyledPlanetSection>
  );
};

export default PlanetSection;
