import { useState, useRef, useEffect } from 'react';
import { Search, Tag, TrendingUp } from 'lucide-react';

interface Suggestion {
  name: string;
  brand?: string;
  priceRange?: string;
  imageUrl?: string;
  capacity?: string;
  type?: string;
  popular?: boolean;
}

interface AutocompleteInputProps {
  value: string;
  onChange: (value: string) => void;
  suggestions: Suggestion[];
  popularProducts?: Suggestion[]; // NEW: Popular products to show when empty
  placeholder?: string;
  label?: string;
  hint?: string;
}

export function AutocompleteInput({
  value,
  onChange,
  suggestions,
  popularProducts,
  placeholder,
  label,
  hint
}: AutocompleteInputProps) {
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const wrapperRef = useRef<HTMLDivElement>(null);

  // Close suggestions when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target as Node)) {
        setShowSuggestions(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
    setShowSuggestions(true);
    setSelectedIndex(-1);
  };

  const handleSuggestionClick = (suggestion: Suggestion) => {
    onChange(suggestion.name);
    setShowSuggestions(false);
    setSelectedIndex(-1);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (!showSuggestions || suggestions.length === 0) return;

    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setSelectedIndex(prev => (prev < suggestions.length - 1 ? prev + 1 : prev));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setSelectedIndex(prev => (prev > 0 ? prev - 1 : -1));
    } else if (e.key === 'Enter') {
      e.preventDefault();
      if (selectedIndex >= 0) {
        handleSuggestionClick(suggestions[selectedIndex]);
      }
    } else if (e.key === 'Escape') {
      setShowSuggestions(false);
      setSelectedIndex(-1);
    }
  };

  return (
    <div ref={wrapperRef} className="relative">
      {label && (
        <label className="block text-[13px] text-[#6B7280] mb-2">
          {label}
        </label>
      )}
      
      <div className="relative">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
        <input
          type="text"
          value={value}
          onChange={handleInputChange}
          onFocus={() => setShowSuggestions(true)}
          onKeyDown={handleKeyDown}
          placeholder={placeholder}
          className="w-full h-12 pl-12 pr-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#17384E] transition-all"
        />
      </div>

      {hint && (
        <p className="text-[13px] text-[#6B7280] mt-2">
          {hint}
        </p>
      )}

      {/* Suggestions dropdown */}
      {showSuggestions && suggestions.length > 0 && (
        <div className="absolute z-50 w-full mt-2 bg-white border border-gray-200 rounded-lg shadow-lg max-h-80 overflow-y-auto">
          {suggestions.map((suggestion, index) => (
            <button
              key={index}
              type="button"
              onClick={() => handleSuggestionClick(suggestion)}
              className={`w-full text-left px-3 py-3 hover:bg-blue-50 transition-colors border-b border-gray-100 last:border-b-0 ${
                index === selectedIndex ? 'bg-blue-50' : ''
              }`}
            >
              <div className="flex items-center gap-3">
                {/* Product Image */}
                {suggestion.imageUrl && (
                  <div className="w-16 h-16 flex-shrink-0 rounded-lg overflow-hidden bg-gray-100">
                    <img
                      src={suggestion.imageUrl}
                      alt={suggestion.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}
                
                {/* Product Info */}
                <div className="flex-1 min-w-0">
                  <p className="font-medium text-[#111827] text-sm mb-1 truncate">
                    {suggestion.name}
                  </p>
                  
                  <div className="flex items-center gap-2 flex-wrap">
                    {suggestion.brand && (
                      <span className="text-xs text-gray-600 bg-gray-100 px-2 py-0.5 rounded">
                        {suggestion.brand}
                      </span>
                    )}
                    {suggestion.capacity && (
                      <span className="text-xs text-blue-700 bg-blue-50 px-2 py-0.5 rounded">
                        {suggestion.capacity}
                      </span>
                    )}
                    {suggestion.type && (
                      <span className="text-xs text-purple-700 bg-purple-50 px-2 py-0.5 rounded">
                        {suggestion.type}
                      </span>
                    )}
                  </div>
                </div>
                
                {/* Price Range */}
                {suggestion.priceRange && (
                  <div className="flex-shrink-0 text-right">
                    <span className="text-xs font-semibold text-green-700 bg-green-50 px-2 py-1 rounded whitespace-nowrap block">
                      {suggestion.priceRange}
                    </span>
                  </div>
                )}
              </div>
            </button>
          ))}
        </div>
      )}

      {/* No results message */}
      {showSuggestions && value.length >= 2 && suggestions.length === 0 && (
        <div className="absolute z-50 w-full mt-2 bg-white border border-gray-200 rounded-lg shadow-lg p-4">
          <p className="text-sm text-gray-500 text-center">
            Ingen produkter funnet. Skriv inn produktnavn selv.
          </p>
        </div>
      )}

      {/* Popular products */}
      {showSuggestions && value.length < 2 && popularProducts && popularProducts.length > 0 && (
        <div className="absolute z-50 w-full mt-2 bg-white border border-gray-200 rounded-lg shadow-lg max-h-80 overflow-y-auto">
          {popularProducts.map((suggestion, index) => (
            <button
              key={index}
              type="button"
              onClick={() => handleSuggestionClick(suggestion)}
              className={`w-full text-left px-3 py-3 hover:bg-blue-50 transition-colors border-b border-gray-100 last:border-b-0 ${
                index === selectedIndex ? 'bg-blue-50' : ''
              }`}
            >
              <div className="flex items-center gap-3">
                {/* Product Image */}
                {suggestion.imageUrl && (
                  <div className="w-16 h-16 flex-shrink-0 rounded-lg overflow-hidden bg-gray-100">
                    <img
                      src={suggestion.imageUrl}
                      alt={suggestion.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}
                
                {/* Product Info */}
                <div className="flex-1 min-w-0">
                  <p className="font-medium text-[#111827] text-sm mb-1 truncate">
                    {suggestion.name}
                  </p>
                  
                  <div className="flex items-center gap-2 flex-wrap">
                    {suggestion.brand && (
                      <span className="text-xs text-gray-600 bg-gray-100 px-2 py-0.5 rounded">
                        {suggestion.brand}
                      </span>
                    )}
                    {suggestion.capacity && (
                      <span className="text-xs text-blue-700 bg-blue-50 px-2 py-0.5 rounded">
                        {suggestion.capacity}
                      </span>
                    )}
                    {suggestion.type && (
                      <span className="text-xs text-purple-700 bg-purple-50 px-2 py-0.5 rounded">
                        {suggestion.type}
                      </span>
                    )}
                  </div>
                </div>
                
                {/* Price Range */}
                {suggestion.priceRange && (
                  <div className="flex-shrink-0 text-right">
                    <span className="text-xs font-semibold text-green-700 bg-green-50 px-2 py-1 rounded whitespace-nowrap block">
                      {suggestion.priceRange}
                    </span>
                  </div>
                )}
              </div>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}