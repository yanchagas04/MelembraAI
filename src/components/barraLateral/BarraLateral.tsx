"use client"
import { useState } from "react";
import { useRouter } from "next/navigation";
import icone_pessoa from "../../../public/BarraLateral/pessoa.svg";
import icone_config from "../../../public/BarraLateral/config.svg";
import icone_calendario from "../../../public/BarraLateral/calendario.svg";
import OpcaoBarra, { OpcaoBarraProps } from "./OpcaoBarra";

type BarraLateralProps = {
    foto_perfil: string | null,
    nome: string
}

export default function BarraLateral(props: BarraLateralProps) {
    const [open, setOpen] = useState(false);
    const router = useRouter();

    const opcoes : OpcaoBarraProps[] = [
        {
            icone: icone_pessoa.src,
            texto: " Minha Conta",
            onClick: () => router.push("/MinhaConta")
        },
        {
            icone: icone_calendario.src,
            texto: " Agenda"
        },
        {
            icone: icone_config.src,
            texto: " Logout",
            onClick: () => {
                localStorage.clear();
                router.push("/");
            }
        },
    ];

    return (
        <nav className={`${open ? "md:w-64" : "md:w-24"} flex flex-col items-center justify-between py-4 px-2 md:h-screen bg-blue-500 md:bg-gradient-to-b from-blue-500 to-blue-900 gap-4 transition-all ease-in-out duration-150`} onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)}>
            <div className="hidden md:flex flex-col items-center justify-center w-full gap-2">
                <img className="rounded-full w-12" src={props.foto_perfil ? props.foto_perfil : "https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mp&f=y"} alt="Foto de perfil" />
                <h1 className={`${open ? "flex" : "hidden"} text-white font-bold text-center`}>{props.nome}</h1>
            </div>
            <div className={`${open ? "md:flex" : "md:hidden"} flex md:flex-col items-center justify-start w-full h-fit gap-1`}>
                {opcoes.map((opcao) => (
                    <OpcaoBarra
                        key={opcao.texto}
                        icone={opcao.icone}
                        texto={opcao.texto}
                        onClick={opcao.onClick}
                    />
                ))}
            </div>
        </nav>
    )
}