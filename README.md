# pinboard

A small [Next.js](https://nextjs.org) app to try
[piway](https://github.com/OFK0/piway) with: pin colored notes to a board,
remove them, and watch a deploy swap the container without downtime.

- App Router with Server Actions: the forms work without JavaScript too.
- `output: 'standalone'`: the image ships Next.js's own small server, not
  `node_modules`.
- `piway.yaml` tells piway how to build and run it
  ([manifest reference](https://github.com/OFK0/piway/blob/main/docs/MANIFEST.md));
  `GET /api/healthz` is the health check it waits for.
- Pins live in memory, so each deploy starts an empty board.

Run it without piway:

```sh
npm ci && npm run dev                     # http://localhost:3000
docker build -t pinboard . && docker run --rm -p 3000:3000 pinboard
```
