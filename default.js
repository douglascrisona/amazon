// Tennis Products
var products = [
  { name: 'Babolat Aeropro' , price: 120.95},
  { name: 'Wilson Pro Statt 97', price: 199.00},
  { name: 'Penn Tennis Ball Champ 3pk', price: 2.04},
  { name: 'NikeCourt Premier RF Emoji Head', price: 35.00},
  { name: 'Nike Vapor Court', price: 49.95},
  { name: 'Head Tour Team Tennis Bag', price: 39.95},
]


// Matches the search term with an object property string name
// If equal, append restuls to the page

function searchMatch(searchTerm) {
  for(var i = 0; i < products.length; i++) {
    if(searchTerm === products[i].name) {
      return products[i];
    }
  }
};

var searchButton = document.getElementById('clickSearch');
searchButton.addEventListener('click', function() {
  var term = document.getElementById('term');
  var matched = searchMatch(term.value);
  var product = document.createElement('h1')
  if(matched) {
    product.textContent = matched.name + " " + matched.price
    // console.log(matched.name + " " + matched.price);
  } else {
    product.textContent = "Sorry, we could locate the item: " + term.value
  }
    document.body.appendChild(product);
});
