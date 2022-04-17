import { StyledTextSection } from './TextSection.styled';

import { FiExternalLink } from 'react-icons/fi';

import { motion, AnimatePresence } from 'framer-motion';

const parVariants = {
  hidden: { opacity: 0, y: '-100vh' },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: 'spring', stiffness: 90, delay: 0.2 },
  },
  exit: { y: '-100vh', opacity: 0, transition: { duration: 1.5 } },
};

const textSectionVariants = {
  hidden: {
    opacity: 0,
    y: '-100vh',
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: { delay: 0.2, duration: 1.5 },
  },
  exit: {
    opacity: 0,
    y: '-100vh',
    transition: { delay: 0.2, duration: 1.5 },
  },
};

const TextSection = ({
  name,
  overview,
  structure,
  geology,
  currentSection,
}) => {
  let content = {};

  if (+currentSection === 0) content = overview;
  if (+currentSection === 1) content = structure;
  if (+currentSection === 2) content = geology;

  return (
    <StyledTextSection
      variants={textSectionVariants}
      initial='hidden'
      animate='visible'
      exit='exit'
    >
      <h1>{name}</h1>

      <AnimatePresence exitBeforeEnter>
        <motion.p
          variants={parVariants}
          initial='hidden'
          animate='visible'
          exit='exit'
          key={currentSection}
        >
          {content.content}
        </motion.p>
      </AnimatePresence>
      <div>
        <span>Source:</span>
        <a href={content.source}>
          Wikipedia
          <FiExternalLink size={12} />
        </a>
      </div>
    </StyledTextSection>
  );
};

export default TextSection;
