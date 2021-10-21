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

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `yarn build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)


Router:

1. install the package:
> npm install — save react-router-dom

2. the React Router API:
    <Router>: The router that keeps the UI in sync with the URL
    <Link>: Renders a navigation link
    <Route>: Renders a UI component depending on the URL

In a web application, you have two options:

    <BrowserRouter>, which uses the HTML5 History API.
    <HashRouter>, which uses the hash portion of the URL (window.location.hash)


3. exact or Switch
In the previous example, since the /message and /about paths also contain the character /, they are also matched and rendered.
so if you click the Messages the Home also show.

<Route exact path="/" component={Home}/>

If you test the application, you’ll see that everything works fine.

The routes /message and /about are still evaluated, but they are not an exact match for / now.

However, if we know that only one route will be chosen, we can use a <Switch> component to render only the first route that matches the location:
```
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/messages" component={Messages} />
            <Route path="/about" component={About} />
          </Switch>
```
Switch just for finding only one and return;


4. But what happens when a nonexistent path is entered?

For example http://localhost:3000/non-existent:

In a <Switch> component, this default behavior can be implemented with a <Redirect> component:

          <Route path="/error" component={Error}/>
          <Redirect to="/error" />
          or:
          <Redirect to="/" />
          or:
          <Route component={Error}/> // It is purposely set at the bottom of the Switch
          or:
          <Route path="*" component={Home} />

5. advanced features
- nested route

match:{isExact, patams, path, url}


    params: Key/value pairs parsed from the URL corresponding to the parameters
    isExact: true if the entire URL was matched (no trailing characters)
    path: The path pattern used to match
    url: The matched portion of the URL
log:    
isExact: true
​params: Object { id: "1" }
​path: "/messages/:id"
​url: "/messages/1"

强制使用数字ID：
<Route path={`${match.url}/:id(\\d+)`} component={Message} />

But notice that for the initial page of the messages section (/messages) or if you enter in the URL and invalid identifier (like /messages/a), nothing is printed under the list. A message would be nice, don’t you think?
空界面如何给出默认的提时信息？

<Route path={match.url} render={() => <h3>Please select a message</h3>} />


    - component to render a component
    - render, a function that returns the element or component to be rendered
    - children, a function that also returns the element or component to be rendered. However, the returned element is rendered regardless of whether the path is matched or not

