var config = {
    apiKey: "AIzaSyB7p3GymKOtuclgt-wKoWudxNcGaIQR7pQ",
    authDomain: "wtfshouldieat.firebaseapp.com",
    databaseURL: "https://wtfshouldieat.firebaseio.com",
    projectId: "wtfshouldieat",
    storageBucket: "wtfshouldieat.appspot.com",
    messagingSenderId: "984419410414"
};
firebase.initializeApp(config);

$(document).ready(function(){

var recipes = [
    "Chicken", "Pork", "Beef", "Fish", "Pasta", "Mushroom", "Shrimp", "Tofu",
    "Seitan",
];

var randomRecipe = function() {
    
    var randomChoice = Math.floor(Math.random() * recipes.length + 1);
    var search = recipes[randomChoice];
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

$("#findRecipe").on("click", function(event) {
    event.preventDefault();
    getRecipe();
});

$("#findRecipeIngredients").on("click", function() {
    
});


$("#findRestaurants").on("click", function(event) {
    console.log("insideClick")
    event.preventDefault();
    findRestaurants();
    console.log("hello");
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
            console.log(search);
            console.log(response);
            console.log(queryURL);
            console.log(response.location_suggestions[0].id);
        
            //second call to get the actual info that I want using Zomato ID
            var searchID = response.location_suggestions[0].id;
            var query2URL = "https://developers.zomato.com/api/v2.1/search?entity_id=" + searchID + "&entity_type=city&collection_id=1&count=5";
            $.ajax({
                url: query2URL,
                method: "GET",
                headers: {"user-key": "ad3e6676b39ae63041f68de59afcb7e3"},
                dataType: "json",
            })
            .then(function(response2){
                console.log(response2);
                console.log(query2URL);

                        // variables for the query responses we want
        var name = response2.restaurants["0"].restaurant.name;
        var location = response2.restaurants["0"].restaurant.location.address;
        var cuisine = response2.restaurants["0"].restaurant.cuisines;
        var userRating = response2.restaurants["0"].restaurant.user_rating.aggregate_rating;
        var phoneNumber = response2.restaurants["0"].restaurant.phone_numbers;
        
        //for loop to iterate through the first 5 responses
        var restaurantArray = response2.restaurants
        $.each(restaurantArray, function() {
            $.each(this, function (restaurant, index){
            console.log(restaurant + '=' + index); 
        

        // appending the results to the table
        $("#restaurant-table > tbody").append(
        "<tr><td id='table-name'>" + name + 
        "</td><td id='table-location'>" + location + 
        "</td><td id='table-cuisine'>" + cuisine +  
        "</td><td id='table-rating'>" + userRating + 
        "</td><td id='table-phone'>" + phoneNumber + 
        "</td></tr>");
        
            });
        });
            });
        });
    };
})





    




    



