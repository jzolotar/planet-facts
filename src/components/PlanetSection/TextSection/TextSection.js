import { StyledTextSection } from './TextSection.styled';

import { FiExternalLink } from 'react-icons/fi';
import { Fragment } from 'react';

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
      <p>{overview.content}</p>
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
      <p>{structure.content}</p>
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
      <p>{geology.content}</p>
      <div>
        <span>Source:</span>
        <a href={geology.source}>
          Wikipedia
          <FiExternalLink size={12} />
        </a>
      </div>
    </Fragment>
  );

  console.log(+currentSection);

  return (
    <StyledTextSection>
      <h1>{name}</h1>
      {/* {(() => {
        switch (+currentSection) {
          case 0:
            console.log('overview');
            return overviewSection;
          case 1:
            return structureSection;
          case 2:
            return geologySection;

          default:
            return overviewSection;
        }
      })()} */}
      {+currentSection === 0 && overviewSection}
      {+currentSection === 1 && structureSection}
      {+currentSection === 2 && geologySection}
    </StyledTextSection>
  );
};

export default TextSection;
