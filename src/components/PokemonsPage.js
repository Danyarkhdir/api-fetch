import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import Loader from "./Loader-animation";

export default function PokemonsPage() {
  const { id } = useParams();
  const [pokemon, setPokemon] = useState();
  useEffect(() => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${id}`)
      .then((res) => {
        const pokemon = {
          name: res.data.name,
          abilities: [...res.data.abilities],
        };
        setPokemon(pokemon);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);
  if (!pokemon) return <Loader />;
  return (
    <div className="mt-10 pb-8 text-center w-8/12 mx-auto border-2 border-black rounded-lg  ">
      <h1 className="text-3xl font-bold p-6 bg-slate-400 rounded-t-md">
        {pokemon.name.toUpperCase()}
      </h1>
      <ul>
        <h3 className="text-xl font-bold">Abilities of the pokemon:</h3>
        {pokemon.abilities.map((abilities, index) => {
          const abilityName =
            abilities.ability.name[0].toUpperCase() +
            abilities.ability.name.slice(1);
          return (
            <li
              className="text-lg py-2 my-2 border-2 border-black w-8/12 mx-auto bg-black rounded-full text-white"
              key={abilities.ability.name}
            >
              <p className="text-xl text-yellow-500 font-bold">{`${
                index + 1
              }. ${abilityName}`}</p>
              <a target="_blank" rel="noreferrer" href={abilities.ability.url}>
                url : {abilities.ability.url}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
