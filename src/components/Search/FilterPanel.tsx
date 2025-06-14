'use client';

import React from 'react';
import { Filter, Calendar, Tag, AlertCircle } from 'lucide-react';

interface FilterOptions {
  status: string[];
  priority: string[];
  dateFrom: string;
  dateTo: string;
  tags: string[];
}

interface FilterPanelProps {
  filters: FilterOptions;
  onChange: (filters: FilterOptions) => void;
  onApply: () => void;
  onClear: () => void;
  availableTags?: string[];
}

export const FilterPanel: React.FC<FilterPanelProps> = ({
  filters,
  onChange,
  onApply,
  onClear,
  availableTags = []
}) => {
  const statusOptions = [
    { value: 'pending', label: 'Pendente', color: 'bg-yellow-100 text-yellow-800' },
    { value: 'in_progress', label: 'Em Andamento', color: 'bg-blue-100 text-blue-800' },
    { value: 'completed', label: 'Concluída', color: 'bg-green-100 text-green-800' },
    { value: 'cancelled', label: 'Cancelada', color: 'bg-red-100 text-red-800' }
  ];

  const priorityOptions = [
    { value: 'high', label: 'Alta', color: 'bg-red-100 text-red-800' },
    { value: 'medium', label: 'Média', color: 'bg-yellow-100 text-yellow-800' },
    { value: 'low', label: 'Baixa', color: 'bg-green-100 text-green-800' }
  ];

  const handleStatusChange = (status: string) => {
    const newStatus = filters.status.includes(status)
      ? filters.status.filter(s => s !== status)
      : [...filters.status, status];
    
    onChange({ ...filters, status: newStatus });
  };

  const handlePriorityChange = (priority: string) => {
    const newPriority = filters.priority.includes(priority)
      ? filters.priority.filter(p => p !== priority)
      : [...filters.priority, priority];
    
    onChange({ ...filters, priority: newPriority });
  };

  const handleTagChange = (tag: string) => {
    const newTags = filters.tags.includes(tag)
      ? filters.tags.filter(t => t !== tag)
      : [...filters.tags, tag];
    
    onChange({ ...filters, tags: newTags });
  };

  const handleDateChange = (field: 'dateFrom' | 'dateTo', value: string) => {
    onChange({ ...filters, [field]: value });
  };

  const hasActiveFilters = 
    filters.status.length > 0 || 
    filters.priority.length > 0 || 
    filters.tags.length > 0 || 
    filters.dateFrom || 
    filters.dateTo;

  return (
    <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-2">
          <Filter className="h-5 w-5 text-gray-600" />
          <h3 className="text-lg font-medium text-gray-900">Filtros</h3>
        </div>
        {hasActiveFilters && (
          <button
            onClick={onClear}
            className="text-sm text-gray-500 hover:text-gray-700"
          >
            Limpar filtros
          </button>
        )}
      </div>

      <div className="space-y-6">
        {/* Filtro por Status */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Status
          </label>
          <div className="space-y-2">
            {statusOptions.map(option => (
              <label key={option.value} className="flex items-center">
                <input
                  type="checkbox"
                  checked={filters.status.includes(option.value)}
                  onChange={() => handleStatusChange(option.value)}
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                />
                <span className={`ml-2 px-2 py-1 rounded-full text-xs font-medium ${option.color}`}>
                  {option.label}
                </span>
              </label>
            ))}
          </div>
        </div>

        {/* Filtro por Prioridade */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            <AlertCircle className="inline h-4 w-4 mr-1" />
            Prioridade
          </label>
          <div className="space-y-2">
            {priorityOptions.map(option => (
              <label key={option.value} className="flex items-center">
                <input
                  type="checkbox"
                  checked={filters.priority.includes(option.value)}
                  onChange={() => handlePriorityChange(option.value)}
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                />
                <span className={`ml-2 px-2 py-1 rounded-full text-xs font-medium ${option.color}`}>
                  {option.label}
                </span>
              </label>
            ))}
          </div>
        </div>

        {/* Filtro por Data */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            <Calendar className="inline h-4 w-4 mr-1" />
            Data de Vencimento
          </label>
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-xs text-gray-500 mb-1">De</label>
              <input
                type="date"
                value={filters.dateFrom}
                onChange={(e) => handleDateChange('dateFrom', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md 
                           focus:ring-blue-500 focus:border-blue-500 text-sm"
              />
            </div>
            <div>
              <label className="block text-xs text-gray-500 mb-1">Até</label>
              <input
                type="date"
                value={filters.dateTo}
                onChange={(e) => handleDateChange('dateTo', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md 
                           focus:ring-blue-500 focus:border-blue-500 text-sm"
              />
            </div>
          </div>
        </div>

        {/* Filtro por Tags */}
        {availableTags.length > 0 && (
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              <Tag className="inline h-4 w-4 mr-1" />
              Tags
            </label>
            <div className="flex flex-wrap gap-2">
              {availableTags.map(tag => (
                <button
                  key={tag}
                  onClick={() => handleTagChange(tag)}
                  className={`px-3 py-1 rounded-full text-xs font-medium border transition-colors
                             ${filters.tags.includes(tag)
                               ? 'bg-blue-100 text-blue-800 border-blue-300'
                               : 'bg-gray-100 text-gray-700 border-gray-300 hover:bg-gray-200'
                             }`}
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>

      <div className="mt-6 flex space-x-3">
        <button
          onClick={onApply}
          className="flex-1 bg-blue-600 text-white px-4 py-2 rounded-md 
                     hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 
                     focus:ring-offset-2 text-sm font-medium"
        >
          Aplicar Filtros
        </button>
      </div>
    </div>
  );
};