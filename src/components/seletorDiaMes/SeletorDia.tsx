"use client"

import SetaEsquerda from "../../../public/SeletorDiaMes/setaEsquerda.svg";
import SetaDireita from "../../../public/SeletorDiaMes/setaDireita.svg";
import Dia from "./Dia";
import React, { useState } from 'react'

export default function SeletorDia(props: {dias: number[]}) {
    const [selectedDay, setSelectedDay] = useState<number | null>(null);

    return (
        <>
            <div className="flex flex-row w-fit items-center">
                <button className="w-fit flex justify-center" onClick={() => {document.getElementById("dias")!.scrollBy({left: -280, behavior: "smooth"})}}>
                    <img src={SetaEsquerda.src} alt="Dia anterior"/>
                </button>
                <div id="dias" className="flex flex-row px-2 gap-2 w-72 justify-start items-center overflow-x-hidden transition-all ease-in-out duration-150 h-fit">
                    {props.dias.map((dia) => (
                        <Dia 
                            key={dia} 
                            num={dia} 
                            isSelected={selectedDay === dia}
                            onSelect={() => setSelectedDay(prev => prev === dia ? null : dia)}
                        />
                    ))}
                </div>
                <button className="w-fit flex justify-center" onClick={() => {document.getElementById("dias")!.scrollBy({left: 280, behavior: "smooth"})}}>
                    <img src={SetaDireita.src} alt="Dia anterior"/>
                </button>
            </div>
            <p>Dia selecionado: {selectedDay || "Nenhum"}</p>
        </>
    )
}