import { Context, createContext, Dispatch } from "react";

export type DataContextType = {
    dia: number,
    mes: number,
    ano: number,
    setDia: Dispatch<React.SetStateAction<number>>,
    setMes: Dispatch<React.SetStateAction<number>>,
    setAno: Dispatch<React.SetStateAction<number>>
};

export type Tarefa = {
    id: string,
    titulo: string,
    descricao: string,
    data: string,
    concluida: boolean
}

export type Activity = {
    id: string,
    title: string,
    description: string,
    date: string,
    completed: boolean
}

export type TarefasContextType = {
    tarefas: Tarefa[],
    setTarefas: Dispatch<React.SetStateAction<Tarefa[]>>
}

export const DataContext : Context<DataContextType>  = createContext({} as DataContextType);
export const TarefasContext : Context<TarefasContextType>  = createContext({} as TarefasContextType);