import type React from "react";

interface NavBarProps {
	pokemonIndex: number;
	setPokemonIndex: (index: number) => void;
	pokemonList: Pokemon[];
}

const NavBar: React.FC<NavBarProps> = ({
	pokemonIndex,
	setPokemonIndex,
	pokemonList,
}) => {
	return (
		<>
			{pokemonList.map((pokemon, index) => (
				<button
					key={pokemon.name}
					type="button"
					onClick={() => setPokemonIndex(index)}
				>
					{pokemon.name}
				</button>
			))}
		</>
	);
};

export default NavBar;
