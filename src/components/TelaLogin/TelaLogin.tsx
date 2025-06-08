"use client";
import { useState } from "react";
import login from "../TelaLogin/Login"; // Assuming login API integration is needed later
import Link from 'next/link'; // Import Link for navigation

export default function TelaLogin() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError("");
        setIsLoading(true);

        // Placeholder for actual API call - replace with actual login logic
        // Simulating API call delay
        await new Promise(resolve => setTimeout(resolve, 1000)); 

        const res = await login(email, password);
        console.log(res);
        if (res.token !== undefined) {
            const token = res.token;
            localStorage.setItem("token", token);
            localStorage.setItem("email", email);
            localStorage.setItem("senha", password);
            localStorage.setItem("nome", res.user.name);
            window.location.href = "/AreaLogada";
            setIsLoading(false);
        } else {
            setError(res.message || "Falha ao fazer login. Tente novamente.");
        }

        
        setIsLoading(false);

        /* // Example of actual API call integration (uncomment and adapt)
        try { 
            const result = await login(email, password);
            // Handle successful login (e.g., store token, redirect)
            console.log("Login successful:", result);
            // Example: window.location.href = '/dashboard'; // Redirect
        } catch (err: any) {
            setError(err.message || "Falha ao fazer login. Tente novamente.");
        } finally {
            setIsLoading(false);
        }
        */
    };

    return (
        <div className="flex items-center justify-center w-screen h-screen bg-gray-900">
            <div className="flex flex-col w-full max-w-sm text-center gap-4 p-8 bg-gray-800 rounded-lg shadow-lg">
                <h1 className="text-2xl mb-4 text-white font-semibold">Login - MeLembreAI</h1>
                <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
                    <input
                        type="email"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        placeholder="Digite seu email"
                        className="bg-gray-700 border border-gray-600 text-white rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-400"
                        required
                        disabled={isLoading}
                    />
                    <input
                        type="password"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        placeholder="Digite sua senha"
                        className="bg-gray-700 border border-gray-600 text-white rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-400"
                        required
                        disabled={isLoading}
                    />
                    {error && <span className="text-red-400 text-sm">{error}</span>}
                    <button
                        type="submit"
                        className={`bg-blue-600 text-white rounded-md px-4 py-2 font-medium hover:bg-blue-700 transition duration-200 ${isLoading ? 'opacity-50 cursor-not-allowed' : ''}`}
                        disabled={isLoading}
                        onClick={handleSubmit}
                    >
                        {isLoading ? "Entrando..." : "Entrar"}
                    </button>
                    <p className="text-sm mt-2 text-gray-400">
                        Não tem uma conta?{' '}
                        <Link href="/TelaRegistro" className="text-blue-400 hover:underline">
                            Registre-se
                        </Link>
                    </p>
                </form>
            </div>
        </div>
    );
}

