import React from 'react';
import ReactDOM from 'react-dom';
import './assets/styles/common.scss';
import App from './components/App/App';
import reportWebVitals from './reportWebVitals';
import { Card } from './components/Card/Card';
import imgURL from "./assets/images/coverages/8239935.jpg";

ReactDOM.render(
  <React.StrictMode>
    <App />
    <Card book={
      { 
        id:1, 
        title: "每天演好一个情绪稳定的成年人", 
        author: "Jane Deo",
        summary: "一本好书",
        coverage: imgURL,
        score: 7
      }
    } />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
