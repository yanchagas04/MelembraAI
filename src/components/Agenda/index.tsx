import React from 'react';
import styles from './styles.module.css';
import DiaAgenda from './DiaAgenda';
import { AgendaProps } from './types';


const meses = [
  'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho',
  'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'
];

const Agenda: React.FC<AgendaProps> = ({ mes, dias }) => {
  return (
    <div className={styles.agendaContainer}>
      <h2 className={styles.mesTitulo}>{meses[mes]} {new Date().getFullYear()}</h2>
      
      <div className={styles.diasContainer}>
        {dias.map((dia, index) => (
          <DiaAgenda 
            key={index}
            numero={dia.numero}
            nome={dia.nome}
            tarefas={dia.tarefas}
          />
        ))}
      </div>
    </div>
  );
};

export default Agenda;