import { useGameStore } from '@/store/game/game.store';

export function GameBoard() {
  const { player, opponent, playCard } = useGameStore();

  const calculateRotationOpponent = (index: number, total: number) => {
    const middle = (total - 1) / 2;
    return -((index - middle) * 10);
  };

  const calculateRotation = (index: number, total: number) => {
    const middle = (total - 1) / 2;
    return (index - middle) * 10;
  };

  return (
    <div>
      <div>
        <div>
          <h1>Opponent</h1>
          <p>HP: {opponent.health}</p>
          <p>Mana: {opponent.mana}</p>
        </div>
        <div className="-mt-44 flex items-center justify-center">
          {opponent.deck
            .filter((card) => !card.isOnBoard)
            .slice(0, 6)
            .map((card, index, array) => (
              <button
                className="h-36 w-24 bg-yellow-300 shadow inline-block -ml-2 rounded-lg"
                style={{
                  transform: `rotate(${calculateRotationOpponent(index, array.length)}deg)`,
                }}
                key={card.id}
                onClick={() => playCard(card.id)}
              ></button>
            ))}
        </div>
      </div>

      <section>
        <div className="h-[50vh]">
          {opponent.deck
            .filter((card) => card.isOnBoard)

            .map((card) => (
              <button
                className="h-60 w-44 shadow inline-block mx-1 rounded-lg"
                key={card.id}
              >
                <img alt={card.name} src={card.imageUrl} draggable="false" />
              </button>
            ))}
        </div>

        <hr />

        <div className="h-[50vh]">
          {player.deck
            .filter((card) => card.isOnBoard)

            .map((card) => (
              <button
                className="h-60 w-44 shadow inline-block mx-1 rounded-lg"
                key={card.id}
              >
                <img alt={card.name} src={card.imageUrl} draggable="false" />
              </button>
            ))}
        </div>
      </section>

      <div className="absolute left-3 bottom-10">
        <h1>Player</h1>
        <p>HP: {player.health}</p>
        <p>Mana: {player.mana}</p>
      </div>

      <div className="-bottom-14 absolute w-full flex items-center justify-center">
        {player.deck
          .filter((card) => !card.isOnBoard)
          .slice(0, 6)
          .map((card, index, array) => (
            <button
              className="h-36 w-24 bg-yellow-300 shadow inline-block -ml-2 rounded-lg"
              style={{
                transform: `rotate(${calculateRotation(index, array.length)}deg)`,
              }}
              key={card.id}
              onClick={() => playCard(card.id)}
            ></button>
          ))}
      </div>
    </div>
  );
}
