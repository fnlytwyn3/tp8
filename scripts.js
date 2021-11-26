
// function to asynchronously fetch file contents from path/URL "fromFile" 
// and insert them in the DOM object found with "whereTo" -- note this
// uses document.querySelector, so use CSS notation on "whereTo"

function loadFileInto(fromFile, whereTo) {

  // 1. creating a new XMLHttpRequest object
  ajax = new XMLHttpRequest();

  // 2. defines the GET/POST method, the source, and the async value of the AJAX object
  ajax.open("GET", fromFile, true);

  // 3. provides code to do something in response to the AJAX request
  ajax.onreadystatechange = function() {

    if ((this.readyState == 4) && (this.status == 200)) { // if .readyState is 4, the process is done; and if .status is 200, there were no HTTP errors

      document.querySelector(whereTo).innerHTML = this.responseText; // insert received output directly into the chosen DOM object

    } else if ((this.readyState == 4) && (this.status != 200)) { // if .readyState is 4, the process is done; and if .status is NOT 200, output the error into the console

      console.log("Error: " + this.responseText);

    }

  } // end ajax.onreadystatechange function

  // 4. let's go -- initiate request and process the responses
  ajax.send();

}

// new Recipe object
function Recipe(recipeName, contributorName, imageURL, ingredientsFilename, equipmentFilename, directionsFilename) {

  this.recipe = recipeName;
  this.contributor = contributorName;
  this.img = imageURL;
  this.ingredients = ingredientsFilename;
  this.equipment = equipmentFilename;
  this.directions = directionsFilename;

  this.displayRecipe = function() {

    document.querySelector("#cookieHeader").innerHTML = this.recipe;
    document.querySelector("#contributor").innerHTML = this.contributor;
    document.querySelector("#cookieHeader").style.backgroundImage = "url(" + this.img + ")";
    
    loadFileInto(this.ingredients, "#ingredients ul");
    loadFileInto(this.equipment, "#equipment ul");
    loadFileInto(this.directions, "#directions ol");
  }

}

BestChocolateChipCookie = new Recipe("Best Chocolate Chip Cookies", 
                        "Fallon Lytwyn", 
                        "cookie.jpg", 
                        "ingredients.html", 
                        "equipment.html", 
                        "directions.html");



 SiggSnickerdoodles = new Recipe("Mrs. Sigg's Snickerdoodles", 
                          "Theo McBurney", 
                          "snick.jpg", 
                          "ingredients2.html", 
                          "equipment2.html", 
                          "directions2.html");


CrumbedChicken = new Recipe ("Lemon Bars", "Cody Osborn", 
                             "lem.jpg",
                            "ingredients3.html",
                            "equipment3.html",
                            "directions3.html");


window.onload = function() {

  document.querySelector("#cookieHeader").classList.add("tp6");

  document.querySelector("#ingredients").onclick = function() {
    document.querySelector("#ingredients ul").classList.toggle("showMe");
  }

  document.querySelector("#equipment").onclick = function() {
    document.querySelector("#equipment ul").classList.toggle("showMe");
  }

  document.querySelector("#directions").onclick = function() {
    document.querySelector("#directions ol").classList.toggle("showMe");
  }

  document.querySelector("#cookieHeader").onclick = function() {
    this.classList.toggle("tp6");
  }

document.querySelector("#footer").innerHTML += "<p>This was not my own recipe.</p>";

document.querySelector("#r1").onclick = function() {
  BestChocolateChipCookie.displayRecipe();
}

document.querySelector("#r2").onclick = function() {
  SiggSnickerdoodles.displayRecipe();
}

document.querySelector("#r3").onclick = function() {
  CrumbedChicken.displayRecipe();
  
}
} // end of window.onload