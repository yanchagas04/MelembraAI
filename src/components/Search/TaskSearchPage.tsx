'use client';

import React, { useState, useEffect } from 'react';
import { SearchBar } from './SearchBar';
import { FilterPanel } from './FilterPanel';
import { TaskSearchResults } from './TaskSearchResults';
import { SearchPagination } from './SearchPagination';
import { useDebounce } from '@/hooks/useDebounce';
import { Task } from '@/types/task';
import { fetchTasks } from '@/services/taskService';

export const TaskSearchPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [tasks, setTasks] = useState<Task[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [totalPages, setTotalPages] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);
  const [filters, setFilters] = useState({
    status: [] as string[],
    priority: [] as string[],
    dateFrom: '',
    dateTo: '',
    tags: [] as string[],
  });
  const [availableTags, setAvailableTags] = useState<string[]>([]);

  const debouncedSearchQuery = useDebounce(searchQuery, 500);

  useEffect(() => {
    // Carrega tags disponíveis
    const loadTags = async () => {
      try {
        // Substitua por sua chamada API real
        const response = await fetch('/api/tags');
        const data = await response.json();
        setAvailableTags(data.tags);
      } catch (error) {
        console.error('Erro ao carregar tags:', error);
      }
    };

    loadTags();
  }, []);

  useEffect(() => {
    // Carrega sugestões de busca
    const loadSuggestions = async () => {
      if (debouncedSearchQuery.length > 2) {
        try {
          // Substitua por sua chamada API real
          const response = await fetch(`/api/tasks/suggestions?query=${debouncedSearchQuery}`);
          const data = await response.json();
          setSuggestions(data.suggestions);
        } catch (error) {
          console.error('Erro ao carregar sugestões:', error);
        }
      } else {
        setSuggestions([]);
      }
    };

    loadSuggestions();
  }, [debouncedSearchQuery]);

  useEffect(() => {
    // Realiza a busca
    const searchTasks = async () => {
      setIsLoading(true);
      try {
        const params = new URLSearchParams();
        params.append('query', searchQuery);
        params.append('page', currentPage.toString());
        
        if (filters.status.length > 0) {
          filters.status.forEach(status => params.append('status', status));
        }
        
        if (filters.priority.length > 0) {
          filters.priority.forEach(priority => params.append('priority', priority));
        }
        
        if (filters.dateFrom) {
          params.append('dateFrom', filters.dateFrom);
        }
        
        if (filters.dateTo) {
          params.append('dateTo', filters.dateTo);
        }
        
        if (filters.tags.length > 0) {
          filters.tags.forEach(tag => params.append('tags', tag));
        }

        const response = await fetchTasks(params.toString());
        setTasks(response.tasks);
        setTotalPages(response.totalPages);
      } catch (error) {
        console.error('Erro na busca de tarefas:', error);
      } finally {
        setIsLoading(false);
      }
    };

    searchTasks();
  }, [searchQuery, currentPage, filters]);

  const handleSearch = () => {
    setCurrentPage(1); // Reset para a primeira página em nova busca
  };

  const handleFiltersChange = (newFilters: typeof filters) => {
    setFilters(newFilters);
    setCurrentPage(1); // Reset para a primeira página ao aplicar filtros
  };

  const handleClearFilters = () => {
    setFilters({
      status: [],
      priority: [],
      dateFrom: '',
      dateTo: '',
      tags: [],
    });
    setCurrentPage(1);
  };

  const handleTaskClick = (task: Task) => {
    // Navega para a página de detalhes da tarefa
    console.log('Task clicked:', task);
    // router.push(`/tasks/${task.id}`);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Buscar Tarefas</h1>
          <p className="mt-2 text-sm text-gray-600">
            Encontre tarefas usando palavras-chave ou filtros avançados
          </p>
        </div>

        <div className="mb-6">
          <SearchBar
            value={searchQuery}
            onChange={setSearchQuery}
            onSearch={handleSearch}
            suggestions={suggestions}
            isLoading={isLoading}
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          <div className="lg:col-span-1">
            <FilterPanel
              filters={filters}
              onChange={handleFiltersChange}
              onApply={handleSearch}
              onClear={handleClearFilters}
              availableTags={availableTags}
            />
          </div>

          <div className="lg:col-span-3">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="mb-6">
                <h2 className="text-lg font-medium text-gray-900">
                  Resultados da Busca
                  {isLoading && <span className="ml-2 text-gray-500">(carregando...)</span>}
                </h2>
              </div>

              <TaskSearchResults
                tasks={tasks}
                isLoading={isLoading}
                searchQuery={searchQuery}
                onTaskClick={handleTaskClick}
              />

              {tasks.length > 0 && (
                <div className="mt-6">
                  <SearchPagination
                    currentPage={currentPage}
                    totalPages={totalPages}
                    onPageChange={setCurrentPage}
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};