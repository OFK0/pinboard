'use server'

import { revalidatePath } from 'next/cache'
import { addPin, COLORS, removePin } from './store'

const MAX_TEXT = 200

export async function pin(formData) {
  const text = String(formData.get('text') ?? '').trim().slice(0, MAX_TEXT)
  const color = COLORS.includes(formData.get('color')) ? formData.get('color') : COLORS[0]
  if (text) addPin(text, color)
  revalidatePath('/')
}

export async function unpin(formData) {
  removePin(Number(formData.get('id')))
  revalidatePath('/')
}
