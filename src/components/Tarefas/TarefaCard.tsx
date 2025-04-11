import { Tarefa, TarefasContext } from "@/app/tipos"
import uncheckedIcon from "../../../public/Tarefas/unchecked.svg";
import checkedIcon from "../../../public/Tarefas/check.svg";
import deleteIcon from "../../../public/Tarefas/delete.svg";
import deleteIconWhite from "../../../public/Tarefas/delete-white.svg";
import editIcon from "../../../public/Tarefas/edit.svg";
import { useContext, useEffect, useState } from "react";

export default function TarefaCard(props: Tarefa){
    const tarefasC = useContext(TarefasContext);
    const formatada = new Date(props.data.split("-").reverse().join("/"));
    const [hovered, setHovered] = useState(false);
    const [deleteH, setDeleteH] = useState(false);
    const [checked, setChecked] = useState(props.concluida);
    useEffect(() => {
        tarefasC.tarefas.find(t => t.id === props.id)!.concluida = checked
    }, [checked])
    return (
        <div className={`flex flex-row-reverse gap-2 w-full md:w-3/4 rounded-xl ${checked ? "bg-gradient-to-br from-gray-400 to-gray-600 text-white" : "bg-gray-200"} shadow-2xl hover:bg-gray-300 hover:scale-[101%] transition-all ease-in-out duration-300 p-4 text-black`} onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
            <div className={`${hovered ? "w-8" : "w-0"} flex flex-col gap-2 items-center justify-center transition-all ease-in-out duration-300 h-full`}>
                <button className="cursor-pointer hover:bg-gray-400 rounded-full p-1 transition-all ease-in-out duration-300 items-center"><img src={editIcon.src} alt="edit" className="w-8"/></button>
                <button className="cursor-pointer hover:bg-red-500 rounded-full p-1 transition-all ease-in-out duration-300 items-center" onMouseEnter={() => setDeleteH(true)} onMouseLeave={() => setDeleteH(false)} onClick={() => {
                    tarefasC.setTarefas(tarefasC.tarefas.filter(t => t.id !== props.id))
                }}><img src={!deleteH ? deleteIcon.src : deleteIconWhite.src} alt="delete" className="w-8" /></button>
            </div>
            <div className="flex flex-col w-full">
                <h1 className={`${checked ? "line-through" : ""} font-bold text-2xl`}>{props.titulo}</h1>
                <p className="pl-4">{props.descricao}</p>
                <span className="flex flex-row justify-end items-center gap-2">
                    <p className="font-bold">{props.horaFim}</p>
                    -
                    <p className="italic">{formatada.toISOString().split("T")[0].split("-").reverse().join("/")}</p>
                </span>
            </div>
            <div className={`${hovered ? "w-8" : "w-0"} flex flex-col gap-2 items-center justify-center transition-all ease-in-out duration-300 h-full`}>
                <button className="cursor-pointer hover:bg-gray-400 rounded-full p-1 transition-all ease-in-out duration-300 items-center" onClick={() => setChecked(!checked)}><img src={checked ? checkedIcon.src : uncheckedIcon.src} alt="edit" className="w-8"/></button>
            </div>
        </div>
    )
}