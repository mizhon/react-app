import React from 'react';
import "./Card.scss";
interface Book {
  id: number; // 编号
  title: string; // 标题
  author: string; // 作者
  summary: string; // 简介
  coverage?: string; // 封面
  tags?: string[]; // 标签
  score: number; // 评分
};

type Props = {
  book: Book;
};

export const Card = ({ book }: Props) => {
  return (
    <div className="Card">
      <div className="title">{ book.title }</div>
      <div className="author">{ book.author }</div>
      <div className="summary">{ book.summary }</div>
      <div className="coverage">{ book.coverage }</div>
      <div className="tags">{ book.tags }</div>
      <div className="score">{ book.score }</div>
    </div>
  );
}