import { Styled404Page } from './PageNotFound.styled';
import { Link } from 'react-router-dom';

const PageNotFound = () => {
  const pathsArr = [
    '/planet-facts/mercury',
    '/planet-facts/venus',
    '/planet-facts/earth',
    '/planet-facts/mars',
    '/planet-facts/jupiter',
    '/planet-facts/saturn',
    '/planet-facts/uranus',
    '/planet-facts/neptune',
  ];

  const randomPath = pathsArr[Math.floor(Math.random() * pathsArr.length)];
  console.log(randomPath);

  return (
    <Styled404Page>
      <h1>404</h1>
      <p>
        Oops, seems like this page doesn't exist. But don't worry you can always
        check other pages to learn some cool things about planets.
      </p>
      <Link to={randomPath}>Random Planet</Link>
    </Styled404Page>
  );
};
export default PageNotFound;
