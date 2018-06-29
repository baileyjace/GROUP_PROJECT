var config = {
    apiKey: "AIzaSyB7p3GymKOtuclgt-wKoWudxNcGaIQR7pQ",
    authDomain: "wtfshouldieat.firebaseapp.com",
    databaseURL: "https://wtfshouldieat.firebaseio.com",
    projectId: "wtfshouldieat",
    storageBucket: "wtfshouldieat.appspot.com",
    messagingSenderId: "984419410414"
};
firebase.initializeApp(config);

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
}

$("#findRecipe").on("click", function(event) {
    event.preventDefault();
    getRecipe();
})

$("#findRecipeIngredients").on("click", function() {
    
})