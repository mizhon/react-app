interface Book {
  id: number; // 编号
  title: string; // 标题
  author: string; // 作者
  summary: string; // 简介
  coverage?: string; // 封面
  tags?: string[]; // 标签
  score?: number; // 评分
  price?: number; // 价格
};

export default Book;