# Anguar Multibranding with SASS

### Install

``` bash
npm intall # install parent project dependencies.

npm run install # install child projects dependencies concurrently.

npm run install:brand-a # install brand-a project dependencies.

npm run install:brand-b # install brand-b project dependencies.

npm run install:factory # install factory project dependencies.

```

### Build

``` bash
npm run build # build all projects cuncurrently.

npm run build:brand-a # build brand-a project.

npm run build:brand-b # build brand-b project.

npm run build:factory:brand-x # build factory project with brand-x as parameter.

npm run build:factory:brand-y # build factory project with brand-y as parameter.
```

### Run

``` bash
npm start # Run all projects concurrently. brand-a (port 4201), brand-b (port 4202) factory (port 4200).

npm run brand-a # Run brand-a project on port 4201.

npm run brand-b # Run brand-b project on port 4202.

npm run factory:brand-x # Run brand-x on port 4200.

npm run factory:brand-y # Run brand-y on port 4200.

```