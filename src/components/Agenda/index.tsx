import React from 'react';
import DiaAgenda from './DiaAgenda';
import { AgendaProps } from './types';

const diasDaSemana = ['Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado', 'Domingo'];

const Agenda: React.FC<AgendaProps> = ({ mes, dias }) => {
  // Obter o primeiro dia da semana do mês (0 = Domingo, 1 = Segunda, etc.)
  const primeiroDiaSemana = new Date(new Date().getFullYear(), mes, 1).getDay();
  // Ajuste para começar na segunda-feira (1)
  const offset = primeiroDiaSemana === 0 ? 6 : primeiroDiaSemana - 1;

  // Criar array de dias do mês
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
    <div className="font-sans max-w-4xl mx-auto p-5">
      <h2 className="text-center mb-5 text-2xl text-gray-800">Abril 2025</h2>
      
      <table className="w-full border-collapse table-fixed">
        <thead>
          <tr>
            {diasDaSemana.map(dia => (
              <th 
                key={dia} 
                className="p-3 text-center font-bold !bg-slate-800 text-white border border-blue-700"
              >
                {dia}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {semanas.map((semana, index) => (
            <tr key={`semana-${index}`}>
              {semana.map((dia, diaIndex) => (
                <td 
                  key={`dia-${index}-${diaIndex}`} 
                  className="h-28 align-top border border-gray-300 p-2"
                >
                  {dia ? (
                    <DiaAgenda 
                      numero={dia.toString()}
                      nome={diasDaSemana[diaIndex]}
                      tarefas={dias.find(d => d.numero === dia.toString())?.tarefas || []}
                    />
                  ) : null}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Agenda;