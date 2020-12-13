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
            &lt;
          </button>
        </div>
        <div className={styles.Content}>
          testing...
        </div>
        <div className={styles.Button}>
          <button>
            &gt;
          </button>
        </div>    
      </div>
    </div>
  );
}