import { useState } from "react";
import { SearchBar } from "../Style";

// eslint-disable-next-line react/prop-types
function SearchPokemon({ onSearch }) {  
    const [searchQuery, setSearchQuery] = useState('');

    const handleSearch = (e) => {
        const query = e.target.value;
        setSearchQuery(query);
        onSearch(query);
      };
      return (
        <div>
          <SearchBar 
            type="text" 
            placeholder="Buscar Pokémon..." 
            value={searchQuery} 
            onChange={handleSearch} 
          />
        </div>
      );

}

export default SearchPokemon