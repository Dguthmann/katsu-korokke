# Katsu-Korokke

### Author: David Guthmann

github: https://github.com/Dguthmann/katsu-korokke  
livesite: https://katsu-korokke.herokuapp.com/  


## List of Contents

debug.log  
package.json  
package-lock.json  
README.md  
### public  
favicon.ico    
index.html    
logo192.png  
logo192.png  
manifest.json  
robots.txt  
### src  
App.js
index.js
#### components  
EmployeeList.js  
SearchEmployeeContainer.js  
SearchForm.js  
#### utils  
API.js  


## Installation
you will need the following additional npms to run this project:  
axios  
bootstrap  
react  
react-dom  
react-scripts  
reactstrap  
web-vitals  


## Basic Overview of Project

The goal of the project is to model a small company spanning in the united states where non-privacy theatening information could be accessed quickly.  


## Project Functionality

![Site Screenshot](https://media.giphy.com/media/k3kF5UA98VFoTTs6km/giphy.gif)  


## Resources Used

Joe Rehfuss for search debugging especially with filter being non-destructive.  
Aslan Ghodsian for deployment auditing and help.  


## Further Development Plans

Styling and some hero cards would be nice to add when time permits, also having the tables have icons to show which direction it's sorted in.  Also to have better search functionality, which is also a limitation of the api used, in which all strings aren't lower cased.  This causes issues with the includes method used for the filter check.  


## Changelog

2020-11-06: Working on sort, search functionality,   
2020-11-05: Creation of initial files, Routing and Axios Requests


## Basic Working with React Information

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

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

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
