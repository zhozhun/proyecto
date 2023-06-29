class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }

  getInfo() {
    return `Nombre: ${this.name}, Precio: $${this.price}`;
  }
}

module.exports = Product;
