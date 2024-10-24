import "./App.css";

import PokemonCard from "./components/PokemonCard";
import { useState } from "react";
import NavBar from "./components/NavBar";
import { GetCardColor } from "./components/PokemonSticker";
import { useEffect } from "react";

type Pokemon = {
	name: string;
	imgSrc?: string;
};

const pokemonList = [
	{
		name: "bulbasaur",
		imgSrc:
			"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
	},
	{
		name: "charmander",
		imgSrc:
			"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
	},
	{
		name: "squirtle",
		imgSrc:
			"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
	},
	{
		name: "pikachu",
		imgSrc:
			"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
	},
	{
		name: "mew",
	},
];

function App() {
	const [pokemonIndex, setPokemonIndex] = useState<number>(0);
	useEffect(() => {
		alert("hello pokemon trainer :)");
	}, []);

	const currentPokemon = pokemonList[pokemonIndex];
	const cardColor = GetCardColor(currentPokemon.name);

	return (
		<div className="App">
			<h1>Bienvenue dans le Pokédex</h1>
			<PokemonCard pokemon={currentPokemon} color={cardColor} />
			<NavBar
				pokemonIndex={pokemonIndex}
				setPokemonIndex={setPokemonIndex}
				pokemonList={pokemonList}
			/>
		</div>
	);
}

export default App;
