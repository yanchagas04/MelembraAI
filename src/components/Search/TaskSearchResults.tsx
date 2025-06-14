'use client';

import React from 'react';
import { Calendar, AlertCircle, Tag, User } from 'lucide-react';

interface Task {
  id: string;
  title: string;
  description?: string;
  status: string;
  priority: string;
  dueDate?: string;
  createdAt: string;
  tags: { name: string }[];
  user: {
    id: string;
    name: string;
    email: string;
  };
}

interface TaskSearchResultsProps {
  tasks: Task[];
  isLoading: boolean;
  searchQuery: string;
  onTaskClick: (task: Task) => void;
}

export const TaskSearchResults: React.FC<TaskSearchResultsProps> = ({
  tasks,
  isLoading,
  searchQuery,
  onTaskClick
}) => {
  const getStatusColor = (status: string) => {
    const colors = {
      pending: 'bg-yellow-100 text-yellow-800',
      in_progress: 'bg-blue-100 text-blue-800',
      completed: 'bg-green-100 text-green-800',
      cancelled: 'bg-red-100 text-red-800'
    };
    return colors[status as keyof typeof colors] || 'bg-gray-100 text-gray-800';
  };

  const getPriorityColor = (priority: string) => {
    const colors = {
      high: 'bg-red-100 text-red-800',
      medium: 'bg-yellow-100 text-yellow-800',
      low: 'bg-green-100 text-green-800'
    };
    return colors[priority as keyof typeof colors] || 'bg-gray-100 text-gray-800';
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('pt-BR');
  };

  const highlightSearchTerm = (text: string, searchTerm: string) => {
    if (!searchTerm) return text;
    
    const regex = new RegExp(`(${searchTerm})`, 'gi');
    const parts = text.split(regex);
    
    return parts.map((part, index) => 
      regex.test(part) ? (
        <mark key={index} className="bg-yellow-200 px-1 rounded">
          {part}
        </mark>
      ) : part
    );
  };

  if (isLoading) {
    return (
      <div className="space-y-4">
        {[...Array(3)].map((_, index) => (
          <div key={index} className="bg-white border border-gray-200 rounded-lg p-6 animate-pulse">
            <div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
            <div className="h-3 bg-gray-200 rounded w-1/2 mb-4"></div>
            <div className="flex space-x-2">
              <div className="h-6 bg-gray-200 rounded w-16"></div>
              <div className="h-6 bg-gray-200 rounded w-16"></div>
            </div>
          </div>
        ))}
      </div>
    );
  }

  if (tasks.length === 0) {
    return (
      <div className="text-center py-12">
        <div className="mx-auto h-12 w-12 text-gray-400">
          <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                  d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
        </div>
        <h3 className="mt-2 text-sm font-medium text-gray-900">Nenhuma tarefa encontrada</h3>
        <p className="mt-1 text-sm text-gray-500">
          {searchQuery 
            ? `Não encontramos tarefas que correspondam à sua busca "${searchQuery}".`
            : 'Não há tarefas que correspondam aos filtros selecionados.'
          }
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {tasks.map((task) => (
        <div
          key={task.id}
          onClick={() => onTaskClick(task)}
          className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md 
                     transition-shadow cursor-pointer"
        >
          <div className="flex justify-between items-start">
            <h3 className="text-lg font-medium text-gray-900 mb-1">
              {highlightSearchTerm(task.title, searchQuery)}
            </h3>
            <div className="flex space-x-2">
              <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(task.status)}`}>
                {task.status === 'pending' && 'Pendente'}
                {task.status === 'in_progress' && 'Em Andamento'}
                {task.status === 'completed' && 'Concluída'}
                {task.status === 'cancelled' && 'Cancelada'}
              </span>
              <span className={`px-2 py-1 rounded-full text-xs font-medium ${getPriorityColor(task.priority)}`}>
                {task.priority === 'high' && 'Alta'}
                {task.priority === 'medium' && 'Média'}
                {task.priority === 'low' && 'Baixa'}
              </span>
            </div>
          </div>

          {task.description && (
            <p className="text-gray-600 mt-2 line-clamp-2">
              {highlightSearchTerm(task.description, searchQuery)}
            </p>
          )}

          <div className="mt-4 flex flex-wrap items-center gap-3 text-sm text-gray-500">
            {task.dueDate && (
              <div className="flex items-center">
                <Calendar className="h-4 w-4 mr-1" />
                <span>Vence em {formatDate(task.dueDate)}</span>
              </div>
            )}
            
            <div className="flex items-center">
              <User className="h-4 w-4 mr-1" />
              <span>{task.user.name}</span>
            </div>

            {task.tags.length > 0 && (
              <div className="flex items-center flex-wrap gap-1">
                <Tag className="h-4 w-4 mr-1" />
                {task.tags.map(tag => (
                  <span key={tag.name} className="px-2 py-1 bg-gray-100 rounded-full text-xs">
                    {tag.name}
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};