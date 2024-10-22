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
	const handlePrevious = () => {
		setPokemonIndex((index: number) => (index > 0 ? index - 1 : index));
	};

	const handleNext = () => {
		setPokemonIndex((index: number) =>
			index < pokemonList.length - 1 ? index + 1 : index,
		);
	};

	return (
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
	);
};

export default NavBar;
