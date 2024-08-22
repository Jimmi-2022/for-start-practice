import { PlayerInfo } from './PlayerInfo';
import { HandCard } from '@/pages/home/board/hand-card/HandCard.tsx';
import { useGameStore } from '@/store/game/game.store';

export function GameBoard() {
  const { player, opponent, playCard } = useGameStore();

  return (
    <div
      className="relative h-screen w-full grid grid-rows-2"
      style={{ gridTemplateRows: '1fr .1fr 1fr' }}
    >
      <section className="pt-36 px-20">
        <div>
          <PlayerInfo player={opponent} typePlayer="opponent" />
          <div className="-top-12 absolute w-full ">
            <div className="flex items-center justify-center">
              {opponent.deck
                .filter(card => !card.isOnBoard)
                .slice(0, 6)
                .map((card, index, array) => (
                  <HandCard
                    card={card}
                    arrayLength={array.length}
                    index={index}
                    onClick={() => playCard(card.id)}
                    isHided
                  />
                ))}
            </div>
          </div>
        </div>

        <div className="px-20 flex items-center justify-center gap-1">
          {opponent.deck
            .filter(card => card.isOnBoard)

            .map(card => (
              <button
                className="h-[11.3rem] w-32 shadow mx-1 rounded-lg"
                key={card.id}
              >
                <img alt={card.name} src={card.imageUrl} draggable="false" />
              </button>
            ))}
        </div>
      </section>

      <hr />

      <section className="pb-36">
        <div className="px-20 flex items-center justify-center gap-1 shadow-xl">
          {player.deck
            .filter(card => card.isOnBoard)

            .map(card => (
              <button
                className="h-[11.3rem] w-32 mx-1 rounded-lg shadow-2xl"
                key={card.id}
              >
                <img alt={card.name} src={card.imageUrl} draggable="false" />
              </button>
            ))}
        </div>

        <PlayerInfo player={player} typePlayer="player" />

        <div className="-bottom-11 absolute w-full ">
          <div className="flex items-center justify-center">
            {player.deck
              .filter(card => !card.isOnBoard)
              .slice(0, 6)
              .map((card, index, array) => (
                <HandCard
                  card={card}
                  arrayLength={array.length}
                  index={index}
                  onClick={() => playCard(card.id)}
                />
              ))}
          </div>
        </div>
      </section>
    </div>
  );
}
