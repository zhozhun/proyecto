// Importar las clases
const Product = require('/D:/Documents/Kurzen/ANALISIS Y DESARROLLO DE SOFTWARE. (2455266)/proyecto/backend/Producto');
const Inventory = require('/D:/Documents/Kurzen/ANALISIS Y DESARROLLO DE SOFTWARE. (2455266)/proyecto/backend/Inventory');
const User = require('/D:/Documents/Kurzen/ANALISIS Y DESARROLLO DE SOFTWARE. (2455266)/proyecto/backend/User');

// Crear instancias de las clases
const inventory = new Inventory();
const user = new Users('Nombre de usuario', 'correo@ejemplo.com');

// Agregar productos al inventario
const product1 = new Product('Producto 1', 10);
const product2 = new Product('Producto 2', 15);
inventory.addProduct(product1);
inventory.addProduct(product2);

// Agregar productos al carrito del usuario
user.addToCart(product1);
user.addToCart(product2);

// Mostrar información en la consola
console.log('Inventario:');
console.log(inventory.getProducts());

console.log('Carrito de compras del usuario:');
console.log(user.getCart());
