// Tennis Products
var products = [
  { name: 'Tennis Racket' , price: 120.95, description: "This is a tennis racquet used by professionals.", image: 'images/Thumb_Item_1.png', largeImage: 'images/Large_Item_1.png' },
  { name: 'Wilson Pro Staff', price: 199.00, description: "Thie is Roger Federer's racket of choice, you can't go wrong with that!", image: 'images/Thumb_Item_2.png', largeImage: 'images/Large_Item_2.png' },
  { name: 'Penn Tennis Ball Champ 3pk', price: 2.04, description: "A 3 pack of tennis balls.", image: 'images/Thumb_Item_3.png', largeImage: 'images/Large_Item_3.png' },
  { name: 'NikeCourt Premier RF Emoji Head', price: 35.00, description: "Emoji shirt worn by Roger Federer.", image: 'images/Thumb_Item_4.png', largeImage: 'images/Large_Item_4.png' },
  { name: 'Nike Vapor Court', price: 49.95, description: "Tennis sneakers for all-court play.", image: 'images/Thumb_Item_1.jpeg', largeImage: 'images/Large_Item_1.png' },
  { name: 'Head Tour Team Tennis Bag', price: 39.95, description: "Hold your new rackets in this extra large tennis bag.", image: 'images/Thumb_Image_5.png', largeImage: 'images/Large_Image_5.png' },
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
    img.setAttribute('src', matched.image)
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


var myCart = [];
// Create Individual Product Page 
function productPage() {
  var theDisplay = document.createElement('div');
  theDisplay.setAttribute('class', 'panel-body')

  var titleInfo = document.createElement('div');
  titleInfo.setAttribute('class', 'h3');
  titleInfo.textContent = theProducts[0].name;

  var priceInfo = document.createElement('div');
  priceInfo.setAttribute('class', 'h4');
  priceInfo.setAttribute('id', 'price')
  priceInfo.textContent = "$" + theProducts[0].price

  var productImg = document.createElement('img');
  //productImg.src = "images/BabolatLarge.png";
  productImg.setAttribute('src', theProducts[0].largeImage);

  var theButton = document.createElement('div');
  theButton.setAttribute('class', 'btn btn-success');
  theButton.setAttribute('id', 'thelistener')
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

  // Add to cart function
  function addToCart() {
    //var myCart = [];
    theButton.addEventListener('click', function(){
      //console.log(theProducts[0].name + " $" + theProducts[0].price);
      myCart.push(theProducts[0].name + " $" +  theProducts[0].price);
      console.log(myCart[0]);
      createCart();
    })
  }
  addToCart();
}

var newContainer = document.getElementById('nav');
var cartIcon = document.createElement('img');

function createCart(){
  cartIcon.setAttribute('src', 'images/MyCart.png');
  cartIcon.setAttribute('id', 'littlecart');
  newContainer.appendChild(cartIcon);
}

cartIcon.addEventListener('click', function(){
  clear(document.getElementById('products'));
  myCartPage();
})

// View My Cart Page, Not Done
function myCartPage(){
var theCart = document.createElement('div');
var theHeader = document.createElement('h2');
theHeader.textContent = "My Cart";
theCart.textContent = myCart[0];
productInfo.appendChild(theHeader);
productInfo.appendChild(theCart);
}




/** Search TODO:
Add partial matches functionality
Clear page when button is clicked again
**/

/** Add to Cart TODO:
Add 'View Product' button to product thumbnails. DONE
Clear content from page when button is clicked. DONE
Load product page. DONE.
Create 'Add to Cart' function that pushes product name & price to mycart array. DONE
**/

/** Checkout TODO:
Display Product Image, Price & Info
Show subtotal
Display 'Checkout' button
Allow user to fill out form and complete purhcase
Show message 'Thank you for your order'
**/
