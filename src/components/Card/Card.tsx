import React from 'react';
import Book from '../../models/Book';
import "./Card.scss";

type CardProps = {
  book: Book;
};

export const Card = ({ book }: CardProps) => {
  return (
    <div className="Card">
      <img src={ book.coverage } className="coverage-banner" alt="coverage"/>
      <div className="title">{ book.title }</div>
      <div className="author">{ book.author }</div>
      <div className="summary">{ book.summary }</div>
      <div className="tags">{ book.tags }</div>
      <div className="score">{ book.score }</div>
    </div>
  );
}