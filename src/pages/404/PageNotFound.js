import { Styled404Page } from './PageNotFound.styled';
import { Link } from 'react-router-dom';

const PageNotFound = () => {
  const pathsArr = [
    '/mercury',
    '/venus',
    '/earth',
    '/mars',
    '/jupiter',
    '/saturn',
    '/uranus',
    '/neptune',
  ];

  const randomPath = pathsArr[Math.floor(Math.random() * pathsArr.length)];

  return (
    <Styled404Page>
      <h1>404</h1>
      <p>
        Oops, seems like this page doesn't exist. But don't worry you can always
        check other pages to learn some cool thgins about our planets.
      </p>
      <Link to={randomPath}>Random Planet</Link>
    </Styled404Page>
  );
};
export default PageNotFound;
