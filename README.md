# starbucks-tp-kit

UI kit (registry [shadcn](https://ui.shadcn.com)) et [Storybook](https://storybook.js.org) associé, extraits du
support de cours **R05.05 Programmation Avancée** (IUT Nevers). Ce repo est généré automatiquement par
`git subtree split` depuis le monorepo de cours — voir `tp-kit/README.md` pour l'usage du kit.

```
tp-kit/       Composants UI (registry shadcn, source-only, pas de build).
storybook/    Storybook documentant tp-kit, déployé sur GitHub Pages à chaque push sur main.
```

## Développement

```
pnpm install
pnpm --dir storybook run dev     # http://localhost:6006
```

## Publication

Le Storybook statique est construit et déployé sur GitHub Pages par
[`.github/workflows/deploy-storybook.yml`](./.github/workflows/deploy-storybook.yml) à chaque push sur `main`.
