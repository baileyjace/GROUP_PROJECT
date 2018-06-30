var config = {
    apiKey: "AIzaSyB7p3GymKOtuclgt-wKoWudxNcGaIQR7pQ",
    authDomain: "wtfshouldieat.firebaseapp.com",
    databaseURL: "https://wtfshouldieat.firebaseio.com",
    projectId: "wtfshouldieat",
    storageBucket: "wtfshouldieat.appspot.com",
    messagingSenderId: "984419410414"
};
firebase.initializeApp(config);

// some named ingredients for random recipes
var ingredients = [
    "Chicken", "Pork", "Beef", "Fish", "Pasta", "Mushroom", "Shrimp", "Tofu",
    "Seitan",
];

// function for calling a random recipt
var randomRecipe = function() {
    
    var randomChoice = Math.floor(Math.random() * ingredients.length + 1);
    var search = ingredients[randomChoice];
    var appid = "897772a2";
    var appkey = "c193011b1550064d6ebf4a7adb2ac3e8";
    var queryURL = "https://api.edamam.com/search?q="+search+"&app_id="+appid+"&app_key="+appkey;
    $.ajax({
        url: queryURL,
        method: "GET",
            
      })
    .then(function(response) {
        console.log(response.hits[Math.floor(Math.random() * 10)]);
    });
    
};

// function for getting an asked for recipe
var getRecipe = function() {
    var search = $("#recipe").val().trim();
    var appid = "897772a2";
    var appkey = "c193011b1550064d6ebf4a7adb2ac3e8";
    var queryURL = "https://api.edamam.com/search?q="+search+"&app_id="+appid+"&app_key="+appkey;
    $.ajax({
        url: queryURL,
        method: "GET",
            
      })
    .then(function(response) {
        console.log(response);
    });
};

// what happens when the find recipe buttion is clicked
$("#findRecipe").on("click", function(event) {
    event.preventDefault();
    // runs getRecipe function
    getRecipe();
    console.log($("#recipe").val().trim());
});

// what happens when the find recipe using ingredients button is pressed
$("#findRecipeIngredients").on("click", function() {
    
});

// what happens when the find restaurants button is clicked
$("#findRestaurants").on("click", function(event) {
    console.log("insideClick")
    event.preventDefault();
    // runds findRestaurants function
    findRestaurants();
});
    //getRestaurant();


    function findRestaurants() {
        //first ajax call to get city ID from Zomato
        var search = $("#restaurants").val().trim();
        var queryURL = "https://developers.zomato.com/api/v2.1/cities?q=" + search;
        $.ajax({
            url: queryURL,
            method: "GET",
            headers: {"user-key": "ad3e6676b39ae63041f68de59afcb7e3"},
            dataType: "json",
        })
        .then(function(response){
            console.log(response);
            console.log(response.location_suggestions[0].id);
        
            //second call to get the actual info that I want using Zomato ID
            var searchID = response.location_suggestions[0].id;
            var queryURL = "https://developers.zomato.com/api/v2.1/search?entity_id=" + searchID;
            $.ajax({
                url: queryURL,
                method: "GET",
                headers: {"user-key": "ad3e6676b39ae63041f68de59afcb7e3"},
                dataType: "json",
            })
            .then(function(response2){
                console.log(response2);
        
            });
        });
    };


var getRestaurant = function() {

    // creating variables for the 2 text fields
    var locationInput = $("#location-input").val().trim();
    
    // test
    console.log(locationInput);
    
    // clearing the text field on submit
    $("#location-input").val("");
    
    var queryURL = "https://developers.zomato.com/api/v2.1/cities?q="+ locationInput;

    $.ajax({
        url: queryURL,
        method: "GET",
        headers: {"user-key": "ad3e6676b39ae63041f68de59afcb7e3"},
        dataType: "json",
    })
    .then(function(response){
        console.log(response);

        // variables for the query responses we want
        var name = response.name;
        var location = response.location;
        var pics = response.thumb;
        var cuisine = response.cuisine;
        var userRating = response.user_rating;
        var phoneNumber = response.phone_numbers;
        
        // appending the results to the table
        $("#restaurant-table > tbody").append(
        "<tr><td id='table-name'>" + name + 
        "</td><td id='table-location'>" + location + 
        "</td><td id='table-pics'>" + pics + 
        "</td><td id='table-cuisine'>" + cuisine +  
        "</td><td id='table-rating'>" + userRating + 
        "</td><td id='table-phone'>" + phoneNumber + 
        "</td></tr>");

    });
};

$("#findRestaurants").on("click", function(event) {

    
    event.preventDefault();
    getRestaurant()

    

});




=======

