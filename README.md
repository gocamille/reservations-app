# A Quick Reservations App

This Reservations app is a small POC that does three things:
- Retrieves a list of reservations,
- Retrieves one reservation,
- Creates new reservations.

It uses [GraphQL](https://graphql.org/) and [Apollo](https://www.apollographql.com/) to connect to two models hosted on the serverless framework, [GraphCool](https://www.graph.cool/). Thanks to this, it requires very little configuration and can be updated and modified quickly.

## Quickstart
1. `git clone` the repository,

2. Run `yarn` or `npm install`, 

3. Run the app with either [Expo](https://expo.io/) or terminal. I used Expo XDE to debug with iOS Simulator and Android quickly -- however if you do not have the XDE you can also view the app by running `react-native run-ios` (which will ask you to visit Expo to view the app to run) for the iOS Simulator or `react-native run-android` for the Android Emulator. 

## Next steps
* Building Tests! Setting up component testing with [Jest](https://jestjs.io/) -- or even better, trying [Cypress](https://www.cypress.io/)
* Integrating [Flow](https://flow.org/) or [TypeScript](https://www.typescriptlang.org/)
* Add more error handling for client-side validation
* Update validation so it occurs on submit rather than on blur for batched validation
* Refactoring fields so each one is a component wired to validation styles and actions
* Update component directory so each file is bundled with its own style (in preparation for it to be used as a single component package)
* Refine Loading UI while creating a reservation
* Update the date pickers so 
  * the date range can be validated
  * the departure date is set to a minimum date of either today or the currently selected arrival date
* Turn `Reservation` and `ModalTemplate` into stateless components
* use React 16.3+ lifecycle methods for api calls and state updates and remove UNSAFE lifecycles
* Styling updates for form errors and form fields
