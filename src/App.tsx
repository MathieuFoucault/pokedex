import "./App.css";

import PokemonCard from "./components/PokemonCard";
import { useState } from "react";

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

	const handlePrevious = () => {
		setPokemonIndex((index) => (index > 0 ? index - 1 : index));
	};

	const handleNext = () => {
		setPokemonIndex((index) =>
			index < pokemonList.length - 1 ? index + 1 : index,
		);
	};

	return (
		<div className="App">
			<h1>Bienvenue dans le Pokédex</h1>
			<PokemonCard pokemon={pokemonList[pokemonIndex]} />
			<div>
				{pokemonIndex > 0 && (
					<button type="button" onClick={handlePrevious}>
						Précédent
					</button>
				)}

				{pokemonIndex < pokemonList.length - 1 && (
					<button type="button" onClick={handleNext}>
						Suivant
					</button>
				)}
			</div>
		</div>
	);
}

export default App;
