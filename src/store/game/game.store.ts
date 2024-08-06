import { create } from 'zustand'
import { createDeck } from './create-deck'
import { type IGameStore } from './game.types'

const initialPlayerData: IHero = {
	deck: createDeck(),
	health: 25,
	mana: 1,
}

const useGameStore = create<IGameStore>((set) => ({
	player: initialPlayerData,
	opponent:initialPlayerData,
	currentTurn: 'player',				
}))

export { useGameStore }
