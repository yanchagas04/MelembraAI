import BarraLateral from "@/components/barraLateral/BarraLateral";
import SeletorDiaMes from "@/components/seletorDiaMes/SeletorDiaMes";

export default function Home() {
  return (
    <div className="flex flex-row w-screen h-screen"> 
      <BarraLateral foto_perfil={null} nome="João Barcelos De Lima Alboquere" />
      <div className="flex flex-col items-center justify-start w-full h-full p-6 sm:p-8">
        <SeletorDiaMes />
      </div>
    </div>
  );
}
