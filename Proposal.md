#### Project Title: WOD Scraper

#### Created by: Alex Skreen

##### Description:
This application is a web scraper that compiles data from all the top gyms so you can easily see all of the workouts of the day and pick which one you would like to do

##### Use Case:
There are about 5 main websites that host their own workout of the day. Most local gyms use one of these websites as their source of programming daily workouts for their members. If you happen to do CrossFit there is a 90% chance you need to look these up on a daily basis to see what your workout is going to be. This ends up being such a hassle, especially when these main websites change where the workouts are located pretty frequently. What I want to do is simplify this by creating one app that hosts them all. A user can load one application and see a list of all the workouts for that day. 

##### Minimum Viable Product:
 * Scrape the web for at least 5 gym websites’ workouts.
 * This will gather the daily workout from the following sites:
Comptrain
CrossFit Mayhem
Misfit Athletics
Linchpin
CrossFit Mainsite
 * Display the workout data from the above sites in the DOM for the current day. This will include the following:
Date
Warmup
Main workout
Any accessory and mobility work

##### Tools for MVP:
 * Javascript
 * Node.js
 * CheerioJS
 * Puppeteer

##### Additional Features:
 * Allow users to choose a favorite track
 * Prioritize a track based off of the user’s preference
 * Show user what program each site is running (if they are using current cycles)

 * Historical data: Give the user the option to choose a date to jump back to and see the workouts for a day in the past (aim for a month of historical data)
 * Allow user to log in/out
 * Allow user to log in using an external service (such as Google or Facebook)
 * Allow user to track their PRs so that workouts that are listed with percentages of max effort lifts can be automatically calculated

##### Tools for Additional Features
 * Firebase
 
##### Additional Information:
I have found a handful of useful articles and tutorials on how to get this started, but I don’t know the exact scope of building out a web scraper. I want to make sure I’m not biting off more than I can chew with this project
