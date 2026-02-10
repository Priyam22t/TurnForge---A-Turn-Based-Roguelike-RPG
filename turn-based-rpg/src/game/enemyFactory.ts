export function createEnemy(level: number) {
  const names = ['Goblin', 'Orc', 'Skeleton', 'Demon']
  const name = names[Math.floor(Math.random() * names.length)]

  return {
    name,
    hp: 50 + level * 12,
    maxHp: 50 + level * 12,
    mana: 20,
    maxMana: 20,
    attack: 7 + level * 2,
    defense: 3 + level,
    potions: 1
  }
}
