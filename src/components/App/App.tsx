import React, { useState } from 'react';
// import logo from '../../assets/images/logo.svg';
import { Pagination } from '../Pagination/Pagination';
import './App.scss'; 

const App: React.FC = () => {

  const [page, setPage] = useState(1);
  const totalPages = 15;
  const handlePages = (updatePage: number) => setPage(updatePage);

  return (
    <div className="App">
      {/* <img src={logo} className="App-logo" alt="logo" />
      <div>Hi, React</div> */}
      <div className="container">
      <Pagination
        page={page}
        totalPages={totalPages}
        handlePagination={handlePages}
      />
    </div>
    </div>
  );
};

export default App;
