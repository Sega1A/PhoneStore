class Product {
    constructor(name, price, quantity, discount = 0) {
      this.name = name;
      this.price = price;
      this.quantity = quantity;
      this.discount = discount; 
    }
  
    hasDiscount() {
      return this.discount > 0;
    }
  
    finalPrice() {
      return this.hasDiscount()
        ? this.price * (1 - this.discount / 100)
        : this.price;
    }
  }
  
  class Inventory {
    constructor() {
      this.products = [];
    }
  
    addProduct(product) {
      this.products.push(product);
    }
  
    getProduct(name) {
      return this.products.find(p => p.name === name);
    }
  
    updateInventory(name, quantitySold) {
      const product = this.getProduct(name);
      if (product && product.quantity >= quantitySold) {
        product.quantity -= quantitySold;
      } else {
        throw new Error(`Not enough stock for: ${name}`);
      }
    }
  }
  
  class Sale {
    constructor(inventory) {
      this.inventory = inventory;
      this.cart = [];
      this.paymentType = '';
      this.date = new Date();
    }
  
    addToCart(name, quantity) {
      const product = this.inventory.getProduct(name);
      if (!product) {
        throw new Error(`Product "${name}" not found.`);
      }
      if (product.quantity < quantity) {
        throw new Error(`Insufficient stock for "${name}".`);
      }
      this.cart.push({ product, quantity });
    }
  
    registerPayment(type) {
      if (type !== 'cash' && type !== 'bank') {
        throw new Error("Invalid payment type. Only 'cash' or 'bank' are allowed.");
      }
      this.paymentType = type;
    }
  
    generateReceipt() {
      let total = 0;
      console.log("=== PURCHASE RECEIPT ===");
      console.log(`Date: ${this.date.toLocaleString()}`);
      console.log("Purchased products:");
  
      this.cart.forEach(({ product, quantity }) => {
        const unitPrice = product.finalPrice();
        const subtotal = unitPrice * quantity;
        total += subtotal;
  
        console.log(`- ${product.name}`);
        console.log(`  Unit price: $${unitPrice.toFixed(2)}`);
        console.log(`  Quantity: ${quantity}`);
        console.log(`  Discount: ${product.hasDiscount() ? product.discount + '%' : 'None'}`);
        console.log(`  Subtotal: $${subtotal.toFixed(2)}\n`);
  
        this.inventory.updateInventory(product.name, quantity);
      });
  
      console.log(`Payment type: ${this.paymentType}`);
      console.log(`Total amount: $${total.toFixed(2)}`);
      console.log("========================");
    }
  }
  
  const inventory = new Inventory();
  inventory.addProduct(new Product("Laptop", 1000, 5, 10));
  inventory.addProduct(new Product("Monitor", 300, 10));
  inventory.addProduct(new Product("Keyboard", 50, 20, 5));
  
  const sale = new Sale(inventory);
  
  try {
    sale.addToCart("Laptop", 1);
    sale.addToCart("Keyboard", 2);
    sale.registerPayment("bank");
    sale.generateReceipt();
  } catch (err) {
    console.error("Sale error:", err.message);
  }
  