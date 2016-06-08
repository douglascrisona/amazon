// Tennis Products
var products = [
  {id: 1, name: 'Tennis Racket' , price: 120.95, description: "This is a tennis racquet used by professionals.", image: 'images/Thumb_Item_1.png', largeImage: 'images/Large_Item_1.png', reviews: ['test review'] },
  {id: 2, name: 'Wilson Pro Staff', price: 199.00, description: "Thie is Roger Federer's racket of choice, you can't go wrong with that!", image: 'images/Thumb_Item_2.png', largeImage: 'images/Large_Item_2.png', reviews: [] },
  {id: 3, name: 'Penn Tennis Ball Champ 3pk', price: 2.04, description: "A 3 pack of tennis balls.", image: 'images/Thumb_Item_3.png', largeImage: 'images/Large_Item_3.png', reviews: [] },
  {id: 4, name: 'NikeCourt Premier RF Emoji Head', price: 35.00, description: "Emoji shirt worn by Roger Federer.", image: 'images/Thumb_Item_4.png', largeImage: 'images/Large_Item_4.png', reviews: [] },
  {id: 5, name: 'Nike Vapor Court', price: 49.95, description: "Tennis sneakers for all-court play.", image: 'images/Thumb_Image_5.png', largeImage: 'images/Large_Image_5.png', reviews: [] },
  {id: 6, name: 'Head Tour Team Tennis Bag', price: 39.95, description: "Hold your new rackets in this extra large tennis bag.", image: 'images/Thumb_Image_5.png', largeImage: 'images/Large_Image_5.png', reviews: [] },
]

var cart = [];
// Matches the search term with an object property string name
// If equal, append results to the page
function searchMatch(searchTerm) {
  var suggestions = [];

  for(var i = 0; i < products.length; i++) {
    if(searchTerm.toLowerCase() === products[i].name.toLowerCase()) {
      suggestions.push(products[i]);
    }
  }

  return suggestions;
};

function createItem(item) {
  if(item) {
    var productDisplay = document.createElement('div');
    productDisplay.className = 'col-xs-3 col-offset-md-2 text-center'

    productDisplay.textContent = item.name + " $" + item.price;

    var img = document.createElement('img');
    img.setAttribute('src', item.image)
    productDisplay.appendChild(img);

    var firstButton = document.createElement('button');
    firstButton.setAttribute('class', 'btn btn-success');
    firstButton.setAttribute('id', 'firstbutton');
    firstButton.setAttribute('data-id', item.id);
    firstButton.textContent = "View Product"
    productDisplay.appendChild(firstButton);
  }

  return productDisplay;
}

// Clears page when area is clicked
function clear(area) {
  while(area.firstChild) {
    area.removeChild(area.firstChild);
  }
}

// Search Functionality & Displaying Products
var searchButton = document.getElementById('clickSearch');
searchButton.addEventListener('click', function() {
  var term = document.getElementById('term');
  var matched = searchMatch(term.value);

  var product = createItem(matched[0]);

  var button = product.getElementsByTagName('button')[0];
  button.addEventListener('click', function(e){
    button = e.target;
    if( button.id = "firstbutton" ) {
      clear(showProduct);
    }
  });

  var showProduct = document.getElementById('show');
  showProduct.appendChild(product);
});

// GOHERE
// Adds product page for individual product selected from search results
var productInfo = document.getElementById('products');
productInfo.addEventListener('click', function(theEvent){
  var index = theEvent.target.getAttribute('data-id');
  for (var i = 0; i < products.length; i++) {
    if (products[i].id == index) {
      var page = productPage(products[i]);
      var showSingleProduct = document.getElementById('show');
      showSingleProduct.appendChild(page);
      //console.log(products[i].name);
      //products[i].reviews.push("testing");
      //console.log(products[i].reviews)
      //console.log(products[i].id)
      function reviewPage(productInfo) {
        //console.log(productInfo)
      }
      reviewPage(products[i].name)





    }
  }
});
//REVIEWS ****************************************************
var theReviewItem = document.getElementById('show');
theReviewItem.addEventListener('click', function(theEvent){
  var index = theEvent.target.getAttribute('data-id');
  for(var i = 0; i < products.length; i++){
    if(products[i].id == index) {
      console.log(products[i].price)
    }
  }
});






