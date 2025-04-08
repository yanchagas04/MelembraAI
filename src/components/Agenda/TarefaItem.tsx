import React from 'react';
import styles from './styles.module.css';

interface TarefaItemProps {
  id: number;
  tarefa: string;
  status: 0 | 1 | 2;
}

const TarefaItem: React.FC<TarefaItemProps> = ({ tarefa, status }) => {
  const getCorStatus = () => {
    switch (status) {
      case 1: return styles.statusFeito; // Verde
      case 2: return styles.statusAtrasado; // Vermelho
      default: return styles.statusPendente; // Azul
    }
  };

  return (
    <div className={styles.tarefaContainer}>
      <div className={`${styles.statusIndicator} ${getCorStatus()}`}></div>
      <div className={styles.tarefaBox}>
        {tarefa}
      </div>
    </div>
  );
};

export default TarefaItem;