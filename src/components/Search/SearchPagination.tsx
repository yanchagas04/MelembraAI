'use client';

import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface SearchPaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  className?: string;
}

export const SearchPagination: React.FC<SearchPaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
  className = ''
}) => {
  const handlePrevious = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  const handlePageClick = (page: number) => {
    if (page !== currentPage) {
      onPageChange(page);
    }
  };

  if (totalPages <= 1) {
    return null;
  }

  return (
    <div className={`flex items-center justify-between ${className}`}>
      <button
        onClick={handlePrevious}
        disabled={currentPage === 1}
        className={`flex items-center px-4 py-2 border rounded-md ${currentPage === 1 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-50'}`}
      >
        <ChevronLeft className="h-5 w-5 mr-1" />
        <span>Anterior</span>
      </button>

      <div className="flex space-x-1">
        {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
          <button
            key={page}
            onClick={() => handlePageClick(page)}
            className={`w-10 h-10 flex items-center justify-center rounded-md ${currentPage === page ? 'bg-blue-600 text-white' : 'hover:bg-gray-100'}`}
          >
            {page}
          </button>
        ))}
      </div>

      <button
        onClick={handleNext}
        disabled={currentPage === totalPages}
        className={`flex items-center px-4 py-2 border rounded-md ${currentPage === totalPages ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-50'}`}
      >
        <span>Próxima</span>
        <ChevronRight className="h-5 w-5 ml-1" />
      </button>
    </div>
  );
};