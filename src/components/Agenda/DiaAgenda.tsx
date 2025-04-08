import React from 'react';
import TarefaItem from './TarefaItem';
import styles from './styles.module.css';

interface DiaAgendaProps {
  numero: string;
  nome: string;
  tarefas: Array<{
    id: number;
    tarefa: string;
    status: 0 | 1 | 2;
  }>;
}

const DiaAgenda: React.FC<DiaAgendaProps> = ({ numero, nome, tarefas }) => {
  return (
    <div className={styles.diaContainer}>
      <div className={styles.diaTitulo}>
        {numero} - {nome}
      </div>
      <div className={styles.tarefasContainer}>
        {tarefas.map(tarefa => (
          <TarefaItem key={tarefa.id} {...tarefa} />
        ))}
      </div>
    </div>
  );
};

export default DiaAgenda;