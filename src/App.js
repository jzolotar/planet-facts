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
          <Route path='/earth' element={<Earth />} />
        </Routes>
      </Wrapper>
    </Provider>
  );
}

export default App;
