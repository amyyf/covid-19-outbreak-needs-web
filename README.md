# What and why

This message board tool was built in response to the outbreak of COVID-19 as a way to quickly connect people who need help with others in their community who are available. Needs and offers are submitted through a Google Form to a Google Sheet; replies to the posted needs and offers are sent to an email address. An administrator manages the workflow of approving submissions to be published and connecting email responders to the original posters.

The goal here was to get up and running as quickly as possible, maximizing the use of existing tools and frameworks. In future, we'd like to automate this process, if it becomes clear that the tool could be useful beyond this original problem and/or if manual management proves to be too arduous.

# Details

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app) and uses [React Bootstrap](https://react-bootstrap.netlify.com/) for styling.

It is hosted with [Firebase](https://firebase.google.com/docs/hosting/quickstart).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm run deploy`

Deploys the app to Firebase. Note the CLI will need to be [installed](https://firebase.google.com/docs/hosting/quickstart#install-cli) and the project [initialized](https://firebase.google.com/docs/hosting/quickstart#initialize) before deployment is possible.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## Configuring the tool

In `src/components/App/inded.js`, a few config variables are set:
- `formLink`: the Google form where needs and offers will be submitted
- `responseLink`: the email address where responses will go
- `offerString`: this will be determined by the form field for type of request
- `requestString`: this will be determined by the form field heading for type of request

In `/src/api/index.js`, two more settings:
- `endpoint`: hits a function in Firebase that returns the data from the sheet
- `renameKeys`: converts the sheets response keys into more readable keys

## Learn More

[Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).
