"use client";

type ConfigModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

export default function ConfigModal({ isOpen, onClose }: ConfigModalProps) {
  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
      onClick={onClose}
    >
      <div 
        className="bg-white dark:bg-gray-800 p-6 rounded-lg w-full max-w-md"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">Configurações</h2>
          <button 
            onClick={onClose} 
            className="text-gray-500 hover:text-gray-700"
          >
            ✕
          </button>
        </div>

        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <span>Tema Escuro (trazer barra lateral)</span>
            <button className="px-3 py-1 bg-blue-500 text-white rounded">
              Alternar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}