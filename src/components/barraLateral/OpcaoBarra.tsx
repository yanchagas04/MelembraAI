export type OpcaoBarraProps = {
  icone: string;
  texto: string;
  onClick?: () => void;
};

export default function OpcaoBarra(props: OpcaoBarraProps) {
  return (
    <span
      className="flex flex-row justify-start items-center gap-2 w-full rounded-lg py-1 px-2  border-white text-white hover:bg-blue-950 hover:bg-blend-multiply transition-all ease-in-out duration-150 cursor-pointer break-words text-md md:text-base"
      onClick={props.onClick}
    >
      <img src={props.icone} alt="Conta" className="w-6 md:w-8" />
      {props.texto}
    </span>
  );
}
