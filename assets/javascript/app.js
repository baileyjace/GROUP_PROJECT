
$(document).ready(function () {
    $("#sidebar").mCustomScrollbar({
        theme: "minimal"
    });

    $('#sidebarCollapse').on('click', function () {
        $('#sidebar, #content').toggleClass('active');
        $('.collapse.in').toggleClass('in');
        $('a[aria-expanded=true]').attr('aria-expanded', 'false');
    });

    var searchIDs;
    var searchTerms = "Chicken";
    var from = 0;
    var to = 12;
    $("#searchButton").click(function(event){
        event.preventDefault();
        searchIDs = $("input:checkbox:checked").map(function(){
          return $(this).val();
        }).get(); // <----
        console.log(searchIDs);
        
        if(searchIDs.length !== 0){
        for(var i = 0; i < searchTerms.length; i++){

           searchTerms = searchIDs.join();
        }
    }
      
    });


    function GetRecipe() {
        var search = searchTerms;
        var appid = "897772a2";
        var appkey = "c193011b1550064d6ebf4a7adb2ac3e8";
        var queryURL = "https://api.edamam.com/search?q="+search+"&from=0&to=12&app_id="+appid+"&app_key="+appkey;
        $.ajax({
            url: queryURL,
            method: "GET",                
          })
        .then(function(response) {
            console.log(response);

            console.log(queryURL);

        var recipes = response.hits;
        var columnsCount = 0;
        var rowCount = 0;
        var rowID = 1;
        var newRow = $("<div>");
        newRow.addClass( "row" );
        newRow.attr("id", "row_" + rowID);
        $(".container").append(newRow);

        console.log("Recipies: " + recipes.length);

        for(var i = 0; i < recipes.length ; i++){                                 

           var imageURL = response.hits[i].recipe.image;
           var recipeLabel = response.hits[i].recipe.label;

         
            console.log(rowID);
            console.log(columnsCount);
            console.log(recipeLabel);
            console.log(imageURL);
            

            if(columnsCount == 3)
            {                
                
               rowID ++;
               newRow = $("<div>");
               newRow.addClass( "row" );
               newRow.attr("id", "row_" + rowID);


               newRow.append("<div class=\"col-md-4\"> <div class=\"card\" style=\"width: 18rem;\"> <img class=\"card-img-top\" src=\"" +
               imageURL + "\" alt=\"Card image cap\"> <div class=\"card-body\"> <p class=\"card-text\">" +
               recipeLabel + "</div></div></div>");
                 
               $(".container").append(newRow);
               
               columnsCount = 1
            }
            else
            {
                columnsCount ++;

                console.log("I am displaying " + recipeLabel); 
                newRow.append("<div class=\"col-md-4\"> <div class=\"card\" style=\"width: 18rem;\"> <img class=\"card-img-top\" src=\"" +
                imageURL + "\" alt=\"Card image cap\"> <div class=\"card-body\"> <p class=\"card-text\">" +
                recipeLabel + "</div></div></div>");                                  
               
            }            
        }

        });
     }

     var dairyIngredients = ["butter", "egg milk", "parmesan", "cheddar", "american cheese", "sour cream", "cream cheese", "mozzarella", "yogurt", "cream", "evaporated milk", "whipped cream", "half and half"]
     var vegetableIngredients = ["onion", "garlic", "tomato", "potato", "carrot", "bell pepper", "basil", "parsley", "broccoli", "corn", "spinach", "mushroom",
     "green beans", "ginger", "chili", "pepper", "celery", "rosemary", "salad greens", "red onion", "cucumber", "sweet potato", "pickle", "avocado", "zucchini", 
        "cilantro", "frozen vegetables", "olive", "asparagus", "cabbage", "cauliflower", "dill", "kale", "mixed vegetable", "pumpkin", "squash", 
        "mint", "scallion" ,"sun dried tomato" ,"shallot" ,"eggplant", "beet" ,"butternut","squash" ,"horseradish", "leek", "caper", "brussels", "sprout",
        "artichoke", "heart", "chia seeds", "radish", "sauerkraut" ,"artichoke" ,"portobello mushroom", "sweet pepper", "arugula" ,"spaghetti squash",
         "capsicum", "bok", "choy" ,"parsnip" ,"okra" ,"yam", "fennel", "turnip" ,"snow peas", "bean sprouts", "seaweed", "chard", "collard", 
         "canned tomato", "pimiento", "watercress" ,"tomatillo", "rocket", "mustard greens" ,"bamboo shoot", 
         "rutabaga", "endive", "broccoli rabe", "jicama", "kohlrabi" ,"hearts of palm", "butternut", "celery root" ,"daikon" ,"radicchio" ,"porcini", 
         "chinese broccoli", "jerusalem artichoke" ,"cress" ,"water chestnut", "dulse", "micro greens" ,"burdock", "chayote"]

     function LoadIngredients() {

      

     };
     
     GetRecipe();

    

});

