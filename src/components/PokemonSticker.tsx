export function GetCardColor(pokemonName: string) {
	switch (pokemonName) {
		case "bulbasaur":
			return "lightgreen";
		case "charmander":
			return "lightcoral";
		case "squirtle":
			return "lightblue";
		case "pikachu":
			return "yellow";
		default:
			return "lightgray";
	}
}
