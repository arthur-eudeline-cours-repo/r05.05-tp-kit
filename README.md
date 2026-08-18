# Starbucks TP Kit
UI Kit pour le TP Starbucks 3e années IUT Nevers

## Installation

- **Installer la librairie**
  ```sh
  npm install @arthur.eudeline/starbucks-tp-kit
  ```

# Tailwind v3

- **Modifier votre configuration TailwindCSS** 
  ```js
  // tailwind.config.js | tailwind.config.ts
  
  import { Config } from "tailwindcss"

  const config: Config = {
    "presets": [
      // Ajoute la couleur brand
      require('@arthur.eudeline/starbucks-tp-kit/tailwind/preset')
    ],
    content: [
      './src/**/*.{js,ts,jsx,tsx}',
    ],
  }

  export default config;
  ```
- **Importer le CSS dans votre Root Layout**
  ```tsx
  // src/app/layout.tsx
  
  import '@arthur.eudeline/starbucks-tp-kit/styles';
  import './globals.css';
  
  // [...]
  ```

# Tailwind v4
Ajoutez la ligne suivante à votre fichier `src/app/globals.css`
```css
@import "tailwindcss";
@import "@arthur.eudeline/starbucks-tp-kit/tailwind/v4"
```
Importez ensuite le style des composants `import "@arthur.eudeline/starbucks-tp-kit/styles";` en ajoutant cet import à votre fichier `src/app/layout.tsx` :
```tsx
import "./globals.css";
// Style des composants
import "@arthur.eudeline/starbucks-tp-kit/styles";
```

# **Importer les composants**
  ```tsx
  // src/app/my-component.tsx
  import { SectionContainer } from "@arthur.eudeline/starbucks-tp-kit/components/section-container";

  export function MyComponent() {
    return <SectionContainer>
      {/* ... */}
    </SectionContainer>
  }
  ```


## Documentation
Le Kit est livré avec un storybook dockerisé. Il liste tous les composants disponibles, leurs différentes variations ainsi la façon dont les utiliser.

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