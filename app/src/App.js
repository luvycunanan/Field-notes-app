import { useState } from 'react';
import Routes from './config/routes';
import NavBar from './components/navbar/NavBar';

import './App.css';

function App() {
  const [token, setToken] = useState(null);

  return (
    <div className="App">
        <NavBar />
        <Routes setToken={setToken} />
    </div>
  );
}

export default App;
