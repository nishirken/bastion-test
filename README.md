
### Install
```npm i```
### Start app on http://localhost:3000
```npm start```

### Launch tests
Tests watch localhost:3000

Run playwright on a host machine (see https://playwright.dev/docs/intro#installing-playwright)

```npm init playwright@latest```

```npm test```

Or inside a container. It's my way

```
docker run -it -v ./.:/src --network="host" mcr.microsoft.com/playwright:v1.27.0-focal
```

```
cd src && npm test
```

### Summary
The project has been instantiated with create-react-app and redux-toolkit.

The whole work has been completed during the following tasks:
1. Project setup - 10 m
2. Write api interfaces. Mock api data + fetch. Plus, time to refresh and research work with redux - 3h 50m
3. Render UI using Material UI - 2h 37m
4. Write e2e tests - 1h 50m
5. Add actions to the app. Make the tests work - 3h 16m
6. README doc - 15m
