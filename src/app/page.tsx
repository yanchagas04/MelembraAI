import Agenda from "@/components/Agenda/Agenda";
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
  const semanas = [];
  for (let i = 1; i < 32; i++) {
    semanas.push({"numero": i.toString(), "nome": "Segunda", "tarefas": []})
  }

  return (
    <div className="flex flex-row w-screen h-screen">
      <BarraLateral foto_perfil={null} nome="João Barcelos De Lima Alboquere" />
      <div className="flex flex-col items-center w-full h-full p-6 sm:p-8 overflow-y-auto">
        <SeletorDiaMes />
        <div className="w-full max-w-5xl mt-6">
          <div className="text-center text-xl font-bold mb-4">Abril 2025</div>
            <Agenda mes={3} dias={semanas} diasAgenda={diasAgenda} />
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