import logo from './logo.svg';
import './App.css';
import ViewGraph from './components/ViewGraph';
import GraphForm from './components/GraphForm'
import GraphList from './components/GraphList';
import Login from './components/Login';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


import { DataProvider } from './Context/DataContext';
import Graph from './components/GraphList';
function App() {
  return (
    <DataProvider>
<div className="App">
  <Router>
    <Routes>
      <Route path='/' element={<Login/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/GraphForm' element={<GraphForm/>}/>
      <Route path='/GraphList' element={<GraphList/>}/>
      <Route path='/GraphView/:id' element={<ViewGraph/>}/>
    </Routes>
  </Router>
    </div>
    </DataProvider>
    
  );
}

export default App;
