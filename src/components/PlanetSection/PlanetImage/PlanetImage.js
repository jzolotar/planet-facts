import { ImgStyled } from './PlanetImage.styled';
import { motion, AnimatePresence } from 'framer-motion';

const imgVariants = {
  hidden: {
    opacity: 0,
    x: 200,
    scale: 0.5,
  },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    rotateZ: 360,
    transition: { delay: 0.2, duration: 1.5 },
  },
  exit: {
    opacity: 0,
    x: -200,
    scale: 0.5,
    rotateZ: -360,
    transition: { delay: 0.2, duration: 1.5 },
  },
};

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
    <ImgStyled
      currentImage={currentImage}
      geo={geo}
      variants={imgVariants}
      initial='hidden'
      animate='visible'
      exit='exit'
    >
      <motion.div key={currentImage} variants={imgVariants}></motion.div>
    </ImgStyled>
  );
};
export default PlanetImage;
