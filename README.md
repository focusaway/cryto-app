# Senior Frontend Developer Challenge

### Take-Home Assignment

## Description

In this project version you will be able to see the top 50 Crypto.

## Details

You can filter them by the following criteria:
- Name (starts with)
- Max price (less than or equal)
- Min price (greater than or equal)
- Market cap (less than or equal)
- Circulating supply (less than or equal)

## Architecture, component design, and development choices

### Architecture

A simple SPA deployed in vercel, you can enter https://cryto-app.vercel.app/ to see the final result

The structure of the project is divided into:
- components `src/components/README.md`
- pages `src/pages/README.md`
- constants `src/constants/README.md`
- interfaces `src/interface/README.md`
- test `src/test/README.md`
- theme `src/theme/README.md`
- utils `src/utils/README.md`

### Components design

The components were created in such a way that they had no associated logic, they comply with the necessary logic for the project.

### Development choices

React-alert library added for speed

## A summary of what else you could/would like to have done if you had more time.

Even though not a week has passed, I would have liked to add authentication and a navigation menu. The detail of each crypto could be added, a visualization in the form of graphs in addition to an ordering.

At this point I did not do the test set, I would have liked to spend more time and add some tests with cypress, but I am short of time and I deliver what I achieved which is something functional

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn run docs`

Generates the corresponding documentation of the react components.\
[JSDoc](https://jsdoc.app/)