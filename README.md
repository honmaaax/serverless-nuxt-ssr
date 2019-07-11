# Ragate nuxt server side rendering.

## Getting Started

Install packages

```bash
yarn
```

Change to your domain name in `/serverless.yml`

```serverless.yml
custom:
  customDomain:
    domainName: xxxxxxxxxxxxxxx.com
```

## Build

```bash
yarn build
yarn build:stg
yarn build:prd
```

## Serve on local

```bash
yarn serve
yarn serve:stg
yarn serve:prd
```

# Deploy to Aws

```bash
yarn deploy
yarn deploy:stg
yarn deploy:prd
```
