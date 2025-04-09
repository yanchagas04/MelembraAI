import React from 'react';
import DiaAgenda from './DiaAgenda';
import { AgendaProps } from './types';

const diasDaSemana = ['Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado', 'Domingo'];

const Agenda: React.FC<AgendaProps> = ({ mes, diasAgenda }) => {
  // Obter o primeiro dia da semana do mês (0 = Domingo, 1 = Segunda, etc.)
  const primeiroDiaSemana = new Date(new Date().getFullYear(), mes, 1).getDay();
  // Ajuste para começar na segunda-feira (1)
  const offset = primeiroDiaSemana === 0 ? 6 : primeiroDiaSemana - 1;

  // Criar array de dias do mêsC
  const diasNoMes = new Date(new Date().getFullYear(), mes + 1, 0).getDate();
  const diasArray = Array.from({ length: diasNoMes }, (_, i) => i + 1);

  // Criar matriz de semanas (5 semanas)
  const semanas: (number | null)[][] = [];
  let semanaAtual = Array(7).fill(null);

  // Preencher dias vazios no início
  for (let i = 0; i < offset; i++) {
    semanaAtual[i] = null;
  }

  // Preencher com os dias do mês
  diasArray.forEach((dia, index) => {
    const posicao = (offset + index) % 7;
    semanaAtual[posicao] = dia;
    
    if (posicao === 6 || index === diasArray.length - 1) {
      semanas.push([...semanaAtual]);
      semanaAtual = Array(7).fill(null);
    }
  });

  return (
    <table className="w-full border-collapse">
          <thead>
            <tr>
              {diasDaSemana.map(dia => (
                <th key={dia} className="p-2 border font-medium">
                  {dia}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {semanas.map((semana, semanaIndex) => (
              <tr key={`semana-${semanaIndex}`}>
                {semana.map((dia, diaIndex) => (
                  <td 
                    key={`dia-${semanaIndex}-${diaIndex}`} 
                    className="h-24 p-1 border align-top"
                  >
                    {dia && (
                      <div className="flex flex-col h-full">
                        <div className="text-right font-medium pr-1">{dia}</div>
                        <div className="flex-grow overflow-y-auto">
                          {diasAgenda
                            .filter(d => d.numero === dia.toString())
                            .flatMap(d => d.tarefas)
                            .map(tarefa => (
                              <div key={tarefa.id} className="flex items-center mb-1">
                                <div className={`w-2 h-2 rounded-full mr-1 ${
                                  tarefa.status === 1 ? 'bg-green-500' : 
                                  tarefa.status === 2 ? 'bg-red-500' : 'bg-blue-500'
                                }`}></div>
                                <span className="text-xs truncate">{tarefa.tarefa}</span>
                              </div>
                            ))}
                        </div>
                      </div>
                    )}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
  );
};

export default Agenda;