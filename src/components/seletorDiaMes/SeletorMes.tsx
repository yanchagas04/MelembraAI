"use client"

import { useContext, useEffect, useState } from "react";
import SetaDireita from "../../../public/SeletorDiaMes/setaDireita.svg";
import SetaEsquerda from "../../../public/SeletorDiaMes/setaEsquerda.svg";
import { DataContext } from "@/app/tipos";

export default function SeletorMes(props: {meses: string[]}) {
    const data = useContext(DataContext);
    const anoMinimo = new Date().getFullYear();
    const mesMinimo = new Date().getMonth();
    const [mes, setMes] = useState<number>(mesMinimo);
    const [ano, setAno] = useState(new Date().getFullYear());
    useEffect(() => {document.getElementById("meses")!.scrollBy({left: 80 * mesMinimo, behavior: "smooth"})}, [mesMinimo]);
    return ( 
        <>
            <div className="flex flex-row w-fit items-center">
                <button className="w-fit flex justify-center" onClick={() => {
                    if (mes === 0 && ano > anoMinimo) {
                        setMes(11); data.setMes(11);
                        setAno(ano - 1); data.setAno(ano - 1);
                        document.getElementById("meses")!.scrollBy({left: 880, behavior: "smooth"});  
                    } else if (ano > anoMinimo) {
                        setMes(mes - 1); data.setMes(mes - 1);
                        document.getElementById("meses")!.scrollBy({left: -80, behavior: "smooth"});
                    } else if (ano === anoMinimo && mes > mesMinimo) {
                        if (mes - 1 == mesMinimo) {
                            data.setDia(new Date().getDate());
                        }
                        setMes(mes - 1); data.setMes(mes - 1);
                        document.getElementById("meses")!.scrollBy({left: -80, behavior: "smooth"});
                    }
                    }}>
                    <img src={SetaEsquerda.src}/>
                </button>
                <div id="meses" className="flex flex-row w-[80px] justify-start items-center overflow-x-hidden transition-all ease-in-out duration-150 h-fit">
                    {props.meses.map((month) => (
                        <button 
                            key={month} 
                            name="meses" 
                            className={`font-bold w-20 px-1 flex flex-row justify-center items-center text-white text-nowrap`}
                        >
                            {`${props.meses[mes]}, ${ano}`}
                        </button>
                    ))}
                </div>
                <button className="w-fit flex justify-center" onClick={() => {
                    if (mes === 11) {
                        setMes(0); data.setMes(0);
                        setAno(ano + 1); data.setAno(ano + 1);
                        document.getElementById("meses")!.scrollBy({left: -880, behavior: "smooth"});
                        return
                    };
                    if (mes < 11) {
                        setMes(mes + 1); data.setMes(mes + 1);
                        document.getElementById("meses")!.scrollBy({left: 80, behavior: "smooth"});
                    };
                    }}>
                    <img src={SetaDireita.src}/>
                </button>
            </div>
        </>
    )
}