"use client"
import { Context, createContext, Dispatch, useState } from "react";
import SeletorDia from "./SeletorDia";
import SeletorMes from "./SeletorMes";
import { dias, iniciais_meses } from "./Utils/utils";

export type DataContextType = {
    dia: number,
    mes: number,
    ano: number,
    setDia: Dispatch<React.SetStateAction<number>>,
    setMes: Dispatch<React.SetStateAction<number>>,
    setAno: Dispatch<React.SetStateAction<number>>
};
export const DataContext : Context<DataContextType>  = createContext({} as DataContextType);

export default function SeletorDiaMes() {
    const [dia, setDia] = useState(new Date().getDate());
    const [mes, setMes] = useState(new Date().getMonth());
    const [ano, setAno] = useState(new Date().getFullYear());
    return (
        <form className="w-fit flex flex-col items-center" onSubmit={(e) => e.preventDefault()}>
            <DataContext.Provider value={{
                dia: dia,
                mes: mes,
                ano: ano,
                setDia: setDia,
                setMes: setMes,
                setAno: setAno
            }}>
                <SeletorDia dias={dias(new Date().getMonth())} />
                <SeletorMes meses={iniciais_meses} />
            </DataContext.Provider>
        </form>
    )
}