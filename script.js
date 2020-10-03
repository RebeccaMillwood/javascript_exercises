// window.onload = function() {

// }

function increment(){
    var value = parseInt(document.getElementById("number").value, 10);
    value = isNaN(value) ? 0 : value;
    value++;
    document.getElementById("number").value = value;
}

function decrement(){
    var value = parseInt(document.getElementById("number").value, 10);
    value = isNaN(value) ? 0 : value;
    value--;
    document.getElementById("number").value = value;
}


function cart(cupcake){
    // var value = parseInt(document.getElementById("cart").value, 10);
    // value = isNaN(value) ? 0 : value;
    // value++;
    // document.getElementById("cart").value = value;
    var value = document.getElementById("cart").value;
    value = value + "\n" + cupcake;
    document.getElementById("cart").value = value;
    document.getElementById("cart").rows++;
}
