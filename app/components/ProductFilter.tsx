import { useState } from 'react';
import { Filter, X } from 'lucide-react';
import { getBrands, getTypes } from '../data/product-database';

interface ProductFilterProps {
  category: string;
  onFilterChange: (filters: ProductFilters) => void;
}

export interface ProductFilters {
  brand?: string;
  type?: string;
  priceMin?: number;
  priceMax?: number;
}

export function ProductFilter({ category, onFilterChange }: ProductFilterProps) {
  const [showFilters, setShowFilters] = useState(false);
  const [filters, setFilters] = useState<ProductFilters>({});

  const brands = getBrands(category);
  const types = getTypes(category);

  const handleFilterChange = (key: keyof ProductFilters, value: any) => {
    const newFilters = { ...filters, [key]: value || undefined };
    setFilters(newFilters);
    onFilterChange(newFilters);
  };

  const clearFilters = () => {
    setFilters({});
    onFilterChange({});
  };

  const activeFilterCount = Object.values(filters).filter(Boolean).length;

  return (
    <div className="relative">
      {/* Filter Toggle Button */}
      <button
        type="button"
        onClick={() => setShowFilters(!showFilters)}
        className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
      >
        <Filter className="w-4 h-4" />
        <span className="text-sm font-medium">Filtre</span>
        {activeFilterCount > 0 && (
          <span className="bg-[#E07B3E] text-white text-xs font-bold px-2 py-0.5 rounded-full">
            {activeFilterCount}
          </span>
        )}
      </button>

      {/* Filter Dropdown */}
      {showFilters && (
        <div className="absolute z-50 top-full mt-2 w-80 bg-white border border-gray-200 rounded-lg shadow-lg p-4">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-semibold text-[#17384E]">Filtrer produkter</h3>
            <button
              type="button"
              onClick={() => setShowFilters(false)}
              className="text-gray-400 hover:text-gray-600"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="space-y-4">
            {/* Brand Filter */}
            {brands.length > 0 && (
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Merke
                </label>
                <select
                  value={filters.brand || ''}
                  onChange={(e) => handleFilterChange('brand', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#17384E]"
                >
                  <option value="">Alle merker</option>
                  {brands.map((brand) => (
                    <option key={brand} value={brand}>
                      {brand}
                    </option>
                  ))}
                </select>
              </div>
            )}

            {/* Type Filter */}
            {types.length > 0 && (
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Type
                </label>
                <select
                  value={filters.type || ''}
                  onChange={(e) => handleFilterChange('type', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#17384E]"
                >
                  <option value="">Alle typer</option>
                  {types.map((type) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
              </div>
            )}

            {/* Price Range Filter */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Prisklasse
              </label>
              <div className="grid grid-cols-2 gap-2">
                <div>
                  <input
                    type="number"
                    placeholder="Min pris"
                    value={filters.priceMin || ''}
                    onChange={(e) => handleFilterChange('priceMin', e.target.value ? parseInt(e.target.value) : undefined)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#17384E]"
                  />
                </div>
                <div>
                  <input
                    type="number"
                    placeholder="Max pris"
                    value={filters.priceMax || ''}
                    onChange={(e) => handleFilterChange('priceMax', e.target.value ? parseInt(e.target.value) : undefined)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#17384E]"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Clear Filters Button */}
          {activeFilterCount > 0 && (
            <button
              type="button"
              onClick={clearFilters}
              className="w-full mt-4 px-4 py-2 text-sm text-[#E07B3E] border border-[#E07B3E] rounded-lg hover:bg-[#E07B3E] hover:text-white transition-colors"
            >
              Nullstill filtre
            </button>
          )}
        </div>
      )}
    </div>
  );
}
