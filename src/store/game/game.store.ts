import { create } from 'zustand'
import { endTurnAction } from './actions/end-turn'
import { createDeck } from './create-deck'
import { type IGameStore, type IHero } from './game.types'


const initialPlayerData: IHero = {
	deck: createDeck(),
	health: 25,
	mana: 1,
}

const initialGameData = {
	player: initialPlayerData,
	opponent:initialPlayerData,
	currentTurn: 'player',
	isGameOver: false,
}

const useGameStore = create<IGameStore>((set, get) => ({
	...initialGameData,
	startGame: () => set(initialGameData),
	endTurn: () => set(endTurnAction(get)),
	playCard: (cardId: number) => {
		set((state) => playCardAction(state, cardId))
	},			
}))

export { useGameStore }
