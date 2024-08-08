import { useGameStore } from '@/store/game/game.store';

export function GameBoard() {
  const { player, opponent } = useGameStore();

  return (
    <div>
      <div>
        <h1>Opponent</h1>
        <p>HP: {opponent.health}</p>
        <p>Mana: {opponent.mana}</p>
      </div>

      <div>
        {opponent.deck
          .filter((card) => !card.isOnBoard)
          .map((card) => (
            <button
              className="h-60 w-10 bg-yellow-300 shadow inline-block mx-1"
              key={card.id}
            ></button>
          ))}
      </div>

      <div>
        <h1>Player</h1>
        <p>HP: {player.health}</p>
        <p>Mana: {player.mana}</p>
      </div>
    </div>
  );
}
