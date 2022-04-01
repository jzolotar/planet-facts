import { StyledTextSection } from './TextSection.styled';

import { FiExternalLink } from 'react-icons/fi';

const TextSection = () => {
  return (
    <StyledTextSection>
      <h1>Planet</h1>
      <p>
        Mercury is the smallest planet in the Solar System and the closest to
        the Sun. Its orbit around the Sun takes 87.97 Earth days, the shortest
        of all the Sun's planets. Mercury is one of four terrestrial planets in
        the Solar System, and is a rocky body like Earth.
      </p>
      <div>
        <span>Source:</span>
        <a href='https://en.wikipedia.org/wiki/Mercury_(planet)'>
          Wikipedia
          <FiExternalLink size={12} />
        </a>
      </div>
    </StyledTextSection>
  );
};

export default TextSection;
