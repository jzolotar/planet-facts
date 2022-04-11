import { Route, Routes } from 'react-router-dom';
import Provider from './components/Provider/Provider';
import Wrapper from './components/Wrapper/Wrapper';
import Navbar from './components/Navbar/Navbar';
import PlanetSection from './components/PlanetSection/PlanetSection';
import Earth from './pages/Earth/Earth';

function App() {
  return (
    <Provider>
      <Wrapper>
        <Navbar />
        <Routes>
          <Route path='/' element={<Earth />} />
          <Route path='/earth' element={<Earth />} />
          <Route path='/jupiter' element={<Earth />} />
          <Route path='/mars' element={<Earth />} />
          <Route path='/mercury' element={<Earth />} />
          <Route path='/neptune' element={<Earth />} />
          <Route path='/saturn' element={<Earth />} />
          <Route path='/uranus' element={<Earth />} />
          <Route path='/venus' element={<Earth />} />
        </Routes>
      </Wrapper>
    </Provider>
  );
}

export default App;
