import { StyledBurger } from './Burger.styled';

const Burger = ({ onClickHandler, open }) => {
  return (
    <StyledBurger isOpen={open} onClick={onClickHandler}>
      <div></div>
      <div></div>
      <div></div>
    </StyledBurger>
  );
};

export default Burger;
