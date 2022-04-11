import { Navigate, Route, Routes } from 'react-router-dom';
import Provider from './components/Provider/Provider';
import Wrapper from './components/Wrapper/Wrapper';
import Navbar from './components/Navbar/Navbar';
import PlanetSection from './components/PlanetSection/PlanetSection';
import Earth from './pages/Earth/Earth';
import Jupiter from './pages/Jupiter/Jupiter';
import Mars from './pages/Mars/Mars';
import Mercury from './pages/Mercury/Mercury';
import Neptune from './pages/Neptune/Neptune';
import Saturn from './pages/Saturn/Saturn';
import Uranus from './pages/Uranus/Uranus';
import Venus from './pages/Venus/Venus';
import PageNotFound from './pages/404/PageNotFound';

function App() {
  return (
    <Provider>
      <Wrapper>
        <Navbar />
        <Routes>
          <Route
            path='/'
            element={<Navigate replace to='/planet-facts/earth' />}
          />
          <Route
            path='/planet-facts/'
            element={<Navigate replace to='/planet-facts/earth' />}
          />
          <Route path='planet-facts/earth' element={<Earth />} />
          <Route path='planet-facts/jupiter' element={<Jupiter />} />
          <Route path='planet-facts/mars' element={<Mars />} />
          <Route path='planet-facts/mercury' element={<Mercury />} />
          <Route path='planet-facts/neptune' element={<Neptune />} />
          <Route path='planet-facts/saturn' element={<Saturn />} />
          <Route path='planet-facts/uranus' element={<Uranus />} />
          <Route path='planet-facts/venus' element={<Venus />} />
          <Route path='planet-facts/404' element={<PageNotFound />} />
          <Route
            path='*'
            element={<Navigate replace to='/planet-facts/404' />}
          />
        </Routes>
      </Wrapper>
    </Provider>
  );
}

export default App;
