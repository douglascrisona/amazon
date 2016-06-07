// Tennis Products
var products = [
  { name: 'Tennis Racket' , price: 120.95, description: "This is a tennis racquet used by professionals.", image: 'images/Thumb_Item_1.png', largeImage: 'images/Large_Item_1.png' },
  { name: 'Wilson Pro Staff', price: 199.00, description: "Thie is Roger Federer's racket of choice, you can't go wrong with that!", image: 'images/Thumb_Item_2.png', largeImage: 'images/Large_Item_2.png' },
  { name: 'Penn Tennis Ball Champ 3pk', price: 2.04, description: "A 3 pack of tennis balls.", image: 'images/Thumb_Item_3.png', largeImage: 'images/Large_Item_3.png' },
  { name: 'NikeCourt Premier RF Emoji Head', price: 35.00, description: "Emoji shirt worn by Roger Federer.", image: 'images/Thumb_Item_4.png', largeImage: 'images/Large_Item_4.png' },
  { name: 'Nike Vapor Court', price: 49.95, description: "Tennis sneakers for all-court play.", image: 'images/Thumb_Image_5.png', largeImage: 'images/Large_Image_5.png' },
  { name: 'Head Tour Team Tennis Bag', price: 39.95, description: "Hold your new rackets in this extra large tennis bag.", image: 'images/Thumb_Image_5.png', largeImage: 'images/Large_Image_5.png' },
]
// Matches the search term with an object property string name
// If equal, append results to the page
function searchMatch(searchTerm) {
  for(var i = 0; i < products.length; i++) {
    if(searchTerm.toLowerCase() === products[i].name.toLowerCase()) {
      return products[i];
    }
  }
};
// Search Functionality & Displaying Products
var searchButton = document.getElementById('clickSearch');
searchButton.addEventListener('click', function() {
  var term = document.getElementById('term');
  var matched = searchMatch(term.value);

  if(matched) {
    var productDisplay = document.createElement('div');
    productDisplay.className = 'col-xs-3 col-offset-md-2 text-center'

    //var position = document.getElementById('products');
    productDisplay.textContent = matched.name + " $" + matched.price;

    var img = document.createElement('img');
    img.setAttribute('src', matched.image)
    productDisplay.appendChild(img);

    var firstButton = document.createElement('button');
    firstButton.setAttribute('class', 'btn btn-success');
    firstButton.setAttribute('id', 'firstbutton');
    firstButton.textContent = "View Product"
    productDisplay.appendChild(firstButton);

    firstButton.addEventListener('click', function(e){
      button = e.target;
      if(button.id = "firstbutton") {
      clear(showProduct);
      }
    });
    var showProduct = document.getElementById('show');
    showProduct.appendChild(productDisplay);
    }
    if(!matched) {
    //console.log(partialMatch(term.value));
    }
});

