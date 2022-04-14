import { useState } from 'react';
import { StyledTabs, Button } from './Tabs.styled';

const Tabs = ({ sectionColor, setCurrentSection }) => {
  const [currentId, setId] = useState('0');

  const onClickHandler = (event) => {
    setId(event.target.id);
    setCurrentSection(event.target.id);
  };

  const tabsVariants = {
    hidden: {
      opacity: 0,
      x: '-100vw',
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: { delay: 0.2, duration: 1.5 },
    },
    exit: {
      opacity: 0,
      x: '+100vw',
      transition: { delay: 0.2, duration: 1.5 },
    },
  };
  return (
    <StyledTabs
      variants={tabsVariants}
      initial='hidden'
      animate='visible'
      exit='exit'
    >
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
