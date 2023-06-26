function confirmarLasagna(){
    let precio = 20;
    let cant = document.getElementById("cant_La");
    let total = precio*cant.value;
    alert("Tu pedido es de "+cant.value+" Lasagna "+"el total a pagar es "+total+"$");
}

function confirmarPasta(){
    let precio = 15;
    let cant = document.getElementById("cant_Sp");
    let total = precio*cant.value;
    alert("Tu pedido es de "+cant.value+" Spaghetti "+"el total a pagar es "+total+"$");
}

function confirmarLimonada(){
    let precio = 3;
    let cant = document.getElementById("cant_Li");
    let total = precio*cant.value;
    alert("Tu pedido es de "+cant.value+" Limonada "+"el total a pagar es "+total+"$");
}

function confirmarPastel(){
    let precio = 10;
    let cant = document.getElementById("cant_Ch");
    let total = precio*cant.value;
    alert("Tu pedido es de "+cant.value+" Cheesecake "+"el total a pagar es "+total+"$");
}