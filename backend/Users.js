class Users {
  constructor(name, email) {
    this.name = name;
    this.email = email;
    this.cart = [];
  }

  addToCart(product) {
    this.cart.push(product);
  }

  getCart() {
    return this.cart;
  }
}

module.exports = Users;
