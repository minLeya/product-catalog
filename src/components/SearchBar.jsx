import searchIcon from "../assets/images/icon-search.svg";
import { useState} from "react";

function SearchBar({ onSearch }) {
  const [query, setQuery] = useState("");

  const handleChange = (e) => {
    const value = e.target.value;
    setQuery(value);
    onSearch?.(value);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      onSearch?.(query);
    }
  };

  const handleButtonClick = () => {
    onSearch?.(query);
  };

  return (
    <div className="flex items-center justify-center w-full max-w-md mx-auto gap-2 mb-10">
      <div className="relative flex-1">
        <img 
          src={searchIcon} 
          alt="Search icon" 
          className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none"
        />
        <input 
          type="text" 
          placeholder="Найти товар..." 
          value={query}
          onChange={handleChange}
          onKeyPress={handleKeyPress}
          className="w-full pl-12 pr-4 py-3 bg-white border-2 border-gray-700 rounded-xl focus:outline-none focus:border-blue-500 text-gray-800 placeholder-gray-500 shadow-sm"
        />
      </div>

      <button 
        onClick={handleButtonClick}
        className="px-6 py-3 bg-blue-800 hover:bg-blue-700 text-white font-medium rounded-xl transition-colors duration-200"
        aria-label="Поиск"
      >
        Поиск
      </button>
    </div>
  );
}

export default SearchBar;