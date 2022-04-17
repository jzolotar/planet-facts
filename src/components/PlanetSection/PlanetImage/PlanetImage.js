import { ImgStyled, Image } from './PlanetImage.styled';
import { AnimatePresence } from 'framer-motion';

const containerVariants = {
  hidden: {
    opacity: 0,
    x: '-100vw',
    scale: 0.5,
  },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: { delay: 0.2, duration: 1.2 },
  },
  exit: {
    opacity: 1,
    x: '-100vw',
    scale: 0.5,
    transition: { delay: 0.2, duration: 1.2 },
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
      variants={containerVariants}
      initial='hidden'
      animate='visible'
      exit='exit'
    >
      <AnimatePresence exitBeforeEnter>
        <Image
          key={currentSection}
          image={currentImage}
          geo={geo}
          initial={{ x: '-100vw', opacity: 0 }}
          animate={{
            x: 0,
            opacity: 1,
            transition: { type: 'spring', stiffness: 90, delay: 0.2 },
          }}
          exit={{
            x: '-100vw',
            opacity: 0,
            transition: { duration: 1.5 },
          }}
        />
      </AnimatePresence>
    </ImgStyled>
  );
};
export default PlanetImage;
