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
			<figure className="card">
				{pokemon.imgSrc ? (
					<img src={pokemon.imgSrc} alt={pokemon.name} className="card-img" />
				) : (
					<p>???</p>
				)}
			</figure>
			<figcaption>{pokemon.name}</figcaption>
		</>
	);
}

export default PokemonCard;
