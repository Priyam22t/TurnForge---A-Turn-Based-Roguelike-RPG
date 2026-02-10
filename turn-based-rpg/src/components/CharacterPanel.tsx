import type { Character } from '../game/reducer'

export default function CharacterPanel({ c }: { c: Character }) {
  return (
    <div className="panel">
      <h3>{c.name}</h3>

      <div className="bar">
        <div className="bar-fill hp" style={{ width: `${(c.hp / c.maxHp) * 100}%` }} />
      </div>
      <small>HP {c.hp} / {c.maxHp}</small>

      <div className="bar">
        <div className="bar-fill mana" style={{ width: `${(c.mana / c.maxMana) * 100}%` }} />
      </div>
      <small>Mana {c.mana} / {c.maxMana}</small>

      <p>ATK {c.attack} | DEF {c.defense}</p>
      <p>Potions: {c.potions}</p>
    </div>
  )
}
