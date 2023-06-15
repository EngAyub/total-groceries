// Good Luck 💪🏾
function getPrice(grocery){
    let total = 0;

    for(let i=0; i<grocery.length; i++){
        total = total + grocery[i].quantity*grocery[i].price;
    }

    return total;
}



  console.log(getPrice([
    { product: "Milk", quantity: 1, price: 1.50 },
    { product: "Rice", quantity: 1, price: 2.50 },
    
  ]))