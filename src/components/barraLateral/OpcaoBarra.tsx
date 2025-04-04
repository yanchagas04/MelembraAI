export type OpcaoBarraProps = {
    icone: string
    texto: string
}

export default function OpcaoBarra(props: OpcaoBarraProps) {
    return (
        <a className="flex flex-row justify-start items-center gap-2 w-full rounded-lg py-1 px-2  border-white text-white hover:bg-blue-900 hover:bg-blend-multiply transition-all ease-in-out duration-150" href=""><img src={props.icone} alt="Conta" className="w-8"/>{props.texto}</a>
    )
}