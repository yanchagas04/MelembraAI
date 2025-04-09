import React from 'react';
import { Tarefa } from './types';

interface DiaAgendaProps {
  numero: string;
  nome: string;
  tarefas: Tarefa[];
}

const DiaAgenda: React.FC<DiaAgendaProps> = ({ numero, nome, tarefas }) => {
  return (
    <div className="h-full flex flex-col">
      <div className="font-bold text-right mb-1">{numero}</div>
      <div className="flex-grow overflow-y-auto">
        {tarefas.slice(0, 3).map(tarefa => (
          <div key={tarefa.id} className="flex items-center mb-1">
            <div 
              className={`w-2 h-2 rounded-full mr-1 ${
                tarefa.status === 1 ? 'bg-green-500' : 
                tarefa.status === 2 ? 'bg-red-500' : 'bg-slate-700'
              }`} 
            />
            <span className="text-xs truncate">{tarefa.tarefa}</span>
          </div>
        ))}
        {tarefas.length > 3 && (
          <div className="text-xs text-gray-500 text-center mt-1">
            +{tarefas.length - 3} mais
          </div>
        )}
      </div>
    </div>
  );
};

export default DiaAgenda;