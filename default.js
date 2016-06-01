// Tennis Products
var products = [
  { name: 'Tennis Racket' , price: 120.95, description: "This is a tennis racquet used by professionals", image: 'images/ProductIcon.png'},
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
// Creates a cart
/**
 function addToCart() {
  var myCart = [];
  var theButton = document.getElementsByTagName('button')[0];
  theButton.addEventListener('click', function(){
    // console.log(searchMatch(term.value));
    myCart.push(searchMatch(term.value));
    console.log("Your subtotal is" + " " + myCart[0].price);
  });
}
addToCart();
**/

// Search Functionality
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

    var theButton = document.createElement('button');
    theButton.textContent = "View Product"
    theButton.setAttribute('class', 'btn btn-success');
    theButton.setAttribute('id', 'viewer');
    productDisplay.appendChild(theButton);
  }
  /** if(!matched) {
    console.log(partialMatch(term.value));
  }
  **/
  // else {
  // productDisplay.textContent = "Sorry, we could not locate the item: " + term.value;
  //}
  position.appendChild(productDisplay);
});

// Clears page when 'View Product' is clicked
function clear(area) {
  while(area.firstChild) {
    area.removeChild(area.firstChild);
  }
}

var productClear = document.getElementById('products');
productClear.addEventListener('click', function(theEvent){
  //var theButton = theEvent.target.getAttribute('viewer');
  //console.log(theEvent.target);
  clear(document.getElementById('products'));
});

// Adds product page for individual product selected from search results
var theProducts = [];
var productInfo = document.getElementById('products');
productInfo.addEventListener('click', function(){
  theProducts.push(searchMatch(term.value));
  productPage();
});

function productPage() {
  var theDisplay = document.createElement('div');
  theDisplay.setAttribute('class', 'panel-body')

  var titleInfo = document.createElement('div');
  titleInfo.setAttribute('class', 'h3');
  titleInfo.textContent = theProducts[0].name;

  var priceInfo = document.createElement('div');
  priceInfo.setAttribute('class', 'h4');
  priceInfo.textContent = theProducts[0].price

  var productImg = document.createElement('img');
  //productImg.src = "images/BabolatLarge.png";
  productImg.setAttribute('src', theProducts[0].image);

  var theButton = document.createElement('div');
  theButton.setAttribute('class', 'btn btn-success');
  theButton.textContent = "Add to Cart"

  var description = document.createElement('p');
  description.setAttribute('class', 'panel-body');
  description.textContent = theProducts[0].description;

  // document.body.appendChild(theDisplay);
  theDisplay.appendChild(titleInfo);
  theDisplay.appendChild(productImg);
  theDisplay.appendChild(priceInfo);
  theDisplay.appendChild(description);
  theDisplay.appendChild(theButton);
  //theDisplay.appendChild(priceInfo);
  var container = document.getElementById('products');
  container.appendChild(theDisplay);

}


/** Search TODO:
Add partial matches functionality
Clear page when button is clicked again
**/

/** Add to Cart TODO:
Add 'View Product' button to product thumbnails
Clear content from page when button is clicked
Load product page
Create 'Add to Cart' function that pushes product name & price to mycart array
**/
