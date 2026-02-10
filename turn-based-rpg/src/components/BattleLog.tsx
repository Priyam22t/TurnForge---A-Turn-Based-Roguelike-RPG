export default function BattleLog({ log }: { log: string[] }) {
  return (
    <div className="log">
      {log.map((l, i) => (
        <div key={i}>• {l}</div>
      ))}
    </div>
  )
}
