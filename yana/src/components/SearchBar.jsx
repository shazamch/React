import React, { useState } from "react";

function SearchBar() {
  const [Search, setSearch] = useState("");
  return (
    <div className="relative w-full">
      <input
        type="text"
        placeholder="Search..."
        className="w-full p-2 pl-10 border rounded-lg focus:outline-none"
        value={Search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button
        className="absolute right-2 top-1/2 transform -translate-y-1/2 p-2 text-gray-600 bg-white hover:bg-blue-100 focus:outline-none"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 21l-4.35-4.35m1.44-4.72a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      </button>
    </div>
  );
}

export default SearchBar;
