import React from 'react';
import logo from '../../assets/images/logo.svg';
import './App.scss'; 

const App: React.FC = () => {
  return (
    <div className="App">
      <img src={logo} className="App-logo" alt="logo" />
      <div>Hi, React</div>
    </div>
  );
};

export default App;
