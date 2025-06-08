"use client";
import { useState } from "react";
import register from "../TelaRegistro/Registro"; // Import the register function
import Link from 'next/link'; // Import Link for navigation

export default function TelaRegistro() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [successMessage, setSuccessMessage] = useState("");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError("");
        setSuccessMessage("");

        if (!name || !email || !password) {
            setError("Todos os campos são obrigatórios.");
            return;
        }
        if (password.length < 6) {
            setError("A senha deve ter no mínimo 6 caracteres.");
            return;
        }

        const res = await register(name, email, password);
        console.log(res);
        if (res.user !== undefined){  
            setSuccessMessage("Cadastro realizado com sucesso!");
            setIsLoading(false);
        } else {
             setError(res.message || "Falha ao fazer login. Tente novamente.");
        }

        setIsLoading(true);
    };

    return (
        <div className="flex items-center justify-center w-screen h-screen bg-gray-900"> {/* Dark background */}
            <div className="flex flex-col w-full max-w-sm text-center gap-4 p-8 bg-gray-800 rounded-lg shadow-lg"> {/* Darker card, rounded, shadow */}
                <h1 className="text-2xl mb-4 text-white font-semibold">Registro - MeLembraAI</h1> {/* White text, bold */}
                <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
                    <input
                        type="text"
                        value={name}
                        onChange={e => setName(e.target.value)}
                        placeholder="Digite seu nome"
                        className="bg-gray-700 border border-gray-600 text-white rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-400" /* Dark input style */
                        required
                        disabled={isLoading}
                    />
                    <input
                        type="email"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        placeholder="Digite seu email"
                        className="bg-gray-700 border border-gray-600 text-white rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-400" /* Dark input style */
                        required
                        disabled={isLoading}
                    />
                    <input
                        type="password"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        placeholder="Digite sua senha (mín. 6 caracteres)"
                        className="bg-gray-700 border border-gray-600 text-white rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-400" /* Dark input style */
                        required
                        disabled={isLoading}
                    />
                    {error && <span className="text-red-400 text-sm">{error}</span>} {/* Adjusted error color */}
                    {successMessage && <span className="text-green-400 text-sm">{successMessage}</span>} {/* Adjusted success color */}
                    <button
                        type="submit"
                        className={`bg-blue-600 text-white rounded-md px-4 py-2 font-medium hover:bg-blue-700 transition duration-200 ${isLoading ? 'opacity-50 cursor-not-allowed' : ''}`} /* Styled button */
                        disabled={isLoading}
                    >
                        {isLoading ? "Registrando..." : "Registrar"}
                    </button>
                    <p className="text-sm mt-2 text-gray-400"> {/* Adjusted text color */}
                        Já tem uma conta?{' '}
                        <Link href="/TelaLogin" className="text-blue-400 hover:underline"> {/* Use Link component, adjusted link color */}
                            Faça login
                        </Link>
                    </p>
                </form>
            </div>
        </div>
    );
}

