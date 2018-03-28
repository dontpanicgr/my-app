HELP for this app

## Table of Contents

- [Folder Structure](#folder-structure)
- [Available Scripts](#available-scripts)
  - [npm start](#npm-start)
  - [npm test](#npm-test)
  - [npm run build](#npm-run-build)
  - [npm run eject](#npm-run-eject)
- [Something missing](#something-missing)


## Folder Structure

**Custom Structure**
To better organize components and containers this is the final folder structure.

src/api.js - You’ll probably need to make calls to a backend API at some point. Put all that code here. If it gets too unwieldy in one file, make a src/api directory and put the area-specific API files under there – like userApi.js, productApi.js, etc.

src/components - All your Presentational (aka Dumb) components go here. These are the simple stateless ones that just take props.

src/views - The Views components go here. These are the stateful ones, and the ones that make the API calls. If you’re using Redux, these are the ones that are connected to the store. Notice that CSS and tests are in the same folder as their respective components.

src/static - Put the images, static files in one place to start with.

src/styles - Put base styles in one place.

src/index.js - This is where you initialize the app and call ReactDOM.render, so it makes sense to keep this at the top level.

src/utils - You’ll probably end up with miscellaneous utility functions – error handlers, formatters, and the like. I usually put them in a file inside utils so I can access them easily.

```
my-app/
  node_modules/
  public/
    favicon.ico
    index.html
    manifest.json
  src/
    components/
        button.js
        icon.js
        userDetails.js
        userList.js
    services/
        api.js
    static/
        logo.svg
    styles/
        colors.js
        grid.js
        icons.js
        typography.js
    utils/
        utils.js
    views/
        App/
            app.css
            app.js
        app.test.js
        homePage.js
        userDetailPage.js
        userListPage.js
    index.js
    README.md
    package.json
```

Read [How to Structure Your React Project
](https://daveceddia.com/react-project-structure/) for more information about supported browsers.


**React Default**
After creation, your project should look like this: 

```
my-app/
  README.md
  node_modules/
  package.json
  public/
    index.html
    favicon.ico
  src/
    App.css
    App.js
    App.test.js
    index.css
    index.js
    logo.svg
```

For the project to build, **these files must exist with exact filenames**:

* `public/index.html` is the page template;
* `src/index.js` is the JavaScript entry point.

You can delete or rename the other files.

You may create subdirectories inside `src`. For faster rebuilds, only files inside `src` are processed by Webpack.<br>
You need to **put any JS and CSS files inside `src`**, otherwise Webpack won’t see them.

Only files inside `public` can be used from `public/index.html`.<br>
Read instructions below for using assets from JavaScript and HTML.

You can, however, create more top-level directories.<br>
They will not be included in the production build so you can use them for things like documentation.


## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](#running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](#deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.


## Something Missing?

If you have ideas for more “How To” recipes that should be on this page, [let us know](https://github.com/facebookincubator/create-react-app/issues) or [contribute some!](https://github.com/facebookincubator/create-react-app/edit/master/packages/react-scripts/template/README.md)
