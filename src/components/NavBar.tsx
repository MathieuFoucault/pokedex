import type React from "react";

type Pokemon = {
	name: string;
	imgSrc?: string;
};

type NavBarProps = {
	pokemonIndex: number;
	setPokemonIndex: (index: number) => void;
	pokemonList: Pokemon[];
};

const NavBar: React.FC<NavBarProps> = ({
	pokemonIndex,
	setPokemonIndex,
	pokemonList,
}) => {
	const handleClick = (pokemonIndex: number, name: string) => {
		setPokemonIndex(pokemonIndex);
		if (name === "pikachu") {
			alert("pika pikachu !!!");
		}
	};
	return (
		<>
			{pokemonList.map((pokemonList, pokemonIndex) => (
				<button
					key={pokemonList.name}
					type="button"
					onClick={() => handleClick(pokemonIndex, pokemonList.name)}
				>
					{pokemonList.name}
				</button>
			))}
		</>
	);
};

export default NavBar;
