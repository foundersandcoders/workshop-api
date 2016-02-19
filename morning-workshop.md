#Morning Workshop - Using Apigee and Postman

Before we write any of our API request code, we are first going to have a look at two very useful tools, Apigee and Postman. These tools let us run API requests without writing any javascript. This helps us explore what data is available quickly (no need to write the code for your app).

For this excerise we will be using the Github and TLF APIs, both will return us data in JSON (JavaScript Object Notation)form.

Let's start with Apigee

##Apigee
 Visit Apigee.com, and navigate to Github API. Using Apigee, can you find out answers to the following?

 1. How many followers does the user rachblondon have?
 2. How many is sohilpandya folling?
 3. How many issues are there for the foundersandcoders news letter?

 ##Postman
 You should have already downloaded Postman at the beginning of the day, if not visit [https://www.getpostman.com/] (https://www.getpostman.com/)
 We are going to use postman to explore the TFL api, firstly do a GET request to the following URL: https://api.tfl.gov.uk/Line/central/Arrivals/940GZZLUBLG?direction=inbound&app_id=&app_key=

 + How long till the next departing train from Bethnal Green, and what is it's destination?

 + Using the [TFL API documentation] (https://api.tfl.gov.uk/) use postman to find out the following?

1. The number of tfl bike at River Street , Clerkenwell?
2. The number of empty bike slots at River Street , Clerkenwell?
3. What is the commonName for the tube station found at lat: 51.53277643276, lon: -0.10597868848?
4. Which buses stop at the bus stop point id of 490003327J?

Extension: Govt Petition Site

1. Use Postman to do a GET request to https://petition.parliament.uk/petitions/114003.json, what is the petition for?
2. Visit the govt petition site at https://petition.parliament.uk/, looking at the URL we used above, can you work out how to find a url that is API querable for any petition?


##Further Reading 
[TfL Unified API Part 1: Introduction](http://blog.tfl.gov.uk/2015/10/01/tfl-unified-api-part-1-introduction/)
