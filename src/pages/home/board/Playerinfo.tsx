import type { IHero, TPlayer } from '@/store/game/game.types';

interface Props {
  player: Omit<IHero, 'deck'>;
  typePlayer: TPlayer;
}

export function Playerinfo({ player }: { player: Omit<IHero, 'deck'> }) {
  return (
    <div className="absolute left-3 bottom-10">
      <div>Player</div>
    </div>
  );
}
