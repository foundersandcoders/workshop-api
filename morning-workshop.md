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
 You should have already downloaded Postman at the beginning of the day, if not visit ******fill in****
 We are going to use postman to explore the TFL api, firstly do a GET request to the following URL: https://api.tfl.gov.uk/Line/central/Arrivals/940GZZLUBLG?direction=inbound&app_id=&app_key=

 + How long till the next departing train from Bethnal Green, and what is it's destination?

 + Using the TFL API documentation (******* ADD THIS IN HERE) use postman to find the next departing train from Finsbury Park, what is it's destination?

Now using the tfl documentation and Postman, can you find out the following?

+ Number of cashpoints at Kings Cross station?
+ Number of exits at Waterloo station?
