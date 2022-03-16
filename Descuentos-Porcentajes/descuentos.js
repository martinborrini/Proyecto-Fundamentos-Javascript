// Funcion calculo descuento SIN cupon

function calcularDescuento(precio,descuento){
    var operacion = (precio * (100 - descuento) / 100);
    if(operacion) {
        return (`El precio con descuento es: $ ${operacion}.`);
    }
    else {
        return (`Por favor: Ingrese un valor antes de calcular el descuento.`);
    }
}

// Funcion calculo descuento CON cupon

function calcularDescuentoConCupon(precio,descuento,cupon){
    var operacion = (precio * (100 - descuento - cupon) / 100) ;
    if(operacion) {
        return (`El precio con cupon es: $ ${operacion}.`);
    }
    else {
        return (`Por favor: Ingrese un cupon valido.`);
    }
}

// Funcion para ejecutar el descuento en html SIN cupon
 
function onClickButtonPriceDiscount() {
    const inputPrice = document.getElementById("InputPrice");
    const priceValue = inputPrice.value;

    const inputDiscount = document.getElementById("InputDiscount");
    const discountValue = inputDiscount.value;

    const precioConDescuento = calcularDescuento(priceValue, discountValue);

    const resultadoPrecio = document.getElementById("ResultPrice");
    ResultPrice.innerText = "El precio con descuento es: $" + precioConDescuento;
}

// Funcion para ejecutar el descuento en html CON cupon

const coupons = {
    cupon1: 10,
    cupon2: 20,
    cupon3: 30,
};

function onClickButtonPriceDiscountAndCoupon() {
    const inputPrice = document.getElementById("InputPrice");
    const priceValue = inputPrice.value;

    const inputDiscount = document.getElementById("InputDiscount");
    const discountValue = inputDiscount.value;

    const cuponResultado = descuentoDelCupon();

    function descuentoDelCupon() {
        const nombreCupon = document.getElementById('InputCoupon').value;
        const cuponDefault = 0;
        const cuponDescuento = coupons[nombreCupon] || cuponDefault;
        return cuponDescuento;
     } 

    const precioConDescuentoCupon = calcularDescuentoConCupon(priceValue, discountValue, cuponResultado);

    const resultadoPrecioConCupon = document.getElementById("ResultPriceCoupon");
    ResultPrice.innerText = precioConDescuentoCupon;
}