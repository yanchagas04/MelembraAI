"use client"
import { useContext, useEffect, useState } from "react";
import SeletorDia from "./SeletorDia";
import SeletorMes from "./SeletorMes";
import { pegarDias, iniciais_meses } from "./Utils/utils";
import { DataContext } from "@/app/tipos";



export default function SeletorDiaMes() {
    const data = useContext(DataContext);
    const [dias, setDias] = useState<number[]>(pegarDias(new Date().getMonth()));
    useEffect(() => {
        setDias(pegarDias(data.mes));
    }, [data.mes]);
    return (
        <form className="w-fit flex flex-col items-center" onSubmit={(e) => e.preventDefault()}>
            
                <SeletorDia dias={dias} />
                <SeletorMes meses={iniciais_meses} />
            
        </form>
    )
}