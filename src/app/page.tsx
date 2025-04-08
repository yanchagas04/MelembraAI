import BarraLateral from "@/components/barraLateral/BarraLateral";
import MinhaConta from "@/components/MinhaConta/MinhaConta";

export default function Home() {
  return (
    <div className="flex flex-row w-screen h-screen">
      <BarraLateral foto_perfil={null} nome="João Barcelos De Lima Alboquere" />
      <div className="flex flex-col items-center justify-center w-full">
      <MinhaConta
        nome="João Barcelos De Lima Alboquere"
        email= "affaef@example.com"
        foto_perfil="https://example.com/foto.jpg"
        senha="senha123"/>
      </div>
    </div>
  );
}
