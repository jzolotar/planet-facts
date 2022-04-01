import { Routes } from 'react-router-dom';
import Provider from './components/Provider/Provider';
import Wrapper from './components/Wrapper/Wrapper';
import Navbar from './components/Navbar/Navbar';
import PlanetSection from './components/PlanetSection/PlanetSection';

function App() {
  return (
    <Provider>
      <Wrapper>
        <Navbar />
        <PlanetSection />
      </Wrapper>
    </Provider>
  );
}

export default App;
