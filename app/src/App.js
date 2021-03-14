import routes from './config/routes';
import NavBar from './components/navbar/NavBar';

import './App.css';

function App() {
  return (
    <div className="App">
        <NavBar />
        { routes }
    </div>
  );
}

export default App;
