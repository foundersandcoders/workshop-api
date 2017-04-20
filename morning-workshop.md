# Morning Workshop - Using Postman to make an HTTP Request.

Before we write any of our API request code, we are first going to have a look at Postman. This tool let us run API requests without writing any javascript. So no need to to write any code and we can make a HTTP request, and get the response back in a easy to read format.

For this excerise we will be using the Github and TFL APIs, both will return us data in JSON (JavaScript Object Notation) form.

## Github API
Open up the postman app you downloaded this morning. We are going to be accessing the github api to get some information on some github users.

For example to get the information on the user "Octocat", we would open up postman and do a GET request on the following URL:
`https://api.github.com/users/octocat`

 1. How many followers does the user rachblondon have?
 2. How many people is tormo17 following?
 3. How many issues are there for the foundersandcoders news letter?

 ## Postman
 You should have already downloaded Postman at the beginning of the day, if not visit [https://www.getpostman.com/] (https://www.getpostman.com/)
 We are going to use postman to explore the TFL api, firstly to a GET request to the following URL: https://api.tfl.gov.uk/Line/central/Arrivals/940GZZLUBLG?direction=inbound&app_id=&app_key=

 + How long till the next departing train from Bethnal Green, and what is it's destination?

 + Using the [TFL API documentation] (https://api.tfl.gov.uk/) use postman to find out the following?

1. The number of tfl bike at River Street , Clerkenwell?
2. The number of empty bikes slots at River Street , Clerkenwell?
3. What is the commonName for the tube station found at lat: 51.53277643276, lon: -0.10597868848?
4. Which buses stop at the bus stop point id of 490003327J?

Extension: Govt Petition Site

1. Go to the the [Government Petition Website](https://petition.parliament.uk/petitions/) and find a petition that interests you.
2. Got to the bottom of the page and click on the 'Get petition data (json format)'.
3. Now you can see the benefits of JSON View as as the JSON object is in a nice and easy to read format. 
4. Who can tell me how many signatures they got in Clacton ?

## Further Reading 
[TfL Unified API Part 1: Introduction](http://blog.tfl.gov.uk/2015/10/01/tfl-unified-api-part-1-introduction/)
