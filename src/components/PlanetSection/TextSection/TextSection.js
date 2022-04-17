import { StyledTextSection } from './TextSection.styled';

import { FiExternalLink } from 'react-icons/fi';
import { Fragment } from 'react';
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
  // //overview section
  // const overviewSection = (
  //   <Fragment>
  //     <motion.p
  //       variants={parVariants}
  //       initial='hidden'
  //       animate='visible'
  //       exit='exit'
  //     >
  //       {overview.content}
  //     </motion.p>
  //     <div>
  //       <span>Source:</span>
  //       <a href={overview.source}>
  //         Wikipedia
  //         <FiExternalLink size={12} />
  //       </a>
  //     </div>
  //   </Fragment>
  // );
  // //strucute section
  // const structureSection = (
  //   <Fragment>
  //     <motion.p
  //       key={currentSection}
  //       variants={parVariants}
  //       initial='hidden'
  //       animate='visible'
  //       exit='exit'
  //     >
  //       {structure.content}
  //     </motion.p>
  //     <div>
  //       <span>Source:</span>
  //       <a href={structure.source}>
  //         Wikipedia
  //         <FiExternalLink size={12} />
  //       </a>
  //     </div>
  //   </Fragment>
  // );
  // //geo section
  // const geologySection = (
  //   <Fragment>
  //     <motion.p
  //       variants={parVariants}
  //       initial='hidden'
  //       animate='visible'
  //       exit='exit'
  //       key='3'
  //     >
  //       {geology.content}
  //     </motion.p>
  //     <div>
  //       <span>Source:</span>
  //       <a href={geology.source}>
  //         Wikipedia
  //         <FiExternalLink size={12} />
  //       </a>
  //     </div>
  //   </Fragment>
  // );

  return (
    <StyledTextSection
      variants={textSectionVariants}
      initial='hidden'
      animate='visible'
      exit='exit'
    >
      <h1>{name}</h1>

      <AnimatePresence exitBeforeEnter>
        {/* {+currentSection === 0 && overviewSection}
        {+currentSection === 1 && structureSection}
        {+currentSection === 2 && geologySection} */}
        <motion.p
          variants={parVariants}
          initial='hidden'
          animate='visible'
          exit='exit'
          key={currentSection}
        >
          {geology.content}
        </motion.p>
      </AnimatePresence>
      <div>
        <span>Source:</span>
        <a href={geology.source}>
          Wikipedia
          <FiExternalLink size={12} />
        </a>
      </div>
    </StyledTextSection>
  );
};

export default TextSection;
