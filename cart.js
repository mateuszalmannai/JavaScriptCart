// cart class is passed a reference to the divs that
// items are written into
function Cart(divNumItems, divItems) {
  // initialize cart level variables
  var cart = [];
  var cartTotal = 0;
  var cartCount = 0;

  // reference variables passed into constructor
  var ni = divNumItems;
  var items = divItems;

  // single public method, called when user clicks
  // add-to-cart button
  this.addToCart = function (product){
    // check to see if cart is empty
    if(cart.length == 0){
      addNewProduct(product);
    } else {
      // see if particular product is cart
      if(findProductInCart(product) == null){
        // product is not in the cart
        addNewProduct(product);
      }
    }

    computeCart();
    updateCartDisplay();
    console.log(cart);
    console.log(cart.length);
  }

  function updateCartDisplay(){
    // set display of number-of-items div
    ni.innerHTML = "You have " + cartCount + " items in your cart";
    // and items div
    items.innerHTML = ""; // clear the cart view
    for(var i = 0; i < cart.length; i++){
      var productLine = cart[i].quantity + " " + cart[i].name + "<br>";
      items.innerHTML += productLine;
    }
    items.innerHTML += "Your Cart Total is: $" + cartTotal;
  }

  // compute total price and number of items
  function computeCart(){
    cartTotal = 0;
    cartCount = 0;
    // loop over all items in cart
    for(var i = 0; i < cart.length; i++){
      var itemTotal = cart[i].price * cart[i].quantity;
      cartTotal += itemTotal;
      cartCount += cart[i].quantity;
    }
    // cater for floating-point issues
    cartTotal = Math.round(cartTotal*100)/100;
    console.log(cartTotal);
    console.log(cartCount);
  }

  function addNewProduct(product){
    // initialize product quantity
    product.quantity = 1;
    cart.push(product);
  }

  // loop over items in the cart to see if the product is there
  // if product is in the cart return the product
  // otherwise return null
  function findProductInCart( product ){

    for(var i= 0; i < cart.length; i++){
      if (cart[i].name == product.name){
        // product has been found, increment its quantity
        product.quantity++;
        return product;
      }
    }
  }

}