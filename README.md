# whiteboxrisque typescript-axios client

This generator creates TypeScript/JavaScript client that utilizes [axios](https://github.com/axios/axios). The generated Node module can be used in the following environments:

Environment
* Node.js
* Webpack
* Browserify

Language level
* ES5 - you must have a Promises/A+ library installed
* ES6

Module system
* CommonJS
* ES6 module system

It can be used in both TypeScript and JavaScript. In TypeScript, the definition should be automatically resolved via `package.json`. ([Reference](http://www.typescriptlang.org/docs/handbook/typings-for-npm-packages.html))

## Installation

```
npm install --save januusio/cryptowallet_risk_scoring_ts
```

## Getting started

Here's an example script that uses the library:

```typescript
import { Configuration, DefaultApi } from 'cryptowallet_risk_scoring_ts';

const configuration = new Configuration();

const exampleEthAddress = "0xbb0ea877a85df253ccc312b80c644da31443abfd";

// Create an instance of the DefaultApi
const defaultApi = new DefaultApi(configuration);

(async () => {
  // Call the scoreEthAddressGet method to get the risk report
  const response = await defaultApi.scoreEthAddressGet(exampleEthAddress);
  const riskReport = response.data;

  console.log(riskReport);
})();
```