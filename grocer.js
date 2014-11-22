(function(){
  var milk = {name:"Milk",price:1.99};
  var cheese = {name:"Swiss Cheese", price:4.95};
  var yogurt = {name:"Yogurt", price:1.19};

  function pageReady(){
    var cart = new Cart(document.getElementById("numItems"), document.getElementById("items"));

    var btn1 = document.getElementById("milkButton");
    var btn2 = document.getElementById("cheeseButton");
    var btn3 = document.getElementById("yogurtButton");

    function addProduct(evt){
       if(evt.target === btn1){
         // user clicked milk
         cart.addToCart(milk);
       } else if (evt.target === btn2){
         // user clicked cheese
         cart.addToCart(cheese);
       } else if (evt.target === btn3){
         // user clicked yogurt
         cart.addToCart(yogurt);
       }
    }

    btn1.addEventListener("click",addProduct);
    btn2.addEventListener("click",addProduct);
    btn3.addEventListener("click",addProduct);

  }



  window.addEventListener("load",pageReady);
})();