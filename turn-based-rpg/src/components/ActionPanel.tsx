export default function ActionPanel({ dispatch, potions }: any) {
  return (
    <div className="panel center">
      <button onClick={() => dispatch({ type: 'PLAYER_ATTACK' })}>
        Attack
      </button>

      <button
        disabled={potions <= 0}
        onClick={() => dispatch({ type: 'PLAYER_POTION' })}
      >
        Use Potion
      </button>
    </div>
  )
}
