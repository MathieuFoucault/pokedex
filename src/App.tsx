import "./App.css";

import PokemonCard from "./components/PokemonCard";
import { useState } from "react";
import NavBar from "./components/NavBar";
import { useEffect } from "react";

interface Pokemon {
	name: string;
	imgSrc?: string;
}

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

	return (
		<div className="App">
			<h1>Bienvenue dans le Pokédex</h1>
			<PokemonCard pokemon={pokemonList[pokemonIndex]} />
			<NavBar
				pokemonIndex={pokemonIndex}
				setPokemonIndex={setPokemonIndex}
				pokemonList={pokemonList}
			/>
		</div>
	);
}

export default App;
