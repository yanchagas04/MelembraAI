'use client';
import React from 'react';
import { Search} from 'lucide-react';

interface SearchBarProps {
  changeFiltro: (value: string) => void;
  placeholder?: string;
}

export const SearchBar: React.FC<SearchBarProps> = ({
  changeFiltro,
  placeholder = "Buscar tarefas...",
}) => {

  return (
    <div className="relative w-full max-w-2xl">
      <div className="relative">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <Search className="h-5 w-5 text-gray-400" />
        </div>
        <input
          id='search-input'
          type="text"
          placeholder={placeholder}
          onChange={() => {
            const filtro = document.getElementById('search-input') as HTMLInputElement
            changeFiltro(filtro.value)
          }}
          className="block w-full pl-10 pr-10 py-3 border border-gray-300 rounded-lg 
                     focus:ring-2 focus:ring-blue-500 focus:border-blue-500 
                     text-sm placeholder-gray-500 bg-white shadow-sm text-black" 
        />
      </div>
    </div>
  );
};
