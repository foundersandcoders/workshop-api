# Hints


#### Moment.js
`console.log(moment().add(arrival.timeToStation, 'seconds').fromNow());`


#### Adding html and pushing to items variabls
`items.push("<li>"+ arrival.destinationName + moment().add(arrival.timeToStation, 'seconds').fromNow()+"</li>")`

#### Appending items var to the DOM
Here we want to add items inside an ordered list, and then append to the DOM (html) element, main.
```
  $( "<ol/>", {
      "class": "my-new-list",
      html: items.join( "" )
    }).appendTo( "main" )
```

