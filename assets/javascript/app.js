
   
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyBzRDQfdggjjoQ5pMWpNe3H7A_inNvkx0s",
    authDomain: "employeedatabase-8d6ab.firebaseapp.com",
    databaseURL: "https://employeedatabase-8d6ab.firebaseio.com",
    projectId: "employeedatabase-8d6ab",
    storageBucket: "employeedatabase-8d6ab.appspot.com",
    messagingSenderId: "358459002360"
  };
  firebase.initializeApp(config);

    var database = firebase.database();
     
     
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


    var fruitIngredients = ["lemon", "apple" , "banana",  "lime",  "strawberry",  "orange",  "pineapple" , "blueberry" , "raisin" , "coconut" , "grape" , "peach" , "raspberry",  "cranberry" , 
      "mango",  "pear",  "blackberry",  "cherry",  "date" , "watermelon",  "berries" , "kiwi",  "grapefruit" , "mandarin",  "craisins" , "cantaloupe" , 
      "plum",  "apricot",  "clementine",  "prunes",  "apple",  "butter",  "pomegranate",  "nectarine",  "fig",  "tangerine",  "papaya",  "rhubarb",  "sultanas",  "plantain" , "currant" , "passion fruit" , 
      "guava" , "persimmons" , "lychee",  "lingonberry",  "tangelos",  "kumquat",  "boysenberry",  "star fruit",  "quince" , "honeydew" , "crabapples"]   


    var bakingGrainsIngredients = ["ice pasta" ,"flour", "bread" ,"baking powder", "baking soda", "bread crumbs", "cornstarch", "rolled oats" ,"noodle" ,"flour tortillas", "pancake mix", "yeast" ,
      "cracker", "quinoa" ,"brown rice", "cornmeal", "self rising flour", "cake mix", "saltines" ,"popcorn", "macaroni", "cheese mix", "corn tortillas", "ramen" ,"cereal", 
      "biscuits" ,"stuffing mix", "couscous", "pie crust", "bisquick", "chips", "angel hair coconut flake" ,"bread flour", "croutons", "lasagne", "pizza dough", "bagel" ,"puff pastry",
      "hot dog bun", "barley", "multigrain bread", "potato flakes" ,"pretzel", "cornbread", "english muffin", "cornflour", "crescent roll dough", "cream of wheat coconut flour",
      "pita", "risotto", "muffin mix", "bicarbonate of soda", "ravioli" ,"wheat", "rice flou" ,"polenta", "baguette", "gnocchi", "vermicelli" ,"semolina" ,"wheat germ", " buckwheat", 
      "croissants" ,"bread dough", "filo dough", "yeast flake", "pierogi" ,"matzo meal" ,"rye", "tapioca flour", "shortcrust", "pastry", "potato starch", "breadsticks", "ciabatta",
       "spelt" ,"angel food" ,"tapioca starch", "starch whole wheat flour", "gram flour", "sourdough starter" ,"wafer", "bran", "challah" ,"sponge cake", "malt extract", "sorghum flour"]

     var favoriteRecipeURLs = [];
     var favouriteRecipes = [];

     //Loads the ingredients list
    function LoadIngredients() {       

            for(var i = 0; i < dairyIngredients.length ; i++){
            var dairyDiv = $("#dairySubmenu");
            dairyDiv.append("<li> <label class=\"checkbox-inline\"> <input type=\"checkbox\" value=\"" + dairyIngredients[i]
                + "\">" + dairyIngredients[i] + "</label>" + "</li>");
            }

            for(var i = 0; i < vegetableIngredients.length ; i++){
                var veggieDiv = $("#veggieSubmenu");
                veggieDiv.append("<li> <label class=\"checkbox-inline\"> <input type=\"checkbox\" value=\"" + vegetableIngredients[i]
                + "\">" + vegetableIngredients[i] + "</label>" + "</li>");
            }

            for(var i = 0; i < fruitIngredients.length ; i++){
                var fruitDiv = $("#fruitsSubmenu");
                fruitDiv.append("<li> <label class=\"checkbox-inline\"> <input type=\"checkbox\" value=\"" + fruitIngredients[i]
                + "\">" + fruitIngredients[i] + "</label>" + "</li>");
            }

            for(var i = 0; i < bakingGrainsIngredients.length ; i++){
                var BGSubmenuDiv = $("#BGSubmenu");
                BGSubmenuDiv.append("<li> <label class=\"checkbox-inline\"> <input type=\"checkbox\" value=\"" + bakingGrainsIngredients[i]
                + "\">" + bakingGrainsIngredients[i] + "</label>" + "</li>");
            }
     };

