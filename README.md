#Steps for executing TestCafe tests on BrowserStack

![BrowserStack Logo](https://d98b8t1nnulk5.cloudfront.net/production/images/layout/logo-header.png?1469004780) 

* Install testcafe
	- npm install -g testcafe

* Install testcafe for browserstack
	- npm i -g testcafe-browser-provider-browserstack

* Set the Browserstack Username and Accesskey. In testcafe all the variables have to be set as environment variables
	- export BROWSERSTACK_USERNAME="<BROWSERSTACK_USERNAME>"
	- export BROWSERSTACK_ACCESS_KEY="<BROWSERSTACK_ACCESS_KEY>"

* Methods to run the tests:
	- Via command line
		- for single run : testcafe 'browserstack:chrome@75.0:Windows 8.1' 'single.js'
		- for local run : testcafe 'browserstack:chrome@75.0:Windows 8.1' 'local.js'
		- for parallel run :  testcafe 'browserstack:firefox@58.0:OS X High Sierra,browserstack:ie@11:Windows 10,browserstack:chrome@75.0:Windows 8.1' 'single.js'

	- Can be specified in the scrips in package.json and can be run using 'npm run' command
		- for single tests : npm run single
		- for local tests : npm run local
		- for parallel tests : npm run parallel

* Note: Local is on bydefault for all the tests, hence we can run local tests without having to start the local connection

* To set different capabilities you can refer https://github.com/DevExpress/testcafe-browser-provider-browserstack
* Documentation page of browserstack testcafe https://www.browserstack.com/automate/testcafe

* Some important capabilities:

- export BROWSERSTACK_PROJECT_NAME="<project_name>"
- export BROWSERSTACK_BUILD_ID="<build_name>"
- export BROWSERSTACK_TEST_RUN_NAME="<session_name>"# browserstack-testcafe
