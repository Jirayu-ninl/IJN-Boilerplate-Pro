## TheIceJI-Boilerplate (Pro)
**update Feb 16, 2022**

**NEXT JS** with custom config webpack and Babel

#### Features

- TypeScript support
- Next Config (NextOffline, NextAnalyzer, Image Optimizer, Path alias)
- Header Config (SEO, Google Tag, Font)
- Global Context
- Global Layout and CSS
- Global Config

#### Additional Dependencies

- Emotion and TailwindCSS
- Framer Motion
- GraphQL
- Eslint
- Prettier

#### Structure

````
root/
├─ app/
│  ├─ config/
│  ├─ contexts/
├─ libs/
│  ├─ hooks/
├─ pages/
├─ public/
├─ resources/
│  ├─ content/
│  │  ├─ global/
│  ├─ views/
│  │  ├─ animations/
│  │  ├─ theme/
│  │  ├─ pages/
│  │  │  ├─ (each page)/
│  │  │  │  ├─ components/
│  │  │  │  ├─ styles/
│  │  │  │  ├─ assets/
│  │  ├─ layouts/
````

#### How to run

1. Add you config files at `/app/config`
2. Install
````
yarn
````
1. Run
````
yarn dev
````

**STATUS** In development

**VERSION** 1.0.0