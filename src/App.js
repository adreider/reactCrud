import React from 'react'
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import AddAluno from './pages/AlunoCreate';
import ReadAluno from './pages/AlunoRead';
import UpdateAluno from './pages/AlunoUpdate';

function App() {
  return (
    <Router>
      <div className="main">
        <h2 className="main-header">React Crud Options</h2>
        <Route exact path="/create" component={AddAluno} />
        <div style={{}}>
          <Route exact path="/read" component={ReadAluno} />
        </div>
        <Route exact path="/update" component={UpdateAluno} />
      </div>
    </Router>
  );
}

export default App;
