import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import StartupScreen from './container/StartupScreen';
import AppProvider from './context/index';

function App() {
  return (
    <>
      <AppProvider>
        <Router>
          <StartupScreen />
        </Router>
      </AppProvider>
    </>
  );
}

export default App;
