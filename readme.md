# Nodejs Pool ArQmA Pool UI

### AngularJS based UI for [nodejs-pool](https://github.com/arqma/nodejs-pool-arqma)

### Features
- See your hashrate on all pages
- Track multiple payment addresses.
- Hashrate siren when hashrate falls below a certain limit.
- Per miner charts & Payment History.
- Miner login and management for threhold and payment adjustment.
- Admin UI for simple Pool management.
- All the usual features + more.

### Run it

Home page html can be set in welcome.html
Set pool params in app/globals.js.default and copy to app/globals.js

Requires NodeJS

```sh
$ npm start # starts gulp + livereload, serves from ./build on 8080
```

## Deploy
```sh
$ npm install # runs everything, serve from ./build
```
