# Asset Manager

<p align="center">
<img src="https://img.shields.io/badge/TypeScript-3178C6?logo=typescript&logoColor=white&style=flat-square" alt="TypeScript" /> <img src="https://img.shields.io/badge/Express-000000?logo=express&logoColor=white&style=flat-square" alt="Express" /> <img src="https://img.shields.io/badge/pnpm-F69220?logo=pnpm&logoColor=white&style=flat-square" alt="pnpm" />
<a href="https://github.com/shahzaibnagi/Asset-Manager/commits/main"><img src="https://img.shields.io/github/last-commit/shahzaibnagi/Asset-Manager?style=flat-square" alt="last commit" /></a>
<img src="https://img.shields.io/github/license/shahzaibnagi/Asset-Manager?style=flat-square" alt="license" />
</p>


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
