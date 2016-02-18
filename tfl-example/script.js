
$( "#search-bethnal-tube" ).on( "click", function() {
  //first clear any previous reponses
  //https://api.jquery.com/empty/
  $('.my-new-list').remove();

  // api request
  $.getJSON( "https://api.tfl.gov.uk/Line/central/Arrivals/940GZZLUBLG?direction=inbound&app_id=&app_key=", function( data ) {
    var APIdata = data;
    console.log(data);
    // create a variable called items, we will build this up and add it to the DOM later
    var items = [];
    APIdata.map(function(arrival){
      // logging whole response
      console.log(data);
      // logging only the section we want, and use moment.js to make the time human readable
      console.log(arrival.destinationName,moment().add(APIdata[0].timeToStation, 'seconds').fromNow());
      // pushing or adding the items to our 'items' variable contained within html <li>
      items.push("<li>"+ arrival.destinationName + moment().add(arrival.timeToStation, 'seconds').fromNow()+"</li>")
    });

    // appending items inside an <ol> parent element and adding to the body of our html page
    $( "<ol/>", {
      "class": "my-new-list",
      html: items.join( "" )
    }).appendTo( "main" )
  });

});
