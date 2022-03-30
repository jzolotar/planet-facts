import { Routes } from 'react-router-dom';
import Provider from './components/Provider/Provider';
import Wrapper from './components/Wrapper/Wrapper';

function App() {
  return (
    <Provider>
      <Wrapper></Wrapper>
    </Provider>
  );
}

export default App;
