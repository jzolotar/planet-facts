import { ImgStyled } from './PlanetImage.styled';
const PlanetImage = ({
  overviewImg,
  structureImg,
  geologyImg,
  currentSection,
}) => {
  let currentImage = '';
  let geo = '';

  if (+currentSection === 0) {
    currentImage = overviewImg;
  } else if (+currentSection === 1) {
    currentImage = structureImg;
  } else {
    currentImage = overviewImg;
    geo = geologyImg;
  }

  return (
    <ImgStyled currentImage={currentImage} geo={geo}>
      <div></div>
    </ImgStyled>
  );
};
export default PlanetImage;