// Add the item to the cart when the button is clicked.
var theProducts = document.getElementById('products');
theProducts.addEventListener('click', function(theEvent) {
  if (theEvent.target.getAttribute('id') == 'secondbutton') {
    var button = document.getElementById('secondbutton');
    for (var i = 0; i < products.length; i++) {
      if (products[i].id == button.getAttribute('data-id')) {
        addToCart(products[i]);
      }
    }
  }
});

// Add an item to the cart and display the cart icon.
function addToCart(product) {
  var cartNav = document.getElementById('nav');
  cart.push(product);

  // If there is no icon, make one.
  if (document.getElementsByClassName('cart-icon').length == 0) {
    var cartIcon = document.createElement('img');
    cartIcon.setAttribute('class', 'cart-icon');
    cartIcon.setAttribute('src', 'images/MyCart.png');
    cartIcon.setAttribute('id', 'littlecart');
    cartNav.appendChild(cartIcon);

    var navbar = document.getElementsByClassName('navbar')[0];
    navbar.appendChild(cartIcon);
  }

  // Add an event listener for clicks and show cart.
  cartIcon.addEventListener('click', function() {
    clear(document.getElementById('products'));
    myCartPage(cart);
  })
}

// Create Individual Product Page
function productPage(product) {
  var theDisplay = document.createElement('div');
  theDisplay.setAttribute('class', 'panel-body')

  var titleInfo = document.createElement('div');
  titleInfo.setAttribute('class', 'h3');
  titleInfo.textContent = product.name;

  //console.log(product.reviews)
  submitReview(product);

  var reviewLink = document.createElement('h6');
  reviewLink.setAttribute('id', 'review-link')
  reviewLink.textContent = "Write a review"
  reviewLinkAction();

  var priceInfo = document.createElement('div');
  priceInfo.setAttribute('class', 'h4');
  priceInfo.setAttribute('id', 'price')
  priceInfo.textContent = "$" + product.price

  var productImg = document.createElement('img');
  //productImg.src = "images/BabolatLarge.png";
  productImg.setAttribute('src', product.largeImage);


  var theButton = document.createElement('div');
  theButton.setAttribute('class', 'btn btn-success');
  theButton.setAttribute('id', 'secondbutton');
  theButton.setAttribute('data-id', product.id);
  theButton.textContent = "Add to Cart"

  var description = document.createElement('p');
  description.setAttribute('class', 'panel-body');
  description.textContent = product.description;

  // document.body.appendChild(theDisplay);
  theDisplay.appendChild(titleInfo);
  theDisplay.appendChild(reviewLink);
  theDisplay.appendChild(productImg);
  theDisplay.appendChild(priceInfo);
  theDisplay.appendChild(description);
  theDisplay.appendChild(theButton);
  //theDisplay.appendChild(priceInfo);

  return theDisplay;
}

// cartIcon.addEventListener('click', function(){
//   clear(document.getElementById('products'));
//   myCartPage();
// })

//var theGrandTotal = 0;
//for(var i = 0; i < cart.length; i++) {
//  theGrandTotal += cart[i].price  ;
//}
// displayTotal(theGrandTotal);

//function displayTotal(allItems) {
//  alert("testing total")
//}

