const products = new Array();
function addObject(names, price){
    const product = {
        names: names,
        price: price
    }
    products.push(product);
    document.getElementById("length").value = products.length;
}

function calculate(){
    const prices = new Array();
    for (let i = 0; i < products.length; i++) {
        prices[i] = parseInt(products[i].price);
    }

    let min = Math.min(...prices);
    let minindex = prices.indexOf(min);
    let cheapest = String(products[minindex].names);
    let avg = String(average(prices));
    let standdev = String(std(prices));

    document.getElementById("results").innerHTML = "Legolcsóbb termék neve és ára: " + cheapest + " " + String(min) + " Ft. \n Az átlag ár " + avg + " és a szórás " + standdev;
}
function std(array){
    let mean = array.reduce((acc, curr)=>{
      return acc + curr
    }, 0) / array.length;
     
    array = array.map((k)=>{
      return (k - mean) ** 2
    })
     
   let sum = array.reduce((acc, curr)=> acc + curr, 0);
   return (Math.round(Math.sqrt(sum / array.length) * 100) / 100)
}

function average(array){
    let sum = 0;
    for (i = 0; i < array.length; i++) {
        sum += parseInt(array[i]);
    }
    return (Math.round(sum / array.length * 100) / 100)
}