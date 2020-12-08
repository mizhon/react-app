import React from 'react';
import ReactDOM from 'react-dom';
import './assets/styles/common.scss';
import App from './components/App/App';
import reportWebVitals from './reportWebVitals';
import { Card } from './components/Card/Card';

ReactDOM.render(
  <React.StrictMode>
    <App />
    {/* <Card book={"每天演好一个情绪稳定的成年人"} /> */}
    <Card book={
      { 
        id:1, 
        title: "每天演好一个情绪稳定的成年人", 
        author: "Mister.Z",
        summary: "一本好书",
        coverage: "",
        score: 7.9
      }
    } />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