// firebase config
var config = {
    apiKey: "AIzaSyB7p3GymKOtuclgt-wKoWudxNcGaIQR7pQ",
    authDomain: "wtfshouldieat.firebaseapp.com",
    databaseURL: "https://wtfshouldieat.firebaseio.com",
    projectId: "wtfshouldieat",
    storageBucket: "wtfshouldieat.appspot.com",
    messagingSenderId: "984419410414"
};
firebase.initializeApp(config);

var database = firebase.database();

// some named ingredients for random recipes
var ingredients = [
    "Chicken", "Pork", "Beef", "Fish", "Pasta", "Mushroom", "Shrimp", "Tofu",
    "Seitan",
];


var gramsToOz = function() {
    var weight = (response.weight) / 28.3495;
    var ozWeight = weight;
    if (parseInt(weight) > 16) {
        var pounds = parseInt((weight) / 16) | 0;
        console.log(pounds);
        console.log(weight);        
    };
    while (parseInt(ozWeight) >= 16) {
        var ozWeight = Math.round(parseInt(ozWeight) - 16);
    };
    
    var convertedWeight = (pounds + " lbs " + ozWeight + " oz")
    console.log(convertedWeight);
}



// excluded ingredients
var excludedIngredientsArray = [];

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
    var excludeIngredients = ""
    for (i=0; i < excludedIngredientsArray.length; i++) {
        excludeIngredients += "&excluded="+excludedIngredientsArray[i];
    };
    console.log(excludeIngredients);
    var queryURL = "https://api.edamam.com/search?q="+search+"&app_id="+appid+"&app_key="+appkey+excludeIngredients;
    $.ajax({
        url: queryURL,
        method: "GET",
            
      })
    .then(function(response) {
        console.log(response);
    });
};

// what happens when the find recipe button is clicked
$("#findRecipe").on("click", function(event) {
    event.preventDefault();
    // runs getRecipe function
    getRecipe();
    console.log($("#recipe").val().trim());
});

// what happen when you click the exclude button
$("#excludeIngredient").on("click", function(event) {
    event.preventDefault();
    // runs excludeIngredient function
    var excludedIngredient = $("#exclude-ingredient").val().trim();
    excludedIngredientsArray.push(excludedIngredient);
    console.log(excludedIngredient);
    console.log(excludedIngredientsArray)
})

// save recipe function for results of search
$("#save-recipe").on("click", function(event) {
    event.preventDefault();

    // needs work - what are we pulling from the api? what do we want to save?
    var savedRecipe = {
        recipe: recipe
    }

    database.ref().push(savedRecipe);

    console.log(savedRecipe.recipe);

    return false;
});

database.ref().on("child_added", function(childSnapshot, prevChildKey) {
    console.log(childSnapshot.val());

    var firebaseRecipe = childSnapshot.val().recipe;

    // append firebase results to recipe table
    $("#recipe-table > tbody").append("<tr><td>" + firebaseRecipe + "</td></tr>");
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






