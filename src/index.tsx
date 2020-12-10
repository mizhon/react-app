import React from 'react';
import ReactDOM from 'react-dom';
import './assets/styles/common.scss';
import App from './components/App/App';
import reportWebVitals from './reportWebVitals';
import { Card } from './components/Card/Card';
import Book from './models/Book';
import imgURL from "./assets/images/coverages/8239935.jpg";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const books: Book[] = [];

ReactDOM.render(
  <React.StrictMode>
    <Card book={
      { 
        id:1, 
        title: "山青卷白云：女翻译与王维", 
        author: "青溪客",
        summary: "描写盛唐气象不落俗套，带你穿越到一个活灵活现的唐朝。",
        coverage: imgURL,
        score: 7
      }
    } />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
