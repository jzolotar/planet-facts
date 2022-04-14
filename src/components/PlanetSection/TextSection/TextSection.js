import { StyledTextSection } from './TextSection.styled';

import { FiExternalLink } from 'react-icons/fi';
import { Fragment } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLocation } from 'react-router-dom';

const parVariants = {
  hidden: { opacity: 0 },
  visible: { x: 0, opacity: 1, transition: { duration: 1.5 } },
  exit: { x: -200, opacity: 0, transition: { duration: 1.5 } },
};

const textSectionVariants = {
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
    x: -200,
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
  //overview section
  const overviewSection = (
    <Fragment>
      <motion.p
        variants={parVariants}
        initial='hidden'
        animate='visible'
        exit='exit'
        key='1'
      >
        {overview.content}
      </motion.p>
      <div>
        <span>Source:</span>
        <a href={overview.source}>
          Wikipedia
          <FiExternalLink size={12} />
        </a>
      </div>
    </Fragment>
  );
  //strucute section
  const structureSection = (
    <Fragment>
      <motion.p
        variants={parVariants}
        initial='hidden'
        animate='visible'
        exit='exit'
        key='2'
      >
        {structure.content}
      </motion.p>
      <div>
        <span>Source:</span>
        <a href={structure.source}>
          Wikipedia
          <FiExternalLink size={12} />
        </a>
      </div>
    </Fragment>
  );
  //geo section
  const geologySection = (
    <Fragment>
      <motion.p
        variants={parVariants}
        initial='hidden'
        animate='visible'
        exit='exit'
        key='3'
      >
        {geology.content}
      </motion.p>
      <div>
        <span>Source:</span>
        <a href={geology.source}>
          Wikipedia
          <FiExternalLink size={12} />
        </a>
      </div>
    </Fragment>
  );

  return (
    <StyledTextSection
      variants={textSectionVariants}
      initial='hidden'
      animate='visible'
      exit='exit'
    >
      <h1>{name}</h1>

      {+currentSection === 0 && overviewSection}
      {+currentSection === 1 && structureSection}
      {+currentSection === 2 && geologySection}
    </StyledTextSection>
  );
};

export default TextSection;
