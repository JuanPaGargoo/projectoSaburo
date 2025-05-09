import React, { useEffect, useState } from "react";
import axios from "axios";
import { API_ENDPOINTS } from "../../constants/api";
import ClothingCard from "./ClothingCard"; // Import the ClothingCard component

function SearchModal({ isOpen, onClose, searchQuery }) {
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    if (isOpen && searchQuery) {
      const fetchSearchResults = async () => {
        try {
          const response = await axios.get(`${API_ENDPOINTS.PRODUCTS}`, {
            params: { name_like: searchQuery }, // Use partial matching
          });

          // Filter results to include partial matches
          const filteredResults = response.data.filter((product) =>
            product.name.toLowerCase().includes(searchQuery.toLowerCase())
          );

          setSearchResults(filteredResults);
        } catch (error) {
          console.error("Error fetching search results:", error);
          setSearchResults([]);
        }
      };

      fetchSearchResults();
    } else {
      setSearchResults([]);
    }
  }, [isOpen, searchQuery]);

  if (!isOpen) return null; // Do not render the modal if it's not open

  return (
    <div
      className="fixed inset-0 flex items-start justify-center z-40"
      style={{ paddingTop: "4rem" }}
    >
      {/* Semi-transparent background starting below the navbar */}
      <div
        className="absolute inset-x-0 bottom-0 bg-black bg-opacity-50"
        style={{ top: "4rem" }} // Start the overlay below the navbar
        onClick={onClose}
      />
      <div className="bg-gray-100 w-full max-w-none p-6 rounded-b-lg shadow-lg z-50 overflow-y-auto max-h-[80vh]">
        {/* Added `overflow-y-auto` and `max-h-[80vh]` for scrollable content */}
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold pl-7">
            Search{" "}
            {searchQuery && (
              <span className="text-gray-400">- {searchQuery}</span>
            )}
          </h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-800 transition"
          >
            ✕
          </button>
        </div>
        <div className="mt-4 flex flex-wrap gap-4 pl-7">

          {searchResults.length > 0 ? (
            searchResults.map((product) => (
              <ClothingCard
                key={product.id}
                id={product.id}
                name={product.name}
                price={product.price}
                image={`${API_ENDPOINTS.IMAGES}/${product.frontImage}`}
              />
            ))
          ) : (
            <p className="text-gray-500 col-span-full">No results found.</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default SearchModal;
