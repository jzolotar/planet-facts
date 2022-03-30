import { Routes } from 'react-router-dom';
import Provider from './components/Provider/Provider';
import Wrapper from './components/Wrapper/Wrapper';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <Provider>
      <Wrapper>
        <Navbar />
      </Wrapper>
    </Provider>
  );
}

export default App;
