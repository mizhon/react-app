import React from 'react';
import styles from './Container.module.scss';

interface IContainerProps { 
  page: number;
  handlePagination: (page: number) => void;
} 

export const Container: React.FC<IContainerProps> = (page, handlePagination) => {
  
  handlePagination = (page: number) => {
    console.log('testing ...', page)
  }

  return (
    <div className={styles.Container}>
      <div className={styles.ContainerWrapper}>
        <div className={styles.Button}>
          <button 
            onClick={() => handlePagination(page)}
          >
            1
          </button>
        </div>
        <div className={styles.Content}>
          nimabi
        </div>
        <div className={styles.Button}>
          <button>2</button>
        </div>    
      </div>
    </div>
  );
}