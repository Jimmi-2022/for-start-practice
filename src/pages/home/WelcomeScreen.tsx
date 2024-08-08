import { Button } from '@/components/ui/button/Button';
import { Heading } from '@/components/ui/heading/Heading';
import { useGameStore } from '@/store/game/game.store';

function WelcomeScreen() {
  const { startGame } = useGameStore();

  return (
    <div className="flex items-center justify-center flex-col gap-4 h-screen">
      <Heading>RED STONE</Heading>
      <Button variant="primary" onClick={startGame}>
        Start game
      </Button>
    </div>
  );
}

export default WelcomeScreen;
