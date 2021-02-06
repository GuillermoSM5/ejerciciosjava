var cart = [
  {item:'laptop', quantity: 1 }
]

function addItemToCart(cart, item, quantity){
     let newCart = cart.map((element) => {return element});

     newCart.push({item: item, quantity: quantity});

    return newCart;
}

cart = addItemToCart(cart,'phone',2);

console.log(cart);
