// Pins live in this server's memory, so a deploy starts an empty board:
// piway gives containers no persistent storage yet.
const MAX_PINS = 60

export const COLORS = ['yellow', 'pink', 'green', 'blue']

const pins = []
let nextId = 1

export function listPins() {
  return pins.slice()
}

export function addPin(text, color) {
  pins.unshift({ id: nextId++, text, color, at: new Date().toISOString() })
  pins.length = Math.min(pins.length, MAX_PINS)
}

export function removePin(id) {
  const i = pins.findIndex((p) => p.id === id)
  if (i >= 0) pins.splice(i, 1)
}
