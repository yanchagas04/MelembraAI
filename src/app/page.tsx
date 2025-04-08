import BarraLateral from "@/components/barraLateral/BarraLateral";
import SeletorDiaMes from "@/components/seletorDiaMes/SeletorDiaMes";
import Agenda from "@/components/Agenda/Index";

export default function Home() {
  // Exemplo de dados para a agenda
  const diasDaSemana: DiaAgenda[] = [
    {
      numero: "01",
      nome: "Segunda",
      tarefas: [
        { 
          id: 1, 
          tarefa: "Reunião com equipe", 
          createdAt: "2025-04-01T09:00:00",
          scheduledTo: "2025-04-01T10:00:00",
          status: 1 // Feita
        },
        { 
          id: 2, 
          tarefa: "Atualizar documentação", 
          createdAt: "2025-04-01T09:00:00",
          scheduledTo: "2025-04-01T14:00:00",
          status: 0 // Pendente
        }
      ]
    },
    {
      numero: "02",
      nome: "Terça",
      tarefas: [
        { 
          id: 3, 
          tarefa: "Desenvolver feature X", 
          createdAt: "2025-04-02T09:00:00",
          scheduledTo: "2025-04-02T12:00:00",
          status: 2 // Atrasada
        }
      ]
    },
    {
      numero: "03",
      nome: "Quarta",
      tarefas: [
        { 
          id: 4, 
          tarefa: "Testar integração", 
          createdAt: "2025-04-03T09:00:00",
          scheduledTo: "2025-04-03T11:00:00",
          status: 0 // Pendente
        },
        { 
          id: 5, 
          tarefa: "Revisar PRs", 
          createdAt: "2025-04-03T09:00:00",
          scheduledTo: "2025-04-03T15:00:00",
          status: 1 // Feita
        }
      ]
    }
  ];

  return (
    <div className="flex flex-row w-screen h-screen">
      <BarraLateral foto_perfil={null} nome="João Barcelos De Lima Alboquere" />
      <div className="flex flex-col items-center justify-start w-full h-full p-6 sm:p-8">
        <SeletorDiaMes />
        <Agenda mes={3} dias={diasDaSemana} />
      </div>
    </div>
  );
}

// Adicione esta interface no mesmo arquivo ou melhor ainda, importe do seu arquivo de tipos
interface DiaAgenda {
  numero: string;
  nome: string;
  tarefas: Tarefa[];
}

interface Tarefa {
  id: number;
  tarefa: string;
  createdAt: string;
  scheduledTo: string;
  status: 0 | 1 | 2;
}