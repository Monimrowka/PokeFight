export default function Battleground({ pokemon, random }) {
  let pokeState;
  switch (Math.floor(Math.random() * 3) + 1) {
    case 1:
      pokeState = "is very angry and ready to fight!";
      break;
    case 2:
      pokeState = "is in a fighting mood today and he's attacking right away!";
      break;
    default:
      pokeState =
        "behaves inconspicuously, but only to lull the vigilance of the opponent. It attacks unexpectedly!";
  }

  // define first and second Attacker
  let firstAttacker;
  let secondAttacker;
  if (pokemon.base?.Speed > random.base?.Speed) {
    firstAttacker = pokemon;
    secondAttacker = random;
  } else {
    firstAttacker = random;
    secondAttacker = pokemon;
  }

  // first attacker attack output
  let firstAttackOutcome;
  if (firstAttacker.base?.Attack <= secondAttacker.base?.Defense) {
    firstAttackOutcome = `nothing happens`;
  } else {
    let cameThrough = firstAttacker.base?.Attack - secondAttacker.base?.Defense;
    firstAttackOutcome = `only ${cameThrough} came through`;
  }

  // second attacker attack output
  let secondAttackOutcome;
  let firstAttackerLife;
  if (secondAttacker.base?.Attack <= firstAttacker.base?.Defense) {
    secondAttackOutcome = `nothing happens`;
  } else {
    let cameThrough = secondAttacker.base?.Attack - firstAttacker.base?.Defense;
    secondAttackOutcome = `${cameThrough} of damage come through`;
    firstAttackerLife = firstAttacker.base?.HP - cameThrough;
  }

  return (
    <div className="battleground">
      {/* define the first attacker */}
      <hr />
      <p>
        <b>{firstAttacker.name?.english}</b> {pokeState}
      </p>
      <p>
        <b>{firstAttacker.name?.english}</b> attacks first!
      </p>

      {/* define result of first attack */}
      <hr />
      <p>
        {" "}
        It's using its attack power of <b>{firstAttacker.base?.Attack}</b>, but{" "}
        {firstAttackOutcome}!*
      </p>

      {/* next phase */}
      <hr />
      <p>
        Now <b>{secondAttacker.name?.english}</b> has the chance to prove
        itself! It attacks with its attack power of <b>{secondAttacker.base?.Attack}</b>, and{" "}
        {secondAttackOutcome}
      </p>
      <p>
        <b>{firstAttacker.name?.english}</b> remains on{" "}
        <b>{firstAttackerLife}</b> health points.
      </p>

      {/* **** */}
      <hr />
      <p>
        *{secondAttacker.name?.english}'s defense is{" "}
        {secondAttacker.base?.Defense}.
      </p>
    </div>
  );
}
