"use client";

import { useContext, useState } from "react";
import icone_lampada from "../../../public/Tarefas/suggestion.svg";
import { Tarefa, TarefasContext } from "@/app/page";

export default function AdicionarTarefa() {
  const [isOpen, setIsOpen] = useState(false);
  const [titulo, setTitulo] = useState("");
  const [tarefa, setTarefa] = useState("");
  const [data, setData] = useState("");
  const [horaFim, setHoraFim] = useState("");
  const [carregando, setCarregando] = useState(false);
  const tarefasC = useContext(TarefasContext);

  const obterSugestao = async () => {
    setCarregando(true);
    try {
      const response = await fetch("https://apis.scrimba.com/bored/api/activity");
      const data = await response.json();
      setTitulo(data.activity);
    } catch (error) {
      setTarefa("Não foi possível obter uma sugestão");
    } finally {
      setCarregando(false);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Lógica para salvar a tarefa com todos os campos
    const novaTarefa : Tarefa = {
      id: (tarefasC.tarefas.length + 1).toString(),
      titulo: titulo,
      descricao: tarefa,
      data: `${data.split("-")[0]}-${parseInt(data.split("-")[1])}-${parseInt(data.split("-")[2])}`,
      horaFim: horaFim.split(":")[0] + ":" + horaFim.split(":")[1],
      concluida: false
    };
    tarefasC.setTarefas(prevTarefas => [...prevTarefas, novaTarefa]);
    // Limpa os campos
    setTitulo("");
    setTarefa("");
    setData("");
    setHoraFim("");
    setIsOpen(false);
  };

  const handleClose = (e: React.FormEvent) => {
    // Limpa os campos
    setTitulo("");
    setTarefa("");
    setData("");
    setHoraFim("");
    setIsOpen(false);
  };

  return (
    <>
      {/* Botão Flutuante */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-28 sm:bottom-20 right-4 md:bottom-6 md:right-6 bg-blue-500 hover:bg-blue-600 hover:scale-105 transition-all ease-in-out duration-150 text-white font-medium py-3 px-4 rounded-full shadow-lg flex items-center"
      >
        <span className="text-xl mr-1">+</span> Adicionar Tarefa
      </button>

      {/* Modal */}
      {isOpen && (
        <>
          {/* Overlay */}
          <div 
            className="fixed inset-0 bg-black opacity-50 z-20"
            onClick={() => setIsOpen(false)}
          ></div>
          
          {/* Modal */}
          <div className="fixed inset-0 flex items-center justify-center p-4 z-30 pointer-events-none">
            <div 
              className="bg-white rounded-lg p-6 w-full max-w-md border border-gray-200 shadow-xl pointer-events-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <h2 className="text-xl font-bold mb-4 text-gray-800">Adicionar Nova Tarefa</h2>

              <form onSubmit={handleSubmit}>
                {/* Campo Título */}
                <div className="mb-4">
                  <label htmlFor="titulo" className="block mb-2 font-medium text-gray-700">
                    Título*
                  </label>
                  <div className="flex items-center gap-2">
                  <input
                    type="text"
                    id="titulo"
                    value={titulo}
                    onChange={(e) => setTitulo(e.target.value)}
                    className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800"
                    placeholder="Título da tarefa"
                    required
                  />
                  <button
                      type="button"
                      onClick={obterSugestao}
                      disabled={carregando}
                      className="bg-yellow-400 hover:bg-yellow-500 text-gray-800 p-2 rounded transition-colors self-start"
                      title="Obter sugestão"
                    >
                      {carregando ? (
                        <span className="inline-block animate-spin">↻</span>
                      ) : (
                        <img
                          src={icone_lampada.src}
                          alt="Sugerir tarefa"
                          className="h-5 w-5"
                        />
                      )}
                    </button>
                    </div>
                </div>

                {/* Campo Data */}
                <div className="mb-4">
                  <label htmlFor="data" className="block mb-2 font-medium text-gray-700">
                    Data*
                  </label>
                  <input
                    type="date"
                    id="data"
                    value={data}
                    onChange={(e) => setData(e.target.value)}
                    className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800"
                    required
                  />
                </div>

                {/* Campos de Horário */}
                <div className="mb-4 flex flex-col justify-start">
                    <label htmlFor="horaFim" className="block mb-2 font-medium text-gray-700">
                      Hora Fim*
                    </label>
                    <input
                      type="time"
                      id="horaFim"
                      value={horaFim}
                      onChange={(e) => setHoraFim(e.target.value)}
                      className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800"
                      required
                    />
                </div>

                {/* Campo Descrição */}
                <div className="mb-4">
                  <label htmlFor="tarefa" className="block mb-2 font-medium text-gray-700">
                    Descrição
                  </label>
                  <div className="flex gap-2">
                    <textarea
                      id="tarefa"
                      value={tarefa}
                      onChange={(e) => setTarefa(e.target.value)}
                      className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800 min-h-[100px]"
                      placeholder="Descrição detalhada da tarefa..."
                    />
                  </div>
                </div>

                <div className="flex justify-end gap-2">
                  <button
                    type="button"
                    onClick={handleClose}
                    className="px-4 py-2 text-gray-700 hover:text-gray-900 hover:bg-gray-100 rounded transition-colors"
                  >
                    Cancelar
                  </button>
                  <button
                    type="submit"
                    className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded transition-colors"
                    onClick={() => {handleSubmit}}>
                    Adicionar
                  </button>
                </div>
              </form>
            </div>
          </div>
        </>
      )}
    </>
  );
}