export default function Battleground({ pokemon, random }) {
  let firstPokemon;
  let secondPokemon;
  const getFirstAttacker = () => {
    if (pokemon?.base?.Speed > random?.base?.Speed) {
      firstPokemon = pokemon;
      secondPokemon = random;
    } else if (pokemon?.base?.Speed < random?.base?.Speed) {
      firstPokemon = random;
      secondPokemon = pokemon;
    }
  };
  getFirstAttacker();
  console.log(firstPokemon.name?.english);

  const fight = () => {
    let lifeOfFirst = firstPokemon.base?.HP;
    let lifeOfSecond = secondPokemon.base?.HP;
    const attackOfFirst =
      firstPokemon.base?.Attack - secondPokemon.base?.Defense;
    const attackOfSecond =
      secondPokemon.base?.Attack - firstPokemon.base?.Defense;
    const firstFights = () => {console.log(`Attack of first is ${attackOfFirst}`);
    attackOfFirst > 0 ? (lifeOfSecond -= attackOfFirst) : (lifeOfSecond -= 0);
    console.log(`Life of second ${lifeOfSecond}`);}
    const secondFights = () => {console.log(`Attack of second is ${attackOfSecond}`);
    attackOfSecond > 0 ? (lifeOfFirst -= attackOfSecond) : (lifeOfFirst -= 0);
    console.log(`Life of first ${lifeOfFirst}`);}

    //first phase - firstPokemon attacks secondPokemon
    console.log(`FIRST PHASE`);
    firstFights();

    // if the first Pokemon wins at phase 1 or else go to phase 2
    lifeOfSecond <= 0
      ? console.log(`${firstPokemon.name?.english} won!`)
      : console.log(`SECOND PHASE`)
        secondFights();
    
    // if the second Pokemon wins at phase 2 or else go to phase 3
    lifeOfFirst <= 0
      ? console.log(`${secondPokemon.name?.english} won!`)
      : console.log(`THIRD PHASE`);
         firstFights();

    // if the first Pokemon wins at phase 3 or else go to phase 4
    lifeOfSecond <= 0
      ? console.log(`${firstPokemon.name?.english} won!`)
      : console.log(`FOURTH PHASE`);
      secondFights();

    // if the second Pokemon wins at phase 4 or else call it a tie
    lifeOfFirst <= 0
      ? console.log(`${secondPokemon.name?.english} won!`)
      : console.log(`Nobody wins`);
  };

  fight();

  return <div>Battleground</div>;
}
