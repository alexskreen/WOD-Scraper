# _Wod Scraper_

#### _Capstone Project for Epicodus_, _May. 21st, 2020_

#### By _**Alex Skreen**_

## Description

_This application allows a user to organize all their workouts in a single application instead of navigating to each gym's page separately_

_Main screen, showing all workouts for that day:_


## Specifications:

| Specification | Example Input | Example Output |
| ------------- |:-------------:| -------------------:|
| The user should be able to select a gym from a dropdown menu|click dropdown menu and see list of gyms| Gym selected|
| The user should be able to click submit to select their gym|User clicks submit| Gym selected|
| The user selected gym should then been scraped|User selects comptrain| comptrainScraper runs and gathers today's data|
| The scraped data should be fed into an MySQL database |user clicks submit| scraped data is saved to database|
| The scraped data should be displayed in the DOM |user clicks submit| scraped data is displayed in the DOM|

## Project Concept:

_As an avid fan of CrossFit and fitness in general I find it incredibly time consuming to go to 10 different websites each day to find a workout that I want to do. These sites each require multiple clicks to get the necessary information, and their links change frequently. I have thought to myself on many occasions, "There has to be a better way to put all these workouts together in one place". That is why I set out to create an easy to use application that does just that. All you have to do is pull up the application, select your prefered gyms, and see all their workouts listed side by side._

###_MVP:_
* Scrape multiple gym's workouts
* Display them in the DOM

###_Stretch Goals:_
* Allow users to choose a favorite track
 * Show user what program each site is running (if they are using current cycles)
 * Historical data: Give the user the option to choose a date to jump back to and see the workouts for a day in the past (aim for a month of historical data)
 * Allow user to log in/out
 * Allow user to log in using an external service (such as Google or Facebook)
 * Allow user to track their PRs so that workouts that are listed with percentages of max effort lifts can be automatically calculated

## Setup/Installation Requirements

### Node install

#### For macOS:
_If Homebrew is not installed on your computer already, then install Homebrew by entering the following two commands in Terminal:_
* ``$ /usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"``
* ``$ echo 'export PATH=/usr/local/bin:$PATH' >> ~/.bash_profile``

_Install Git with the following command:_
* ``$ brew install git``

_Next, install Node.js by entering the following command in Terminal:_
* ``$ brew install node``

#### For Windows:
_Please visit the [Node.js website](https://nodejs.org/en/download/) for installation instructions._

### Node install
* ``$ npm install mysqljs/mysql``

### Setup/install this application

_Clone this repository via Terminal using the following commands:_
* ``$ cd desktop``
* ``$ git clone https://github.com/alexskreen/WOD-Scraper``
* ``$ cd WOD-Scraper``

_Confirm that you have navigated to the WOD Scraper directory (e.g., by entering the command_ ``pwd`` _in Terminal). Next, add a file named .env to project root directory (e.g., by entering the command_ ``touch .env`` _in Terminal)._

_Next, install node package manager (npm) at the project's root directory via the following command:_
* ``$ npm install``

_Open this application via live server using the following command:_
* ``$ node server/index.js``

_To view/edit the source code of this application, open the contents of the WOD Scraper directory in a text editor or IDE of your choice (e.g., to open all contents of the directory in Visual Studio Code on macOS, enter the command_ ``code .`` _in Terminal)._

## Technologies Used
* _Git_
* _HTML_
* _CSS_
* _JavaScript_ 
* _Express.js_ 
* _npm_ 
* _Node.js_
* _Puppeteer_

## Known Bugs/Contact

_If you have any requests for features or find a bug, please submit a pull request._

### License

*This webpage is licensed under the MIT license.*

Copyright (c) 2020 **_Alex Skreen_**