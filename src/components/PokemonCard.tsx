interface PokemonListProps {
	name: string;
	imgSrc?: string;
}

interface PokemonCardProps {
	pokemon: PokemonListProps;
}

function PokemonCard({ pokemon }: PokemonCardProps) {
	return (
		<>
			<figure>
				{pokemon.imgSrc ? (
					<img src={pokemon.imgSrc} alt={pokemon.name} />
				) : (
					<p>???</p>
				)}
			</figure>
			<figcaption>{pokemon.name}</figcaption>
		</>
	);
}

export default PokemonCard;
