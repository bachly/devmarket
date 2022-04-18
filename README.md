# Toptal Test of Bach Ly

This project is built using NextJS, TailwindCSS and Google Map Static API.

Demo: [toptal-test.here.li](https://toptal-test.here.li).

## Commands

```
// Install dependencies
yarn install

// Run development environment locally
yarn dev

// Run E2E Visual Test
yarn cypress

// Udate E2E Visual Test snapahots
yarn cypress-udpate-snapshot
```

## Configurations

### Environment variables

Environment variables are stored in `.env.local` for local development

### TailwindCSS

TailwindCSS is configured in `tailwind.config.js` and `postcss.config.js`

Other custom CSS can be found in `styles/main.scss`

### Cypress E2E testing

Cypress is configured in `cypress.json`

## Deployment

The project is deployed to Vercel.

```
vercel --prod
```
