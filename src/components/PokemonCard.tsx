type PokemonListProps = {
	name: string;
	imgSrc?: string;
};

type PokemonCardProps = {
	pokemon: PokemonListProps;
	color: string;
};

function PokemonCard({ pokemon, color }: PokemonCardProps) {
	return (
		<>
			<figure className="card" style={{ backgroundColor: color }}>
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
