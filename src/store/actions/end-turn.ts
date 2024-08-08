import type { IGameStore, TPlayer } from '../game/game.types'

const getNewManna = (newTurn: TPlayer, currentMana: number) => {
	newTurn === 'player' 
			? Math.min(currentMana + 1, 6)
			: currentMana
}

const resetAttack = (deck: IGameCard[]) => deck.map((card) => ({ 
	...card, 
	isCanAttack: card.isOnBoard }))

export const endTurn = (get: () => IGameStore): IGameStore => {
	const state = get()

	const newTurn:TPlayer = state.currentTurn === 'player' ? 'opponent' : 'player'
	
	const newPlayerMana = getNewManna('player', state.player.mana)
	const newOpponentMana = getNewManna('opponent', state.player.mana)

	return {
		currentTurn: newTurn,
		player: {
			...state.player,
			mana: newPlayerMana,
			deck: resetAttack(state.player.deck),
		},
		opponent: {
			...state.opponent,
			mana: newOpponentMana,
			deck: resetAttack(state.opponent.deck),
		},
	}
}