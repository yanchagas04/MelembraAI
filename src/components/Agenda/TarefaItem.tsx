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
      case 1: return styles.statusFeito;
      case 2: return styles.statusAtrasado;
      default: return styles.statusPendente;
    }
  };

  return (
    <div className={styles.tarefaItem}>
      <div className={`${styles.statusIndicator} ${getCorStatus()}`}></div>
      <div className={styles.tarefaTexto}>{tarefa}</div>
    </div>
  );
};

export default TarefaItem;