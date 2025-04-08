export type StatusTarefa = 0 | 1 | 2; // 0 = não feita, 1 = feita, 2 = atrasada

export interface Tarefa {
  id: number;
  tarefa: string;
  createdAt: string;
  scheduledTo: string;
  status: StatusTarefa;
}

export interface DiaAgenda {
  numero: string; // "01", "02", etc.
  nome: string;   // "Segunda", "Terça", etc.
  tarefas: Tarefa[];
}

export interface AgendaProps {
  mes: number;
  dias: DiaAgenda[];
}