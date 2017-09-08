# video-player
Personalized video player + tests
Requires nodejs

1) run "npm install" to install dependencies

2) run "npm run dev" to run a local developpement server, this will launch index.html
(units tests won't be loaded as source files can't be found, needs a fix)

3) go to app/ and open index.html
This will allow you to see the unit tests

4) run "npm test" to run nightwatch test
(test will not succeed, needs a fix)

5) run "npm run build" to build the project (compressing images/styles/scripts)
(unit tests will still be loaded in the html file, but not displayed)
