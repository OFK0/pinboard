import os from 'node:os'
import { pin, unpin } from './actions'
import { COLORS, listPins } from './store'

// Render on every request: the pins change, and so does the uptime.
export const dynamic = 'force-dynamic'

const started = Date.now()

function uptime() {
  const s = Math.round((Date.now() - started) / 1000)
  return s < 60 ? `${s}s` : s < 3600 ? `${Math.floor(s / 60)}m` : `${Math.floor(s / 3600)}h ${Math.floor((s % 3600) / 60)}m`
}

export default function Page() {
  const pins = listPins()
  return (
    <main>
      <header>
        <h1>Pinboard</h1>
        <p className="muted">A Next.js app on a Raspberry Pi, deployed with piway. Pins are kept in memory: a new deploy clears the board.</p>
      </header>

      <form action={pin} className="new">
        <input name="text" placeholder="Pin a note…" maxLength={200} required aria-label="Note" />
        <fieldset aria-label="Color">
          {COLORS.map((c, i) => (
            <label key={c} className={`swatch ${c}`}>
              <input type="radio" name="color" value={c} defaultChecked={i === 0} />
              <span className="sr-only">{c}</span>
            </label>
          ))}
        </fieldset>
        <button type="submit">Pin it</button>
      </form>

      {pins.length === 0 ? (
        <p className="muted empty">The board is empty. Pin the first note.</p>
      ) : (
        <ul className="board">
          {pins.map((p) => (
            <li key={p.id} className={`note ${p.color}`}>
              <p>{p.text}</p>
              <form action={unpin}>
                <input type="hidden" name="id" value={p.id} />
                <button type="submit" aria-label="Remove this pin" title="Remove">×</button>
              </form>
            </li>
          ))}
        </ul>
      )}

      <footer className="muted">
        Next.js on Node {process.versions.node} · container {os.hostname()} · up {uptime()}
      </footer>
    </main>
  )
}
