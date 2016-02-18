##Afternoon Workshop - Build your own TFL Journey Planner

This afternoon we are going to build our own Journey Planner app.

This workshop will use:
- [TFL API] (https://api.tfl.gov.uk/) To get our data.
- [JQuery] (https://jquery.com/) To help us write JavaScript more simply.
- [Moment js] (http://momentjs.com/) To add human readable time.

To save time, we are going to use some premade HTML, CSS and JS files. This can be found in this repo, in the tfl example folder.

1. Open the index.html file in the tfl example folder, the html has already been written for you (you can change the content later if you like). But we still need to added the to the JavaScript files we will be using. For the third party js files (JQuery and Moment.JS) we are going to us a Content Delivery Network (CDN) to link to these files. All this means is that the actual files will be hosted on another server (website), all we need to do to use them is to add the CDN script links. **Google JQuery and Momenet JS CDN to find the script links for both of these libraries and add them to the bottom of our html file**.
2. We also need to add a link to our **style.css** in the head, and our **script.js** at the bottom of our body.
3. Now open up the **script.js** file. On line 2 we can see that a click event has already been added to the button, inside this click event we are going to write our API request. On line 6 **use the JQuery [getJSON syntax] (http://api.jquery.com/jquery.getjson/) To write a JQuery API request to the URL for departures from Bethnal Green** (see this mornings tutorial).