$(document).ready(function () {

    //Load the ingredients first
    LoadIngredients();    

    //side navigation bar effects
    $("#sidebar").mCustomScrollbar({
        theme: "minimal"
    });

    $('#sidebarCollapse').on('click', function () {
        $('#sidebar, #content').toggleClass('active');
        $('.collapse.in').toggleClass('in');
        $('a[aria-expanded=true]').attr('aria-expanded', 'false');
    });

    var searchIDs;
    var searchTerms = "Chicken"; //default search term
    var from = 0;
    var to = 12;

    //Executes when the search button is clicked
    //Get the selected ingredients and pass it to the query url and get the recipes
    $("#searchButton").click(function(event){
        event.preventDefault();

        //Get the values of all the checkboxes that are selected
        searchIDs = $("input:checkbox:checked").map(function(){
          return $(this).val();
        }).get(); 
        
        //Populate the comma separated search term
        if(searchIDs.length !== 0){
            $( ".container" ).empty();
        for(var i = 0; i < searchIDs.length; i++){            
           searchTerms = searchIDs.join();
           }        
        }

        //Get the recipes
        GetRecipe();      
    });

    //Executes when the page number is clicked
    //Maximum of 4 pages displayed
    //To-Do --- need to handle what happens when the ajax response contains fewer than 4 pages of items
    $(".nav-item").click(function(event){
        event.preventDefault();        
        
        //Calculate the from and to query parameters based on the selected page number
        to =  parseInt($( this ).text()) * 12;
        from = to - 12;     
       
        //get the recipes for the specific page
        GetRecipe();      
    });

     //Executes when the favorite icon is clicked      
     $('body').on('click', 'img.favourite', function() {
        event.preventDefault();      
        var currentImage = $( this ).attr('src');
        var favouriteRecipeLabel = $( this ).parent( ".card-text" ).text();
        var favouriteImageURL = $( this ).parents( ".card").find(".card-img-top").attr('src');
        var favouriteRecipeURL = $( this ).parents( "a").attr('href');

        //Toggle the favorite icon
        if(currentImage !== "assets/images/favourite_icon.png"){
                $( this ).attr('src', "assets/images/favourite_icon.png");                            

                // Creates local "temporary" object for holding favourite recipe data
                var favRecipe = {
                    RecipeName: favouriteRecipeLabel,
                    ImageURL: favouriteImageURL,    
                    RecipeURL: favouriteRecipeURL              
                };

                // Uploads favourite recipe data to the database
                database.ref().push(favRecipe);               
        }
        else{
            //Toggle the favorite icon
                $( this ).attr('src', "assets/images/favourite_iconMain.jpg");
                //remove the favorite recipe data from the database
                database.ref().orderByChild('RecipeURL').equalTo(favouriteRecipeURL)
                          .once('value').then(function(snapshot) {
                             snapshot.forEach(function(childSnapshot) {
                                  //remove each child
                                  database.ref().child(childSnapshot.key).remove();                                 
                     });
                });
        }
        
    });


    //Executes when the 'Favorites' button is clicked, shows the list of favoreted recipes
    //To-Do --- need to handle what happens when the ajax response contains fewer than 4 pages of items
    $("#favouritesButton").click(function(event){
        event.preventDefault();              
        
        //empty the page firt
        $( ".container" ).empty();                   

        //console.log(favouriteRecipes);

        //Add the recipe cards one by one
        var recipes = favouriteRecipes;
        var columnsCount = 0;
        var rowCount = 0;
        var rowID = 1;
        var newRow = $("<div>");
        newRow.addClass( "row" );
        newRow.attr("id", "row_" + rowID);
        $(".container").append(newRow);

        for(var i = 0; i < recipes.length ; i++){                                 

           var imageURL = recipes[i].ImageURL;
           var recipeLabel = recipes[i].RecipeName;
           var recipeURL = recipes[i].RecipeURL;
           var favoriteIcon = "assets/images/favourite_icon.png";           
           
           //3 cards per row
            if(columnsCount == 3)
            {                              
               rowID ++;
               newRow = $("<div>");
               newRow.addClass( "row" );
               newRow.attr("id", "row_" + rowID);           

               newRow.append("<a href=\"" + recipeURL + "\" target = \"_blank\"><div class=\"col-md-4\"> <div class=\"card\" style=\"width: 18rem;\"> <img class=\"card-img-top\" src=\"" +
               imageURL + "\" alt=\"Card image cap\"> <div class=\"card-body\"> <p class=\"card-text\">" +
               recipeLabel + "<img class=\"favourite\" src=\"" + favoriteIcon + "\"></div></div></div></a>");
                 
               $(".container").append(newRow);
               
               columnsCount = 1
            }
            else
            {
                columnsCount ++;              
                
                newRow.append("<a href=\"" + recipeURL + "\" target = \"_blank\"><div class=\"col-md-4\"> <div class=\"card\" style=\"width: 18rem;\"> <img class=\"card-img-top\" src=\"" +
                imageURL + "\" alt=\"Card image cap\"> <div class=\"card-body\"> <p class=\"card-text\">" +
                recipeLabel + "<img class=\"favourite\" src=\"" + favoriteIcon + "\"></div></div></div></a>"); 
               
            }
        }
      
    });

  
    //Whenever a favorite is added/removed
    database.ref().on("value", function(snapshot, prevChildKey) {

        favoriteRecipeURLs = [];
        favouriteRecipes = [];
        var numChildren =  snapshot.numChildren()

        //Update UI with the number of favorites
        $("#favouritesButton").text(`Favorites ( ${numChildren} )`)        
         
        //Update the favorite array variables 
        snapshot.forEach(function(childSnapshot) {
            var childData = childSnapshot.val();           
            favoriteRecipeURLs.push(childData.RecipeURL);
            favouriteRecipes.push(childData);           
          });
      });       

    
    //Methos to get the recipes by ajax call
    function GetRecipe() {
        var search = searchTerms;
        var appid = "897772a2";
        var appkey = "c193011b1550064d6ebf4a7adb2ac3e8";
        var queryURL = "https://api.edamam.com/search?q="+search+"&from=" + from + "&to=" + to + "&app_id="+appid+"&app_key="+appkey;
        $.ajax({
            url: queryURL,
            method: "GET",                
          })
        .then(function(response) {
          
        //Empty the page first    
        $( ".container" ).empty();

        var recipes = response.hits;
        var columnsCount = 0;
        var rowCount = 0;
        var rowID = 1;
        var newRow = $("<div>");
        newRow.addClass( "row" );
        newRow.attr("id", "row_" + rowID);
        $(".container").append(newRow);

        //Add cards one by one
        for(var i = 0; i < recipes.length ; i++){                                 

            var imageURL = response.hits[i].recipe.image;
            var recipeLabel = response.hits[i].recipe.label;
            var recipeURL = response.hits[i].recipe.shareAs;
            var ingredients = response.hits[i].recipe.ingredientLines;
            var favoriteIcon = "assets/images/favourite_iconMain.jpg";
            
            //If the item is already favorited display the correct favorite icon
            if(favoriteRecipeURLs.includes(recipeURL)){
                
                favoriteIcon = "assets/images/favourite_icon.png";
                console.log(recipeURL);
            }

            //3 cards per row
            if(columnsCount == 3)
            {                               
               rowID ++;
               newRow = $("<div>");
               newRow.addClass( "row" );
               newRow.attr("id", "row_" + rowID);

               newRow.append("<a href=\"" + recipeURL + "\" target = \"_blank\"><div class=\"col-md-4\"> <div class=\"card\" style=\"width: 18rem;\"> <img class=\"card-img-top\" src=\"" +
               imageURL + "\" alt=\"Card image cap\"> <div class=\"card-body\"> <p class=\"card-text\">" +
               recipeLabel + "<img class=\"favourite\" src=\"" + favoriteIcon + "\"></div></div></div></a>");
                 
               $(".container").append(newRow);
               
               columnsCount = 1
            }
            else
            {
                columnsCount ++;

                newRow.append("<a href=\"" + recipeURL + "\" target = \"_blank\"><div class=\"col-md-4\"> <div class=\"card\" style=\"width: 18rem;\"> <img class=\"card-img-top\" src=\"" +
                imageURL + "\" alt=\"Card image cap\"> <div class=\"card-body\"> <p class=\"card-text\">" +
                recipeLabel + "<img class=\"favourite\" src=\"" + favoriteIcon + "\"></div></div></div></a>");                
            }            
        }

        });
     }     
     GetRecipe();    

});