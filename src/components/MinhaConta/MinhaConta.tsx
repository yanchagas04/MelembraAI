"use client";
import edit_pencil from "../../../public/MinhaConta/edit.svg"
interface Usuario {
    nome: string,
    email: string,
    foto_perfil: string,
    senha: string;
    }

const usuario: Usuario = {
    nome: "Seu nome aqui",
    email: "seuemail@example.com",
    foto_perfil: "https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mp&f=y",
    senha: "senha123",
};
export default function MinhaConta() {
    return (
        <div className="min-h-screen flex items-center justify-center">
            <div className="minha-conta flex flex-col w-full text-center gap-4">
                <h1 className="text-2xl">Minha Conta</h1>
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
                            readOnly
                            onBlur={(e) => {
                                e.currentTarget.readOnly = true;
                            }}
                        />
                        <button
                            type="button"
                            className="material-icons text-black cursor-pointer w-6"
                            onClick={(e) => {
                                const input = (e.currentTarget.previousSibling as HTMLInputElement);
                                input.readOnly = false;
                                input.focus();
                            }}
                        >
                            <img src={edit_pencil.src} alt="Edit" />
                        </button>
                    </label>
                    <br />
                    <label className="flex items-center gap-2 justify-center">
                        Email:
                        <input
                            type="email"
                            defaultValue={usuario.email}
                            placeholder="Digite seu email"
                            className="border rounded px-2 py-1"
                            readOnly
                            onBlur={(e) => {
                                e.currentTarget.readOnly = true;
                            }}
                        />
                        <button
                            type="button"
                            className="material-icons text-black cursor-pointer w-6"
                            onClick={(e) => {
                                const input = (e.currentTarget.previousSibling as HTMLInputElement);
                                input.readOnly = false;
                                input.focus();
                            }}
                        >
                            <img src={edit_pencil.src} alt="Edit" />
                        </button>
                    </label>
                    <br />
                    <label className="flex items-center gap-2 justify-center">
                        Senha:
                        <input
                            type="password"
                            defaultValue={usuario.senha}
                            placeholder="Digite sua senha"
                            className="border rounded px-2 py-1"
                            readOnly
                            onBlur={(e) => {
                                e.currentTarget.readOnly = true;
                            }}
                        />
                        <button
                            type="button"
                            className="material-icons text-black cursor-pointer w-6"
                            onClick={(e) => {
                                const input = (e.currentTarget.previousSibling as HTMLInputElement);
                                input.readOnly = false;
                                input.focus();
                            }}
                        >
                            <img src={edit_pencil.src} alt="Edit" />
                        </button>
                    </label>
                </form>
            </div>
        </div>
    );
}
