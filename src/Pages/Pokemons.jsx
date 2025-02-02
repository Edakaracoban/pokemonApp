import axios from "axios";
import { useEffect, useState } from "react";
import Pokemon from "../components/Pokemon";

function Pokemons() {
  const [pokemons, setPokemons] = useState([]);
  const [search, setSearch] = useState("");
  const [uniqueTypes, setUniqueTypes] = useState([]);
  const [selectedType, setSelectedType] = useState("");

  useEffect(() => {
    axios
      .get(
        "https://my-json-server.typicode.com/tahsincanpolat/pokedex/pokemons"
      )
      .then((response) => {
        if (response.status === 200) {
          console.log(response.data);
          setPokemons(response.data);
          const allTypes = response.data.flatMap((pokemon) => pokemon.type);
          const uniqueTypesArray = allTypes.filter(
            (type, index) => allTypes.indexOf(type) === index
          );
          setUniqueTypes(uniqueTypesArray);
          console.log(allTypes);
        }
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  return (
    <div className="container">
      <div className="header">
        <input
          type="text"
          value={search}
          placeholder="Pokemon adıyla ara.."
          onChange={(e) => setSearch(e.target.value)}
        />
        <select
          onChange={(e) => setSelectedType(e.target.value)}
          className="css-b62m3t-container"
          value={selectedType}
        >
          <option value="" disabled>
            Pokemon Tipine Göre Filtrele
          </option>
          <option value="">Tüm tipler</option>
          {uniqueTypes.map((type, index) => (
            <option key={index} value={type}>
              {type}
            </option>
          ))}
        </select>
      </div>
      <div className="row">
        {pokemons
          .filter((pokemon) => {
            return search.toLowerCase() === ""
              ? pokemon
              : pokemon.name.toLowerCase().includes(search.toLowerCase()) &&
                  (!selectedType || pokemon.type.includes(selectedType));
          })
          .map((pokemon) => (
            <div key={pokemon.id} className="pokes col-md-4 my-3">
              <Pokemon pokes={pokemon} />
            </div>
          ))}
      </div>
    </div>
  );
}
export default Pokemons;
