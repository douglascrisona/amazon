// Tennis Products
var products = [
  { name: 'Babolat Aeropro' , price: 120.95},
  { name: 'Wilson Pro Staff', price: 199.00},
  { name: 'Penn Tennis Ball Champ 3pk', price: 2.04},
  { name: 'NikeCourt Premier RF Emoji Head', price: 35.00},
  { name: 'Nike Vapor Court', price: 49.95},
  { name: 'Head Tour Team Tennis Bag', price: 39.95},
]

// Matches the search term with an object property string name
// If equal, append results to the page

function searchMatch(searchTerm) {
  for(var i = 0; i < products.length; i++) {
    if(searchTerm === products[i].name) {
      return products[i];
    }
  }
};

function partialMatch(term) {
  var suggestions = [];
  products.forEach(function(product){
    if(product.name.indexOf(term) !== -1) {
      suggestions.push(product);
    }
  });
  if(suggestions) {
    return suggestions;
  } else {
    return false;
  }
}

// Add 'Add to Cart' button on product
function addButton() {
  var button = document.createElement('button')
  button.className = "btn"
  document.body.appendChild(button);
  var text = document.createTextNode("Add to Cart");
  button.appendChild(text);
}

// Create Cart
 function addToCart() {
  var myCart = [];
  var theButton = document.getElementsByClassName('btn')[0];
  theButton.addEventListener('click', function(){
    console.log('test');
    // myCart.push(matched.price);
  });
}
addToCart();

var searchButton = document.getElementById('clickSearch');
searchButton.addEventListener('click', function() {
  var term = document.getElementById('term');
  var matched = searchMatch(term.value);

  if(matched) {
    var productDisplay = document.createElement('div');
    productDisplay.className = 'col-xs-3 col-offset-md-2 text-center'

    var position = document.getElementById('products');
    productDisplay.textContent = matched.name + " $" + matched.price;

    var img = document.createElement('img');
    img.src = "images/BabolatImage.jpeg"
    productDisplay.appendChild(img);

    addButton();
  }
  /** if(!matched) {
    console.log(partialMatch(term.value));
  }
  **/
  else {
    productDisplay.textContent = "Sorry, we could not locate the item: " + term.value;
  }
    position.appendChild(productDisplay);
});


/** Search TODO:
Add partial matches functionality
Clear page when button is clicked again
**/

/** Add to Cart TODO:
Add 'Add to Cart' button to product thumbnails
Create 'Add to Car' function that pushes product name & price to mycart array
**/
