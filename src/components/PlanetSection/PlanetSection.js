import NumbersSection from './NumbersInfo/NumbersSection';
import PlanetImage from './PlanetImage/PlanetImage';
import { StyledPlanetSection } from './PlanetSection.styled';
import Tabs from './Tabs/Tabs';
import TextSection from './TextSection/TextSection';

const PlanetSection = () => {
  return (
    <StyledPlanetSection>
      <Tabs />
      <PlanetImage />
      <TextSection />
      {/* <NumbersSection /> */}
    </StyledPlanetSection>
  );
};

export default PlanetSection;
