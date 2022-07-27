import axios from "axios";
import { useEffect, useState } from "react";
import Loader from "./Loader-animation";
import { Link } from "react-router-dom";
export default function Pokemons() {
  const [pokemons, setPokemons] = useState();
  useEffect(() => {
    axios
      .get("https://pokeapi.co/api/v2/pokemon/")
      .then((res) => {
        setPokemons(res.data.results);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  if (!pokemons) {
    return <Loader />;
  }
  return (
    <ul>
      {pokemons.map((p, index) => {
        return (
          <Link to={`/pokemons/${index + 1}`} key={index}>
            <li className="bg-gray-800 text-white p-3 mt-4 w-6/12 ml-4">
              Name: {p.name}
            </li>
          </Link>
        );
      })}
    </ul>
  );
}
