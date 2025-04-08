"use client";

import { useState } from "react";
import icone_pessoa from "../../../public/BarraLateral/pessoa.svg";
import icone_config from "../../../public/BarraLateral/config.svg";
import icone_calendario from "../../../public/BarraLateral/calendario.svg";
import OpcaoBarra from "./OpcaoBarra";
import ConfigModal from "./ConfigModal";

type BarraLateralProps = {
    foto_perfil: string | null,
    nome: string
}

export default function BarraLateral(props: BarraLateralProps) {
    const [open, setOpen] = useState(false);
    const [isConfigOpen, setIsConfigOpen] = useState(false);

    const opcoes = [
        {
            icone: icone_pessoa.src,
            texto: " Minha Conta",
            //href: ""
        },
        {
            icone: icone_calendario.src,
            texto: " Agenda",
            //href: ""
        },
        {
            icone: icone_config.src,
            texto: " Configurações",
            onClick: () => setIsConfigOpen(true)
        }
    ];

    return (
        <>
            <nav className={`${open ? "w-64" : "w-24"} flex flex-col items-center justify-between py-4 px-2 h-screen bg-blue-500 gap-4 transition-all ease-in-out duration-150`} 
                onMouseEnter={() => setOpen(true)} 
                onMouseLeave={() => setOpen(false)}>
                
                <div className="flex flex-col items-center justify-center w-full gap-2">
                    <img className="rounded-full w-12" 
                         src={props.foto_perfil ? props.foto_perfil : "https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mp&f=y"} 
                         alt="Foto de perfil" />
                    <h1 className={`${open ? "flex" : "hidden"} text-white font-bold text-center`}>{props.nome}</h1>
                </div>
                
                <div className={`${open ? "flex" : "hidden"} flex-col items-center justify-start w-full h-fit gap-1`}>
                    {opcoes.map((opcao) => (
                        <OpcaoBarra 
                            key={opcao.texto} 
                            icone={opcao.icone} 
                            texto={opcao.texto}
                            //href={opcao.href}
                            onClick={opcao.onClick}
                        />
                    ))}
                </div>
            </nav>

            <ConfigModal 
                isOpen={isConfigOpen}
                onClose={() => setIsConfigOpen(false)}
            />
        </>
    );
}