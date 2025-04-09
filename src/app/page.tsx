import BarraLateral from "@/components/barraLateral/BarraLateral";
import SeletorDiaMes from "@/components/seletorDiaMes/SeletorDiaMes";

export default function Home() {
  // Dados de exemplo para a agenda (Abril 2025)
  const diasDaSemana = ['Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado', 'Domingo'];
  
  const diasAgenda: DiaAgenda[] = [
    {
      numero: "1",
      nome: "Terça",
      tarefas: [
        { 
          id: 1, 
          tarefa: "Reunião inicial", 
          status: 1 // Feita
        }
      ]
    },
    {
      numero: "2",
      nome: "Quarta",
      tarefas: [
        { 
          id: 2, 
          tarefa: "Desenvolver feature", 
          status: 0 // Pendente
        }
      ]
    },
    {
      numero: "15",
      nome: "Terça",
      tarefas: [
        { 
          id: 3, 
          tarefa: "Testar integração", 
          status: 0 // Pendente
        },
        { 
          id: 4, 
          tarefa: "Revisar código", 
          status: 1 // Feita
        }
      ]
    },
    {
      numero: "16",
      nome: "Quarta",
      tarefas: [
        { 
          id: 5, 
          tarefa: "Entregar relatório", 
          status: 2 // Atrasada
        }
      ]
    }
  ];

  // Configuração do calendário (Abril 2025 começa na Terça)
  const semanas = [
    [null, 1, 2, 3, 4, 5, 6],    // Primeira semana
    [7, 8, 9, 10, 11, 12, 13],    // Segunda semana
    [14, 15, 16, 17, 18, 19, 20], // Terceira semana
    [21, 22, 23, 24, 25, 26, 27], // Quarta semana
    [28, 29, 30, null, null, null, null] // Quinta semana
  ];

  return (
    <div className="flex flex-row w-screen h-screen">
      <BarraLateral foto_perfil={null} nome="João Barcelos De Lima Alboquere" />
      <div className="flex flex-col items-center w-full h-full p-6 sm:p-8 overflow-y-auto">
        <SeletorDiaMes />
        
        <div className="w-full max-w-5xl mt-6">
          <div className="text-center text-xl font-bold mb-4">Abril 2025</div>
          
          <table className="w-full border-collapse">
            <thead>
              <tr>
                {diasDaSemana.map(dia => (
                  <th key={dia} className="p-2 border bg-gray-50 font-medium">
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
        </div>
      </div>
    </div>
  );
}

// Tipos (melhor mover para um arquivo types.ts)
interface DiaAgenda {
  numero: string;
  nome: string;
  tarefas: Tarefa[];
}

interface Tarefa {
  id: number;
  tarefa: string;
  status: 0 | 1 | 2; // 0=Pendente, 1=Feita, 2=Atrasada
}