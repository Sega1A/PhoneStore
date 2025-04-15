class ReceiptGenerator {
    static generate(sales) {
      console.log("\n======= SALES RECEIPT =======");
      let grandTotal = 0;
  
      sales.forEach((sale, index) => {
        const subtotal = sale.totalPrice();
        grandTotal += subtotal;
  
        console.log(`\nSale #${index + 1}`);
        console.log(`Date        : ${sale.date.toLocaleString()}`);
        console.log(`Model       : ${sale.model}`);
        console.log(`Quantity    : ${sale.quantity}`);
        console.log(`Unit Price  : $${sale.unitPrice.toFixed(2)}`);
        console.log(`Payment Type: ${sale.paymentType}`);
        console.log(`Subtotal    : $${subtotal.toFixed(2)}`);
      });
  
      console.log("\n-----------------------------");
      console.log(`TOTAL AMOUNT: $${grandTotal.toFixed(2)}`);
      console.log("=============================\n");
    }
  }
  