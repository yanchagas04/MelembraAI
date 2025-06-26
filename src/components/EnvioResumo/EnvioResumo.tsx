"use client";
import { useState, useEffect } from "react";
import { envioResumoFunction } from "./envioResumoFunction";

export default function EnvioResumo() {
  const [tipoFiltro, setTipoFiltro] = useState<"hoje" | "intervalo">("hoje");
  const [dataInicio, setDataInicio] = useState("");
  const [dataFim, setDataFim] = useState("");
  const [enviando, setEnviando] = useState(false);
  const [mensagem, setMensagem] = useState("");

  const formatarDataHoje = () => {
    const hoje = new Date();
    return hoje.toLocaleDateString("pt-BR");
  };

  const handleEnviarResumo = async () => {
    if (tipoFiltro === "intervalo" && (!dataInicio || !dataFim)) {
      setMensagem("Por favor, selecione as datas de início e fim.");
      return;
    }

    if (tipoFiltro === "intervalo" && new Date(dataInicio) > new Date(dataFim)) {
      setMensagem("A data de início deve ser anterior à data de fim.");
      return;
    }

    setEnviando(true);
    setMensagem("");

    const resultado = await envioResumoFunction({
      tipoFiltro,
      dataInicio,
      dataFim,
    });

    setMensagem(resultado.message);
    setEnviando(false);

    if (resultado.success) {
      setDataInicio("");
      setDataFim("");
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto bg-white/10 backdrop-blur-sm rounded-lg p-6 shadow-lg">
      <h1 className="text-2xl font-bold text-white mb-6 text-center">
        Enviar Resumo por Email
      </h1>

      {/* Filtro de período */}
      <div className="mb-6">
        <label className="block text-white text-sm font-medium mb-3">
          Período do Resumo
        </label>
        <div className="flex gap-4">
          <button
            onClick={() => setTipoFiltro("hoje")}
            className={`px-4 py-2 rounded-lg font-medium transition-colors ${
              tipoFiltro === "hoje"
                ? "bg-blue-600 text-white"
                : "bg-gray-600 text-gray-300 hover:bg-gray-500"
            }`}
          >
            Hoje ({formatarDataHoje()})
          </button>
          <button
            onClick={() => setTipoFiltro("intervalo")}
            className={`px-4 py-2 rounded-lg font-medium transition-colors ${
              tipoFiltro === "intervalo"
                ? "bg-blue-600 text-white"
                : "bg-gray-600 text-gray-300 hover:bg-gray-500"
            }`}
          >
            Intervalo Personalizado
          </button>
        </div>
      </div>

      {/* Datas se filtro for "intervalo" */}
      {tipoFiltro === "intervalo" && (
        <div className="mb-6 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-white text-sm font-medium mb-2">
              Data de Início
            </label>
            <input
              type="date"
              value={dataInicio}
              onChange={(e) => setDataInicio(e.target.value)}
              className="w-full px-3 py-2 bg-gray-700 text-white rounded-lg border border-gray-600 focus:border-blue-500 focus:outline-none"
            />
          </div>
          <div>
            <label className="block text-white text-sm font-medium mb-2">
              Data de Fim
            </label>
            <input
              type="date"
              value={dataFim}
              onChange={(e) => setDataFim(e.target.value)}
              className="w-full px-3 py-2 bg-gray-700 text-white rounded-lg border border-gray-600 focus:border-blue-500 focus:outline-none"
            />
          </div>
        </div>
      )}

      {/* Exibir email */}
      {localStorage.getItem("email") && (
        <div className="mb-6">
          <label className="block text-white text-sm font-medium mb-2">
            Email de Destino
          </label>
          <div className="w-full px-3 py-2 bg-gray-700/50 text-white rounded-lg border border-gray-600">
            {localStorage.getItem("email")}
          </div>
          <p className="text-gray-400 text-xs mt-1">
            O resumo será enviado para o email da sua conta
          </p>
        </div>
      )}

      {/* Botão */}
      <button
        onClick={handleEnviarResumo}
        disabled={enviando}
        className={`w-full py-3 rounded-lg font-medium transition-colors ${
          enviando
            ? "bg-gray-600 text-gray-400 cursor-not-allowed"
            : "bg-blue-600 text-white hover:bg-blue-700"
        }`}
      >
        {enviando ? "Enviando..." : "Enviar Resumo"}
      </button>

      {/* Mensagem de retorno */}
      {mensagem && (
        <div
          className={`mt-4 p-3 rounded-lg text-center ${
            mensagem.includes("sucesso")
              ? "bg-green-600/20 text-green-300 border border-green-600"
              : "bg-red-600/20 text-red-300 border border-red-600"
          }`}
        >
          {mensagem}
        </div>
      )}

      {/* Info extra */}
      <div className="mt-6 p-4 bg-blue-600/20 rounded-lg border border-blue-600">
        <h3 className="text-blue-300 font-medium mb-2">Sobre o Resumo</h3>
        <p className="text-blue-200 text-sm">
          O resumo incluirá todas as tarefas e atividades do período selecionado,
          organizadas de forma clara e concisa para facilitar a revisão.
        </p>
      </div>
    </div>
  );
}
