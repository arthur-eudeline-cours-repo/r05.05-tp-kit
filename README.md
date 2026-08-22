# Starbucks TP Kit

UI Kit pour le TP Starbucks 3e années IUT Nevers.

Depuis la v3, le kit est distribué comme un **registry shadcn** : pas de package npm compilé, pas de
préfixe Tailwind. Les composants sont de simples fichiers source (Tailwind v4, [Base UI](https://base-ui.com),
[`cn()`](./src/lib/utils.ts) via `clsx` + `tailwind-merge`) que vous copiez dans votre propre projet avec la
CLI `shadcn`, exactement comme les composants du registry officiel.

## Installation d'un composant

Dans un projet Next.js/Vite déjà initialisé avec `shadcn` (`npx shadcn@latest init`), déclarez d'abord le
registry tp-kit sous l'espace de nom `@tp-kit` dans `components.json` :

```json
{
  "registries": {
    "@tp-kit": "https://arthur-eudeline-cours-repo.github.io/r05.05-tp-kit/r/{name}.json"
  }
}
```

Vous pouvez ensuite installer un composant avec :

```sh
npx shadcn@latest add @tp-kit/button
```

La CLI copie le fichier source dans `src/components/tp-kit/`, installe les dépendances npm nécessaires
(`class-variance-authority`, `@base-ui/react`, etc.) et ajoute les couleurs de marque (`brand`, `green`,
`coffee`, `default`) à votre thème via l'item `theme`.

Pour récupérer les couleurs et le reset CSS du kit sans composant particulier :

```sh
npx shadcn@latest add @tp-kit/theme
```

Le jeu de données produits du TP (`PRODUCTS_CATEGORY_DATA`, copié dans
`src/data/products-category.data.ts`) s'installe de la même façon — c'est ce dont les étudiants ont besoin
pour intégrer les maquettes avant d'avoir une base de données :

```sh
npx shadcn@latest add @tp-kit/products-data
```

## Composants disponibles

Voir [`registry.json`](./registry.json) pour la liste complète (nom, dépendances, fichiers). Chaque
composant a son propre item ; les dépendances internes (ex. `password-input` → `text-input` + `button`)
sont déclarées via `registryDependencies` et installées automatiquement.

## Servir le registry

```sh
pnpm run registry:build   # génère public/r/*.json à partir de registry.json
```

Le dossier `public/r/` peut ensuite être servi par n'importe quel serveur statique (le Storybook de ce
monorepo le fait déjà, sous `/r` — voir plus bas).

L'URL publique du registry est **`https://arthur-eudeline-cours-repo.github.io/r05.05-tp-kit/r/`** : c'est
le Storybook publié sur GitHub Pages par le dépôt
[r05.05-tp-kit](https://github.com/arthur-eudeline-cours-repo/r05.05-tp-kit) (alimenté depuis ce monorepo par
`scripts/split-ui-kit-public.sh`). Cette base est aussi codée en dur dans les `registryDependencies` de
[`registry.json`](./registry.json) et dans le bloc « Installation » du Storybook
(`tooling/storybook/.storybook/blocks/registry-install.tsx`) : si elle change, il faut la mettre à jour aux
trois endroits.

## Utilisation dans ce monorepo

`apps/fil-rouge/web` et `tooling/storybook` consomment le kit comme package workspace pnpm
(`@arthur.eudeline/starbucks-tp-kit`, `workspace:*`), directement depuis `src/` — il n'y a pas de build à
lancer. `apps/fil-rouge/web` transpile le package via `transpilePackages` dans `next.config.js`.

## Documentation

Le Kit est livré avec un storybook dockerisé. Il liste tous les composants disponibles, leurs différentes
variations ainsi la façon dont les utiliser.

### Installation

- **Via Docker**
  ```sh
  # Télécharger/Mettre à jour
  docker pull arthureudeline/starbucks-tp-kit-storybook

  # Démarrer
  docker run --rm -it -p 6006:80 arthureudeline/starbucks-tp-kit-storybook
  ```
- **Via Docker Compose**
  ```yaml
  # docker-compose.yml
  services:
   # [...]

    storybook:
      image: arthureudeline/starbucks-tp-kit-storybook
      ports: 
        - 6006:80
  ```
  Puis dans un terminal, utilisez les commandes suivantes :
  ```sh
  # Démarrer
  docker compose up -d

  # Stop
  docker compose stop

  # Mettre à jour
  docker compose pull storybook
  ```
