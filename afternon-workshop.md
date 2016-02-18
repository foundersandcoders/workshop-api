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
You code should look like this:
```
$.getJSON( theUrlYouneed, function (data){
\\ leave this blank for now but inside this function we will write the code to manipulate the API requests
});

```
4. now once your open up your file, open up developer tools and navigate to the console tab, once you press the button you should see something like this ![example image] (https://files.gitter.im/RachBLondon/nrPd/Screen-Shot-2016-02-18-at-13.13.05.png) We can see that the GET request has been sucessful.

5. On line 8 `console.log` **the data you get back from the API**. Hint the data will have the same name as the argument we have the callback in getJSON (in this case it is simply data). Now if you open up the console in inspector, you should be able to see the JSON object. ![Console logged API object] (https://files.gitter.im/RachBLondon/OgOB/Screen-Shot-2016-02-18-at-13.28.48.png).

6. Next Create a `var` called items, assign it to an empty array ie `var items = [];` We are going to build up this variable to contain the data that we eventually want to add to the DOM (the html).

7.We need to manuplate our api data to make it more readable for the users before we add it to the html. The API request has returned an array of objects for us to work with. Each of these objects represents departure. As this comes to us in array form, we can use a handy array method [map](https://msdn.microsoft.com/en-us/library/ff679976(v=vs.94).aspx) to move through each of these objects. Let's start by simply console logging each departure indvidually. Do do this write the following code (type it your self as you will become more familar with it)
```
data.map(function(arrival){
 console.log(arrival);
});

```
Now if you open up console in inspector, and click the button, you should see the indvidual depature objects being logged. ![example](https://files.gitter.im/RachBLondon/eF1s/Screen-Shot-2016-02-18-at-13.49.06.png)

8.We want to find the destination of each arrival, opening up the object in the inspector console, find the name of the object key which tells us the destination. Check this by console logging that key name, you code should look something like this:
`console.log(arrival.keyNameForDestination)` this must be inside your `map` function.

9. Great now we are console loggin the destinations, we just need to find the times as well. Open up the arrival object and find the keyname for time untill the train arrives, console log this as well.

10. Now we are console logging both the destination and the time the train arrives. However the TFL API sends us the time in seconds, let's make it more readable by using the **moment.js** library. Have a go a reading the [Moment.js documentation](http://momentjs.com/) to see if you can work how to make the time more human readable, if you are stuck visit [hints](https://github.com/foundersandcoders/workshop-api/blob/master/hints.md#momentjs). Console log the human readable departure times.
