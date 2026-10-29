# Asset Manager

TypeScript monorepo for an asset tracker: an Express API and a front-end sandbox, wired together with pnpm workspaces.

## Layout

```
artifacts/api-server/      Express + TypeScript API
artifacts/mockup-sandbox/  front-end scratch space
lib/                       shared types
```

## Running

```bash
pnpm install
pnpm --filter api-server dev
```

## Status

Work in progress. Listing and updating assets work end to end; the front end is still a sandbox and there are no tests yet, which is the first thing to fix before this touches real data.

## Licence

MIT, see `LICENSE`.
