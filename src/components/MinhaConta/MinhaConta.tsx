"use client";
import { useEffect, useState } from "react";
import edit_pencil from "../../../public/MinhaConta/edit.svg"

export default function MinhaConta() {
    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [foto_perfil, setFoto_perfil] = useState("");
    const [senha, setSenha] = useState("");
    useEffect(() => {
        setNome(localStorage.getItem("nome") || "");
        setEmail(localStorage.getItem("email") || "");
        setFoto_perfil(localStorage.getItem("foto_perfil") || "https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mp&f=y");
        setSenha(localStorage.getItem("senha") || "");
    })
    return (
        <div className="min-h-screen flex items-center justify-center">
            <div className="minha-conta flex flex-col w-full text-center gap-4">
                <h1 className="text-2xl">Minha Conta</h1>
                <img
                    src={foto_perfil}
                    alt="Foto de perfil"
                    className="w-50 h-50 rounded-full object-cover mx-auto"
                />
                <form className="mt-4">
                    <label className="flex items-center gap-2 justify-center">
                        Nome:
                        <input
                            type="text"
                            defaultValue={nome}
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
                            defaultValue={email}
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
                            defaultValue={senha}
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
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" 
                        onClick={() => {alert("Esta funcionalidade estará disponível em breve.")}}>
                        Salvar (em breve)
                    </button>
            </div>
        </div>
    );
}
