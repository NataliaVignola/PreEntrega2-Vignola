/*Función para mostrar mensaje de bienvenida y pedido de nombre de usuario*/
function mensajeBienvenida() {
    alert('¡Bienvenido(a) a Cultura Café!');
    let nombreUsuario = prompt('Ingresa tu nombre de usuario:');
    alert(`¡Hola ${nombreUsuario}! Tu café de especialidad te está esperando.`);
}

/*Se define objeto producto con las propiedades de cada elemento*/
class producto {
    constructor(categoria, nombre, precio) {
        this.categoria = categoria;
        this.nombre = nombre;
        this.precio = precio;
    }
}

const BolsaBrasil = new producto('Pack de café', 'Brasil Crucera', 550)
const BolsaEtiopia = new producto('Pack de café', 'Etiopía Najá', 800)
const BolsaGuatemala = new producto('Pack de café', 'Guatemala GTA', 700)
const SusEveryday = new producto('Suscripción', 'Everyday', 690)
const SusSimple = new producto('Suscripción', 'Simple', 900)
const SusDoble = new producto('Suscripción', 'Doble Shot', 1700)

let stock = [BolsaBrasil, BolsaEtiopia, BolsaGuatemala, SusEveryday, SusSimple, SusDoble]

const carrito = []

/*Función para seleccionar producto por el usuario*/
function obtenerProducto() {
    let codigoProducto = parseInt(prompt('¿Qué producto deseas añadir a tu carrito cafetero?\n1- Pack de café Brasil Crucera\n2- Pack de café Etiopía Najá\n3- Pack de café Guatemala GTA\n4- Suscripción Everyday\n5- Suscripción Simple\n6- Suscripción Doble Shot'));
    switch (codigoProducto) {
        case 1:
            return BolsaBrasil;
        case 2:
            return BolsaEtiopia;
        case 3:
            return BolsaGuatemala;
        case 4:
            return SusEveryday;
        case 5:
            return SusSimple;
        case 6:
            return SusDoble;
        default:
            alert('Por favor ingrese un código de producto válido');
            return null;
    }
}

/*Función para agrega el producto seleccionado por el usuario al carrito de compras*/
function agregarAlCarrito() {
    let producto = obtenerProducto();
    if (producto) {
        carrito.push(producto);
        alert(`${producto.nombre} ha sido añadido a tu carrito cafetero.`);
    }
}

/*Función que muestra al usuario el contenido actual del carrito de compras*/
function mostrarContenidoCarrito() {
    let contenidoCarrito = 'Productos en tu carrito:\n';
    carrito.forEach((el) => {
        contenidoCarrito += `${el.categoria}  ${el.nombre} - $ ${el.precio}\n`;
    });
    alert(contenidoCarrito);
}

/*Función para calcular el precio total de los productos en el carrito de compras*/
function calcularPrecioTotal() {
    let precioTotal = carrito.reduce((acumulador, producto) => {
        return acumulador + producto.precio;
    }, 0);
    return precioTotal;
}

/*Función que muestra al usuario el precio total de su compra*/
function mostrarTotalCompra() {
    let montoTotal = calcularPrecioTotal();
    alert('Total de tu compra: \n$' + montoTotal);
}

/*Función que maneja el proceso completo de compra*/
function compraCafe() {
    let seguirComprando = parseInt(prompt('¿Quieres comenzar tu compra? \n1: Si \n2: No'))
    if (seguirComprando === 1) {
        do {
            agregarAlCarrito();
            seguirComprando = parseInt(prompt('¿Quieres seguir comprando? \n1: Si \n2: No'))
        } while (seguirComprando === 1)
        mostrarContenidoCarrito();
        mostrarTotalCompra();
        alert('¡Nos vemos pronto por más cafecito!')
    } else if (seguirComprando === 2) {
        alert('Esperamos verte pronto por Cultura Café')
    }
}

/*Espera a que el .html se cargue completamente antes de ejecutar el código de JavaScript para que el HTML se visualice mientras se ejecuta el .js y no luego de que finaliza su ejecución*/
window.addEventListener('load', function () {
    mensajeBienvenida();
    compraCafe();
})