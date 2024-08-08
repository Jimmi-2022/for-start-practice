import { create } from 'zustand'
import { attackCardAction } from './actions/attack-card'
import { attackHeroAction } from './actions/attack-hero'
import { endTurnAction } from './actions/end-turn'
import { playCardAction } from './actions/play-card'
import { createDeck } from './create-deck'
import { type IGameStore, type IHero } from './game.types'


const initialPlayerData: IHero = {
	deck: createDeck(),
	health: 25,
	mana: 1,
}

const initialGameData: Pick<IGameStore, 'player' | 'opponent' | 'currentTurn' | 'isGameOver'> = {
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
	attackCard: (attackerId: number, targetId: number) => {
		set((state) => attackCardAction(state, attackerId, targetId))
	},	
	attackHero: (attackerId: number) => {
		set((state) => attackHeroAction(state, attackerId))
	},					
}))

export { useGameStore }
