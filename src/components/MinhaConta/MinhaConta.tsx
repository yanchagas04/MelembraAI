"use client";
import foto_perfil from "@/app/WIN_20200420_15_20_41_Pro.jpg";
import edit_pencil from "@/public/MinhaConta/edit.png";
interface Usuario {
    nome: string,
    email: string,
    foto_perfil: string,
    senha: string;
    }

const usuario: Usuario = {
    nome: "João Silva",
    email: "affaef@example.com",
    foto_perfil: foto_perfil.src ,
    senha: "senha123",
};

export default function MinhaConta(props: Usuario) {
    return (
        <div className="min-h-screen flex items-center justify-center">
            <div className="minha-conta text-center">
            <h1>Minha Conta</h1>
            <img
                src={usuario.foto_perfil}
                alt="Foto de perfil"
                className="w-50 h-50 rounded-full object-cover mx-auto"
            />
            <form className="mt-4">
                <label className="flex items-center gap-2 justify-center">
                Nome:
                <input
                    type="text"
                    defaultValue={usuario.nome}
                    placeholder="Digite seu nome"
                    className="border rounded px-2 py-1"
                />
                <span className="material-icons text-black cursor-pointer"></span>
                </label>
                <br />
                <label className="flex items-center gap-2 justify-center">
                Email:
                <input
                    type="email"
                    defaultValue={usuario.email}
                    placeholder="Digite seu email"
                    className="border rounded px-2 py-1"
                />
                <span className="material-icons text-black cursor-pointer"></span>
                </label>
                <br />
                <label className="flex items-center gap-2 justify-center">
                Senha:
                <input
                    type="password"
                    defaultValue={usuario.senha}
                    placeholder="Digite sua senha"
                    className="border rounded px-2 py-1"
                />
                <span className="material-icons text-black cursor-pointer"></span>
                </label>
            </form>
            </div>
        </div>
    );
}
