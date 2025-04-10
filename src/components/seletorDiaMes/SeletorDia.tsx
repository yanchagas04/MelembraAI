"use client"

import SetaEsquerda from "../../../public/SeletorDiaMes/setaEsquerda.svg";
import SetaDireita from "../../../public/SeletorDiaMes/setaDireita.svg";
import Dia from "./Dia";
import React, { useContext, useEffect, useState } from 'react'
import { DataContext } from "@/app/tipos";
import { deslocarDias } from "./Utils/utils";

export default function SeletorDia(props: {dias: number[]}) {
    const diaMinimo = new Date().getDate();
    const mesMinimo = new Date().getMonth();
    const data = useContext(DataContext);
    const [selectedDay, setSelectedDay] = useState<number | null>(data.dia);
    useEffect(() => {
        document.getElementById("dias")!.scrollBy({left: 280 * deslocarDias(data.dia), behavior: "smooth"})
    }, [mesMinimo]);
    useEffect(() => { 
        setSelectedDay(data.dia);
    }, [data.dia]);
    return (
        <>
            <div className="flex flex-row w-fit items-center">
                <button className="w-fit flex justify-center" onClick={() => {document.getElementById("dias")!.scrollBy({left: -280, behavior: "smooth"})}}>
                    <img src={SetaEsquerda.src} alt="Dia anterior"/>
                </button>
                <div id="dias" className="flex flex-row px-2 gap-2 w-72 justify-start items-center overflow-x-hidden touch-pan-x transition-all ease-in-out duration-150 h-fit">
                    {props.dias.map((dia) => (
                        <Dia 
                            key={dia} 
                            num={dia} 
                            isSelected={selectedDay === dia}
                            onSelect={() => {
                                if (!(data.mes == mesMinimo && dia < diaMinimo)) {
                                    setSelectedDay(prev => prev === dia ? null : dia)
                                    data.setDia(dia);
                                }}}
                        />
                    ))}
                </div>
                <button className="w-fit flex justify-center" onClick={() => {document.getElementById("dias")!.scrollBy({left: 280, behavior: "smooth"})}}>
                    <img src={SetaDireita.src} alt="Dia anterior"/>
                </button>
            </div>
        </>
    )
}