// View My Cart Page, Not Done
function myCartPage(itemsInCart){
  var products = document.getElementById('products');

  var cartPage = document.createElement('div');
  cartPage.setAttribute('class', 'panel panel-default');
  products.appendChild(cartPage);

  var productHeader = document.createElement('div');
  productHeader.setAttribute('class', 'panel-heading');
  productHeader.textContent = "My Cart";

  var theProducts = document.createElement('div');
  theProducts.setAttribute('class', 'panel-body');

  var theButton = document.createElement('button');
  theButton.setAttribute('class', 'btn btn-success pull-right');
  theButton.setAttribute('id', 'checkout');
  theButton.textContent = "Checkout Now";

  // Calculates and displays grand total--Is this the right placement?
  var theGrandTotal = 0;
  for(var i = 0; i < cart.length; i++) {
    theGrandTotal += cart[i].price  ;
  }
  var newTotal = document.createElement('h3');
  newTotal.textContent = "Your Grand Total is: " + theGrandTotal;

  cartPage.appendChild(productHeader);
  cartPage.appendChild(theProducts);
  cartPage.appendChild(theButton);
  cartPage.appendChild(newTotal);

  for (var i = 0; i < itemsInCart.length; i++) {
    theProducts.appendChild(theCartItem(itemsInCart[i]));
  }

  function theCartItem(anItem) {
    var container = document.createElement('div');
    container.className = "panel panel-default";

    var productText = document.createElement('div');
    productText.setAttribute('class', 'h3 panel-body')
    productText.textContent = anItem.name + " " + anItem.price;

    var productPrice = document.createElement('div');
    productPrice.setAttribute('class', 'panel-footer');
    productPrice.textContent = "Checkout Below";

    container.appendChild(productText);
    container.appendChild(productPrice);

    return container;
  }

  theButton.addEventListener('click', function(e){
    button = e.target;
    if(button.id == "checkout") {
      checkItOut();
      //grandTotal();
      theButton.disabled = true;
    }
  });

  products.appendChild(cartPage);
}
// Displays Checkout form on MyCart page
function checkItOut(){
  var newForm = document.getElementsByClassName('hide-form')[0];
  newForm.classList.remove("hide-form");
  newForm.classList.add("second")
}

/**
// Shows total in checkout form
function grandTotal() {
  var location = document.getElementById('total');
  var price = document.createElement('h3');
  //price.textContent = "Your Grand Total is " + "$" + myCart[1];
  location.appendChild(price)
}
**/

/** WRITING A REVIEW **/
//Create function that adds eventlistener when clicked, clears content and loads new content (toggle classes)
/**
function theReviewLink(theProduct) {
  var theLink = document.getElementsByClassName('show-product')[0];
  theLink.addEventListener('click', function(e){
    clicker = e.target;
    if(clicker.id == "review-link"){
      var reviewClick = document.getElementsByClassName('show-product')[0];
      reviewClick.classList.remove('show-product')
      reviewClick.classList.add('review-remove-product');
    }
  });
}
**/

function reviewLinkAction() {
  var theLink = document.getElementsByClassName('container')[0];
  theLink.addEventListener('click', function(e){
    clicker = e.target;
    if(clicker.id == "review-link"){
      var reviewClick = document.getElementsByClassName('hide-review')[0];
      reviewClick.classList.remove('hide-review')
      reviewClick.classList.add('show-form');
    }
  });
}

/**
var reviewButton = document.getElementById('review-button');
reviewButton.addEventListener('click', function() {


  //for(var i = 0; i < products.length; i++){

//  }

  var review = document.getElementById('review');
  var theReview = review.value;
  products[i].reviews.push(theReview)
});
**/


// Submits review from product page (function called in productpage() function)
function submitReview(product) {
  var reviewButton = document.getElementById('review-button');
  reviewButton.addEventListener('click', function() {
    var review = document.getElementById('review');
    product.reviews.push(review.value)
    console.log(product.reviews)
})
}







/**
var reviewLink = document.createElement('h6');
reviewLink.setAttribute('id', 'review-link')
reviewLink.textContent = "Write a review"

function writeReview() {
document.querySelector('review-link').addEventListener('click', function(e){
clicker = e.target;
if(clicker.id =="show-product"){
var reviewClick = document.getElementsByClassName('show-product');
reviewClick.classList.remove('show-product')
reviewClick.classList.add('review-remove-product');
}
});
}
**/

//  writeReview();








//get a parent element
//add event listener to parent element



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
Display Product Name, Price & Info
Show subtotal
Display 'Checkout' button
Allow user to fill out form and complete purhcase
Show message 'Thank you for your order'
**/

/** TODO: STORING ORDER DETAILS FROM CHECKOUT FORM
Push form values into a 'order history' array
Access each item and display in 'my order history' page
**/

/** Write a review TODO:
Establish unique identifier for selected product
Create 'write a review' link on individual product page
Create function that adds eventlistener when clicked, clears content and loads new content (toggle classes)
Load text field below product image
Save new review to an array reviews[]
create colum on right side of reviews
**/
