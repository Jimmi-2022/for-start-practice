import type { IGameCard, IGameStore, TPlayer } from '../game.types'

const getCardById = (cardId: number, deck: IGameCard[]) => deck.find(card => card.id === cardId)


export const attackCardAction = (state: IGameStore, attackerId: number, targetId: number, attackerType: TPlayer) => {
	const isAttackerPlayer = attackerType === 'player'
	const attacker = isAttackerPlayer ? getCardById(attackerId, state.player.deck) : getCardById(attackerId, state.opponent.deck)

	const target = isAttackerPlayer ? state.opponent.deck.find(card => card.id === targetId) : state.player.deck.find(card => card.id === targetId)
}