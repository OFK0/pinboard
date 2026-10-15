// piway waits for this before it sends traffic to a new version.
export const dynamic = 'force-dynamic'

export function GET() {
  return new Response('ok\n', { headers: { 'Content-Type': 'text/plain' } })
}
