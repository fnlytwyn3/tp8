

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

window.onload = function()
{
  document.querySelector("#r1").onclick = function()
  {
BestChocolateChipCookies.displayRecipe();
}
  
  loadFileInto("ingredients.html" , "#ingredients ul");
  loadFileInto("equipment.html" , "#equipment ul");
  loadFileInto("directions.html" , "#directions ol");
}
function myFunction() 
      {
     document.getElementById("H1").style.color = "#DEB887";

      
      }
 
function Recipe(recipeName, contributorName, imageURL, ingredientsFilename, equipmentFilename, directionsFilename)
{
  this.recipe = recipeName;
  this.contributor = contributorName;
  this.img = imageURL;
  this.ingredients = ingredientsFilename;
  this.equipment = equipmentFilename;
  this.directions = directionsFilename;
  
  this.displayRecipe = function()
  {
    document.querySelector("#Batter h1").innerHTML = this.recipe;
    document.querySelector("#contributor").innerHTML = this.contributor;
    document.queery
    
    LoadFileInto(this.ingredients, "#ingredients ul");
    LoadFileInto(this.equipment, "#equipment ul");
    LoadFileInto(this.directions, "#directions ol");
  }
  
}

BestChocolateChipCookies = new Recipe("Best Chocolate Chip Cookies", "Fallon", "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=464&q=80", "ingredients.html", "equipment.html" , "directions.html");

