import { createEnemy } from './enemyFactory'

export type Turn = 'PLAYER' | 'ENEMY'
export type Status = 'ONGOING' | 'VICTORY' | 'DEFEAT'

export interface Character {
  name: string
  hp: number
  maxHp: number
  mana: number
  maxMana: number
  attack: number
  defense: number
  potions: number
}

export interface State {
  player: Character
  enemy: Character
  turn: Turn
  log: string[]
  status: Status
  level: number
}

export const initialState: State = {
  level: 1,
  player: {
    name: 'Mage',
    hp: 100,
    maxHp: 100,
    mana: 40,
    maxMana: 40,
    attack: 10,
    defense: 3,
    potions: 2
  },
  enemy: createEnemy(1),
  turn: 'PLAYER',
  log: ['A dangerous enemy approaches...'],
  status: 'ONGOING'
}

function calculateDamage(attacker: Character, defender: Character) {
  const base = attacker.attack - defender.defense
  const variance = 0.8 + Math.random() * 0.4
  const crit = Math.random() < 0.15
  const dmg = Math.max(1, Math.floor(base * variance * (crit ? 1.7 : 1)))
  return { dmg, crit }
}

export function reducer(state: State, action: any): State {
  if (state.status !== 'ONGOING') {
    if (action.type === 'NEXT_BATTLE') {
      const next = state.level + 1
      return {
        ...initialState,
        level: next,
        player: {
          ...state.player,
          hp: state.player.maxHp,
          mana: state.player.maxMana,
          potions: state.player.potions + 1
        },
        enemy: createEnemy(next),
        log: [`Battle ${next} begins!`]
      }
    }
    return state
  }

  switch (action.type) {
    case 'PLAYER_ATTACK': {
      const r = calculateDamage(state.player, state.enemy)
      const enemyHp = state.enemy.hp - r.dmg

      const log = [
        ...state.log,
        r.crit
          ? `💥 Critical! You deal ${r.dmg}.`
          : `You deal ${r.dmg} damage.`
      ]

      if (enemyHp <= 0) {
        return { ...state, log: [...log, 'Victory!'], status: 'VICTORY' }
      }

      return {
        ...state,
        enemy: { ...state.enemy, hp: enemyHp },
        turn: 'ENEMY',
        log
      }
    }

    case 'ENEMY_TURN': {
      // Enemy uses potion automatically
      if (state.enemy.hp < state.enemy.maxHp * 0.35 && state.enemy.potions > 0) {
        return {
          ...state,
          enemy: {
            ...state.enemy,
            hp: state.enemy.hp + 25,
            potions: state.enemy.potions - 1
          },
          turn: 'PLAYER',
          log: [...state.log, 'Enemy uses a potion!']
        }
      }

      const r = calculateDamage(state.enemy, state.player)
      const playerHp = state.player.hp - r.dmg

      const log = [
        ...state.log,
        r.crit
          ? `💥 Enemy CRITS you for ${r.dmg}!`
          : `Enemy hits you for ${r.dmg}.`
      ]

      if (playerHp <= 0) {
        return { ...state, log: [...log, 'You died.'], status: 'DEFEAT' }
      }

      return {
        ...state,
        player: { ...state.player, hp: playerHp },
        turn: 'PLAYER',
        log
      }
    }

    case 'PLAYER_POTION': {
      if (state.player.potions <= 0) return state

      return {
        ...state,
        player: {
          ...state.player,
          hp: Math.min(state.player.maxHp, state.player.hp + 30),
          potions: state.player.potions - 1
        },
        turn: 'ENEMY',
        log: [...state.log, 'You drink a potion.']
      }
    }

    default:
      return state
  }
}
