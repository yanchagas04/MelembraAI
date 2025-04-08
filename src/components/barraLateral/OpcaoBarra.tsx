"use client";

export type OpcaoBarraProps = {
  icone: string;
  texto: string;
  href?: string;
  onClick?: () => void;
};

export default function OpcaoBarra(props: OpcaoBarraProps) {
  const Componente = props.href ? "a" : "button";

  return (
    <Componente
      href={props.href}
      onClick={props.onClick}
      className="flex flex-row justify-start items-center gap-2 w-full rounded-lg py-1 px-2 border-white text-white hover:bg-blue-900 hover:bg-blend-multiply transition-all ease-in-out duration-150 cursor-pointer"
    >
      <img src={props.icone} alt="Ícone" className="w-8" />
      {props.texto}
    </Componente>
  );
}