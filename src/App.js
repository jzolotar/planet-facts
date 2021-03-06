import { Navigate, Route, Routes, useLocation } from 'react-router-dom';
import Provider from './components/Provider/Provider';
import Wrapper from './components/Wrapper/Wrapper';
import Navbar from './components/Navbar/Navbar';
import Earth from './pages/Earth/Earth';
import Jupiter from './pages/Jupiter/Jupiter';
import Mars from './pages/Mars/Mars';
import Mercury from './pages/Mercury/Mercury';
import Neptune from './pages/Neptune/Neptune';
import Saturn from './pages/Saturn/Saturn';
import Uranus from './pages/Uranus/Uranus';
import Venus from './pages/Venus/Venus';
import PageNotFound from './pages/404/PageNotFound';
import { AnimatePresence } from 'framer-motion';

function App() {
  const location = useLocation();
  return (
    <Provider>
      <Wrapper>
        <Navbar />
        <AnimatePresence exitBeforeEnter={true}>
          <Routes location={location} key={location.pathname}>
            <Route path='/' element={<Navigate replace to='/earth' />} />
            <Route path='/earth' element={<Earth />} />
            <Route path='/jupiter' element={<Jupiter />} />
            <Route path='/mars' element={<Mars />} />
            <Route path='/mercury' element={<Mercury />} />
            <Route path='/neptune' element={<Neptune />} />
            <Route path='/saturn' element={<Saturn />} />
            <Route path='/uranus' element={<Uranus />} />
            <Route path='/venus' element={<Venus />} />
            <Route path='/404' element={<PageNotFound />} />
            <Route path='*' element={<Navigate replace to='/404' />} />
          </Routes>
        </AnimatePresence>
      </Wrapper>
    </Provider>
  );
}

export default App;