// Clears page when area is clicked
function clear(area) {
  while(area.firstChild) {
    area.removeChild(area.firstChild);
  }
}
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



  var reviewLink = document.createElement('h6');
  reviewLink.setAttribute('id', 'review-link')
  reviewLink.textContent = "Write a review"
  writeReview();


  var priceInfo = document.createElement('div');
  priceInfo.setAttribute('class', 'h4');
  priceInfo.setAttribute('id', 'price')
  priceInfo.textContent = "$" + theProducts[0].price

  var productImg = document.createElement('img');
  //productImg.src = "images/BabolatLarge.png";
  productImg.setAttribute('src', theProducts[0].largeImage);

  var theButton = document.createElement('div');
  theButton.setAttribute('class', 'btn btn-success');
  theButton.setAttribute('id', 'secondbutton')
  theButton.textContent = "Add to Cart"

  var description = document.createElement('p');
  description.setAttribute('class', 'panel-body');
  description.textContent = theProducts[0].description;

  // document.body.appendChild(theDisplay);
  theDisplay.appendChild(titleInfo);
  theDisplay.appendChild(reviewLink);
  theDisplay.appendChild(productImg);
  theDisplay.appendChild(priceInfo);
  theDisplay.appendChild(description);
  theDisplay.appendChild(theButton);
  //theDisplay.appendChild(priceInfo);
  var showSingleProduct = document.getElementById('show');
  showSingleProduct.appendChild(theDisplay);

  // Add to cart function
  function addToCart() {
    //var myCart = [];
    theButton.addEventListener('click', function(e){
      //console.log(theProducts[0].name + " $" + theProducts[0].price);
      button = e.target;
      if(button.id == "secondbutton"){
      myCart.push(theProducts[0].name);
      myCart.push(theProducts[0].price);
      console.log(myCart[0]);
      createCart();
      clear(showSingleProduct);
      }
    })
  }
  addToCart();
}
// Creates Clickable Cart Icon to view cart
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
  var imageContainer = document.createElement('div');
  imageContainer.setAttribute('class', 'panel panel-default');
  imageContainer.setAttribute('id', 'finalimage')
  productInfo.appendChild(imageContainer);

  var productHeader = document.createElement('div');
  productHeader.setAttribute('class', 'panel-heading');
  productHeader.textContent = "My Cart";

  var theButton = document.createElement('button');
  theButton.setAttribute('class', 'panel-body btn btn-success');
  theButton.setAttribute('id', 'checkout');
  theButton.textContent = "Checkout Now";

  var productText = document.createElement('div');
  productText.setAttribute('class', 'h3 panel-body')
  productText.textContent = myCart[0] + " " + myCart[1];
  console.log(myCart)

  var productPrice = document.createElement('div');
  productPrice.setAttribute('class', 'panel-footer');
  productPrice.textContent = "Checkout Below";

  imageContainer.appendChild(productHeader);
  imageContainer.appendChild(productText);
  imageContainer.appendChild(theButton);
  imageContainer.appendChild(productPrice);

  theButton.addEventListener('click', function(e){
    button = e.target;
    if(button.id == "checkout") {
     checkItOut();
     grandTotal();
     theButton.disabled = true;
    }
  });
}
// Displays Checkout form on MyCart page
function checkItOut(){
var newForm = document.getElementsByClassName('hide-form')[0];
    newForm.classList.remove("hide-form");
    newForm.classList.add("second")
}
// Shows total in checkout form
function grandTotal() {
  var location = document.getElementById('total');
  var price = document.createElement('h3');
  price.textContent = "Your Grand Total is " + "$" + myCart[1];
  location.appendChild(price)
}

/** WRITING A REVIEW **/
//Create function that adds eventlistener when clicked, clears content and loads new content (toggle classes)
function writeReview() {
  var theLink = document.getElementsByClassName('show-product')[0];
  theLink.addEventListener('click', function(e){
    clicker = e.target;
    if(clicker.id == "review-link"){
      var reviewClick = document.getElementsByClassName('show-product')[0];
      reviewClick.classList.remove('show-product')
      reviewClick.classList.add('review-remove-product');
      reviewPage();
    }
  });
}

function reviewPage() {
  var reviewContainer = document.createElement('div');
  reviewContainer.setAttribute('class', 'container row col-md-4')

  var reviewImage = document.createElement('img');
  reviewImage.setAttribute('src', theProducts[0].largeImage);
  reviewImage.setAttribute('class', 'panel-body col-lg-4')

  var reviews = document.createElement('h4');
  reviews.setAttribute('class', 'panel panel-default panel-heading col-lg-4');
  reviews.textContent = "Reviews"

  var reviewTitle = document.createElement('h3');
  reviewTitle.textContent = products[0].name + " Review";

  var reviewInput = document.createElement('textarea');
  reviewInput.setAttribute('class', 'form-control')
  reviewContainer.appendChild(reviewInput)

  document.getElementById('products').appendChild(reviewTitle);
  document.getElementById('products').appendChild(reviewImage);
  document.getElementById('products').appendChild(reviews);
  document.getElementById('products').appendChild(reviewContainer);
  //document.getElementById('products').appendChild(reviewInput);


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
