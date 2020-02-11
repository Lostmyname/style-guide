# Wonderbly Design System
[![style: styled-components](https://img.shields.io/badge/style-%F0%9F%92%85%20styled--components-orange.svg?colorB=daa357&colorA=db748e)](https://github.com/styled-components/styled-components)

The Wonderbly Design System provides React components and styles to the Wonderbly website. It also generates an additional website based off of Markdown files, JSDocs and PropType data to provide examples and usages, which can be found at [http://wbly-style-guide.herokuapp.com](http://wbly-style-guide.herokuapp.com).

## Table of contents
1. [Install](#install)
2. [Usage](#usage)
3. [Contributing](#contributing)
    - [Setup](#setup)
    - [Updating/Creating Components](#updatingcreating-components)
    - [Tests](#tests)

## Install

Install with NPM:
```
npm install @lostmyname/style-guide
```

Install with Yarn:
```
yarn add @lostmyname/style-guide
```

## Usage
Import any of the components, utilities, or configs from the lib directory into your app to start using them.

```js
import React from 'react';
import ReactDOM from 'react-dom'
// Added alias to convert `@lostmyname/style-guide/lib/components/atoms`
// to `wonderbly-atoms`. 
import Button from 'wonderbly-atoms/Button';

ReactDOM.render(
  <main>
    <Button raised color="green">Click me</Button>
  </main>,
  document.getElementById('root')
);
```

To see full examples and more usages across our components, visit [http://wbly-style-guide.herokuapp.com](http://wbly-style-guide.herokuapp.com).

## Contributing
Although most contributions will be done by the engineering team at Wonderbly, we are always thrilled and open to see others putting their own stamp into the things we build.

These can be fixing issues such as visual errors, improving our test suite, or even simpler improvements like spelling or updating parts of our documentation.

### Setup
Once you have cloned the repo you'll need to install the dependencies before you can do anything. We use Yarn, so to avoid confusion between lock files please ensure you have that installed before continuing.

Install the dependencies:
```
$ yarn
```

Once you have installed all the required packages you can run your local environment to see your changes by running:
```
$ yarn start
```
This will spin up a local server, the address of which will be outputted in the console.



### Updating/Creating Components
We are always working towards improving the UX of Wonderbly, in doing so we need to ensure that every component built within this package must have the following:

- Tests (using Jest)
- Type Checking (via PropTypes or TypeScript)
- Documentation and Examples

### Tests
Run all tests
```js
$ yarn test
```

Run atom component tests
```js
$ yarn test:atoms
```

Run molecule component tests
```js
$ yarn test:molecules
```

Run organism component tests
```js
$ yarn test:organisms
```
