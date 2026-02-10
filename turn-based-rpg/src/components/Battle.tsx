import { useEffect, useReducer } from 'react'
import { reducer, initialState } from '../game/reducer'
import CharacterPanel from './CharacterPanel'
import ActionPanel from './ActionPanel'
import BattleLog from './BattleLog'

export default function Battle() {
  const [state, dispatch] = useReducer(reducer, initialState)

  useEffect(() => {
    if (state.turn === 'ENEMY') {
      setTimeout(() => dispatch({ type: 'ENEMY_TURN' }), 500)
    }
  }, [state.turn])

  return (
    <div className="container fade">
      <h1 className="center">Turn-Based Roguelike</h1>
      <h3 className="center">Battles Survived: {state.level - 1}</h3>

      <div className="battlefield">
        <CharacterPanel c={state.player} />
        <CharacterPanel c={state.enemy} />
      </div>

      {state.status === 'ONGOING' && (
        <ActionPanel dispatch={dispatch} potions={state.player.potions} />
      )}

      {state.status === 'VICTORY' && (
        <div className="center">
          <h2>Victory!</h2>
          <button onClick={() => dispatch({ type: 'NEXT_BATTLE' })}>
            Next Battle
          </button>
        </div>
      )}

      {state.status === 'DEFEAT' && (
        <div className="center">
          <h2>Game Over</h2>
          <p>You survived {state.level - 1} battles</p>
        </div>
      )}

      <BattleLog log={state.log} />
    </div>
  )
}
