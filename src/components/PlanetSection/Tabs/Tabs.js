import { useState } from 'react';
import { StyledTabs, Button } from './Tabs.styled';

const Tabs = ({ sectionColor, setCurrentSection }) => {
  const [currentId, setId] = useState('0');

  const onClickHandler = (event) => {
    setId(event.target.id);
    setCurrentSection(event.target.id);
  };
  return (
    <StyledTabs>
      <Button
        id='0'
        onClick={onClickHandler}
        className={currentId === '0' && 'active'}
        color={sectionColor}
      >
        Overview
      </Button>
      <Button
        id='1'
        onClick={onClickHandler}
        className={currentId === '1' && 'active'}
        color={sectionColor}
      >
        Structure
      </Button>
      <Button
        id='2'
        onClick={onClickHandler}
        className={currentId === '2' && 'active'}
        color={sectionColor}
      >
        Geology
      </Button>
    </StyledTabs>
  );
};

export default Tabs;
