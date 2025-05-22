"use client";
import { useState } from "react";

export default function TelaLogin() {
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [erro, setErro] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (email === "seuemail@example.com" && senha === "senha123") {
            setErro("");
            alert("Login realizado com sucesso!");
        } else {
            setErro("Email ou senha inválidos.");
        }
    };

    return (
        <div className="flex items-center justify-center w-screen h-screen">
            <div className="flex flex-col w-full max-w-sm text-center gap-4 p-8 border rounded shadow">
                <h1 className="text-2xl mb-4">Login</h1>
                <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
                    <input
                        type="email"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        placeholder="Digite seu email"
                        className="border rounded px-2 py-1"
                        required
                    />
                    <input
                        type="password"
                        value={senha}
                        onChange={e => setSenha(e.target.value)}
                        placeholder="Digite sua senha"
                        className="border rounded px-2 py-1"
                        required
                    />
                    {erro && <span className="text-red-500">{erro}</span>}
                    <button
                        type="submit"
                        className="bg-blue-600 text-white rounded px-4 py-2 hover:bg-blue-700 transition"
                    >
                        Entrar
                    </button>
                </form>
            </div>
        </div>
    );
}
