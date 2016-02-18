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
4. now once your open up your file, open up developer tools and navigate to the console tab, once you press the button you should see something like this ![example image] (https://files.gitter.im/RachBLondon/nrPd/Screen-Shot-2016-02-18-at-13.13.05.png) We can see that the GET request has been sucessful.
5. On line 8 `console.log` **the data you get back from the API**. Hint the data will be called whatever argument you gave the callback function in getJSON. Now if you open up the console in inspector, you should be able to see the JSON object. ![Console logged API object] (https://files.gitter.im/RachBLondon/OgOB/Screen-Shot-2016-02-18-at-13.28.48.png).
