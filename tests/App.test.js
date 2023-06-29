const Product = require('../backend/Product');
const Inventory = require('../backend/Inventory');
const User = require('../backend/Users');

describe('App', () => {
  let product1, product2, inventory, user;

  beforeEach(() => {
    product1 = new Product('Producto 1', 10);
    product2 = new Product('Producto 2', 15);
    inventory = new Inventory();
    user = new User('Nombre de usuario', 'correo@ejemplo.com');
  });

  test('Agrega productos al inventario correctamente', () => {
    inventory.addProduct(product1);
    inventory.addProduct(product2);

    expect(inventory.getProducts()).toEqual([product1, product2]);
  });

  test('Agrega productos al carrito del usuario correctamente', () => {
    user.addToCart(product1);
    user.addToCart(product2);

    expect(user.getCart()).toEqual([product1, product2]);
  });

});
