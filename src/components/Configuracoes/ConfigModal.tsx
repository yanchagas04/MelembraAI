"use client";

import { useEffect, useState } from "react";

type ConfigModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

export default function ConfigModal({ isOpen, onClose }: ConfigModalProps) {
  // Estados apenas para o Modo Foco
  const [focusMode, setFocusMode] = useState(false);
  const [focusDuration, setFocusDuration] = useState(25);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const modal = document.querySelector(".modal-container");
      if (modal && !modal.contains(event.target as Node)) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      const savedFocus = localStorage.getItem("focusSettings");
      if (savedFocus) {
        const { active, duration } = JSON.parse(savedFocus);
        setFocusMode(active);
        setFocusDuration(duration);
      }
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, onClose]);

  const handleSaveFocusSettings = () => {
    localStorage.setItem(
      "focusSettings",
      JSON.stringify({
        active: focusMode,
        duration: focusDuration
      })
    );
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div 
      className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 modal-container"
      onClick={(e) => e.stopPropagation()}
    >
      <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg p-6 w-64">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold">Configurações</h2>
          <button 
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 dark:hover:text-gray-300"
          >
            ✕
          </button>
        </div>

        {/* Seção do Tema Escuro */}
        <div className="flex items-center justify-between mb-6">
          <span className="text-sm">Tema Escuro</span>
          <button className="px-3 py-1 bg-blue-500 hover:bg-blue-600 text-white text-sm rounded">
            Alternar
          </button>
        </div>

        {/* Seção do Modo Foco */}
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-sm">Modo Foco</span>
            <button
              onClick={() => setFocusMode(!focusMode)}
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                focusMode ? "bg-blue-500" : "bg-gray-300 dark:bg-gray-600"
              }`}
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition ${
                  focusMode ? "translate-x-6" : "translate-x-1"
                }`}
              />
            </button>
          </div>

          {focusMode && (
            <div className="flex items-center gap-2">
              <input
                type="range"
                min="15"
                max="90"
                step="5"
                value={focusDuration}
                onChange={(e) => setFocusDuration(Number(e.target.value))}
                className="w-full"
              />
              <span className="text-xs text-gray-600 dark:text-gray-400">
                {focusDuration} min
              </span>
            </div>
          )}
        </div>

        <button
          onClick={handleSaveFocusSettings}
          className="w-full mt-4 px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded transition"
        >
          Aplicar
        </button>
      </div>
    </div>
  );
}