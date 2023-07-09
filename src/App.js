
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Create from './components/Create';
import Dashboard from './components/Dashboard';
function App() {
  return (
    <BrowserRouter >
    <Routes>

      <Route path="employee-front-end/create" exact element={ <Create/> }  />
      <Route path="employee-front-end/" exact element={ <Dashboard/> }  />

    </Routes>
    
    </BrowserRouter>
  );
}

export default App;
