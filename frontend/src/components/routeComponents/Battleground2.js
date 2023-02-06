export default function Battleground2({ pokemon, random }) {

  // who attacks first
  let firstPokemon;
  let secondPokemon;
    if (pokemon?.base?.Speed > random?.base?.Speed) {
        firstPokemon = pokemon;
        secondPokemon = random;
    } else if (pokemon?.base?.Speed < random?.base?.Speed) {
        firstPokemon = random;
        secondPokemon = pokemon;
    }  
    else {
        // if speeds are equal
        console.log(`No fighting for today`)
    }

 // necessary variables
 let firstPokemonName = firstPokemon.name?.english;
 let secondPokemonName = secondPokemon.name?.english

 console.log(`The first attacker is ${firstPokemonName}`)

 let firstPokemonHP = firstPokemon?.base?.HP;
 let secondPokemonHP = secondPokemon?.base?.HP;

 let firstPokemonAttack = firstPokemon.base?.Attack;
 let secondPokemonAttack = secondPokemon.base?.Attack;

 let firstPokemonDefense = firstPokemon.base?.Defense;
 let secondPokemonDefense = secondPokemon.base?.Defense;

 const finalAttackOfFirst = () => {
    if (firstPokemonAttack > secondPokemonDefense) {
        return firstPokemonAttack -= secondPokemonDefense;
    } else {
        return 0;
    }
 }

 console.log(finalAttackOfFirst());

 const finalAttackOfSecond = () => {
    if (secondPokemonAttack > firstPokemonDefense) {
        return secondPokemonAttack -= firstPokemonDefense;
    } else {
        return 0;
    }
 }

 console.log(finalAttackOfSecond());



//  let finalAttackOfFirst = firstPokemonAttack - secondPokemonDefense
//  let finalAttackOfSecond = secondPokemonAttack - firstPokemonDefense

//  let finalHPofFirst = firstPokemonHP - finalAttackOfSecond;
//  let finalHPofSecond = secondPokemonHP - finalAttackOfFirst;



 // first phase
//  const firstPhase = () => {
//     console.log(`FIRST PHASE`)
//     if (firstPokemonAttack <= secondPokemonDefense) {
//         console.log(`${firstPokemonName}'s attack is lower than or same as ${secondPokemonName}'s defense. 
//         Let's start the next phase`)
//         secondPhase();
//         return
//     } else {
//         if (finalHPofSecond <= 0) {
//             console.log(`${secondPokemonName} starting life was ${secondPokemonHP}
//             ${firstPokemonName} attack ist ${firstPokemonAttack} - ${secondPokemonDefense}
//             Final life of ${secondPokemonName}: ${secondPokemonHP} - ${finalAttackOfFirst} = ${finalHPofSecond}`)
//             console.log(`${firstPokemonName} won!`)
//             return
//         } else {
//             console.log(`${secondPokemonName} starting life was ${secondPokemonHP}
//             ${firstPokemonName} attack ist ${firstPokemonAttack} - ${secondPokemonDefense}
//             Final life of ${secondPokemonName}: ${secondPokemonHP} - ${finalAttackOfFirst} = ${finalHPofSecond}`)
//             console.log(`${firstPokemonName} attacked and ${secondPokemonName}'s life is ${finalHPofSecond}. Let's start the second phase!`)
//             secondPokemonHP = finalHPofSecond;
//             secondPhase();
//             return
//         }
//     }
//  } 

//  // second phase
//  const secondPhase = () => {    
//     console.log(`SECOND PHASE`)
//     if (secondPokemonAttack <= firstPokemonDefense) {
//         console.log(`${secondPokemonName} life is now ${secondPokemonHP}`)
//         console.log(`${secondPokemonName}'s attack is lower than or same as ${firstPokemonName}'s defense. Let's start the next phase`)
//         thirdPhase();
//         return
//     } else {
//         if (finalHPofFirst <= 0) {
//             console.log(`${secondPokemonName} life is now ${secondPokemonHP}`)
//             console.log(`${firstPokemonName} starting life was ${firstPokemonHP}
//             ${secondPokemonName} attack ist ${secondPokemonAttack} - ${firstPokemonDefense}
//             Final life of ${firstPokemonName}: ${firstPokemonHP} - ${finalAttackOfSecond} = ${finalHPofFirst}`)
//             console.log(`${secondPokemonName} won!`)
//             return
//         } else {
//             console.log(`${secondPokemonName} life is now ${secondPokemonHP}`)
//             console.log(`${firstPokemonName} starting life was ${firstPokemonHP}
//             ${secondPokemonName} attack ist ${secondPokemonAttack} - ${firstPokemonDefense}
//             Final life of ${firstPokemonName}: ${firstPokemonHP} - ${finalAttackOfSecond} = ${finalHPofFirst}`)
//             console.log(`${secondPokemonName} attacked and ${firstPokemonName}'s life is ${finalHPofFirst}. Let's start the next phase!`)
//             firstPokemonHP = finalHPofFirst;
//             thirdPhase();
//             return
//         }
//     }
//  }

//  // third phase
//  const thirdPhase = () => {
//     console.log(`THIRD PHASE`)
//     if (firstPokemonAttack <= secondPokemonDefense) {
//         console.log(`${firstPokemonName}'s attack is lower than or same as ${secondPokemonName}'s defense. 
//         Let's start the next phase`)
//         return
//     } else {
//         if (finalHPofSecond <= 0) {
//             console.log(`${secondPokemonName} starting life was ${secondPokemonHP}
//             ${firstPokemonName} attack ist ${firstPokemonAttack} - ${secondPokemonDefense}
//             Final life of ${secondPokemonName}: ${secondPokemonHP} - ${finalAttackOfFirst} = ${finalHPofSecond}`)
//             console.log(`${firstPokemonName} won!`)
//             return
//         } else {
//             console.log(`${secondPokemonName} starting life was ${secondPokemonHP}
//             ${firstPokemonName} attack ist ${firstPokemonAttack} - ${secondPokemonDefense}
//             Final life of ${secondPokemonName}: ${secondPokemonHP} - ${finalAttackOfFirst} = ${finalHPofSecond}`)
//             console.log(`${firstPokemonName} attacked and ${secondPokemonName}'s life is ${finalHPofSecond}. Let's start the next phase!`)
//             secondPokemonHP = finalHPofSecond;
//             return
//         }
//     }
//  } 

//  firstPhase();
//  console.log(secondPokemonHP, firstPokemonHP)

  return <div>Battleground2</div>;
}
