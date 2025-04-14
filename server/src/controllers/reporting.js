class PhoneSale {
    constructor(model, quantity, unitPrice, paymentType, date = new Date()) {
      this.model = model;
      this.quantity = quantity;
      this.unitPrice = unitPrice;
      this.paymentType = paymentType;
      this.date = date;
    }
  
    totalPrice() {
      return this.unitPrice * this.quantity;
    }
  }
  
  class SalesManager {
    constructor() {
      this.sales = [];
    }
  
    registerSale(sale) {
      this.sales.push(sale);
    }
  
    filterSalesByPeriod(startDate, endDate) {
      return this.sales.filter(sale => sale.date >= startDate && sale.date <= endDate);
    }
  
    getSalesSummary(startDate, endDate) {
      const salesInPeriod = this.filterSalesByPeriod(startDate, endDate);
      const summaryMap = new Map();
  
      for (const sale of salesInPeriod) {
        if (!summaryMap.has(sale.model)) {
          summaryMap.set(sale.model, {
            model: sale.model,
            totalQuantity: 0,
            totalRevenue: 0
          });
        }
        const data = summaryMap.get(sale.model);
        data.totalQuantity += sale.quantity;
        data.totalRevenue += sale.totalPrice();
      }
  
      const summaryArray = Array.from(summaryMap.values());
  
      return {
        top20: summaryArray
          .sort((a, b) => b.totalQuantity - a.totalQuantity)
          .slice(0, 20),
        bottomSales: summaryArray
          .sort((a, b) => a.totalQuantity - b.totalQuantity)
          .slice(0, 5), // Can be adjusted
        totalRevenue: summaryArray.reduce((sum, item) => sum + item.totalRevenue, 0),
        totalPhonesSold: summaryArray.reduce((sum, item) => sum + item.totalQuantity, 0),
        detailedSales: salesInPeriod.map(s => ({
          model: s.model,
          quantity: s.quantity,
          paymentType: s.paymentType,
          date: s.date.toLocaleString(),
          total: s.totalPrice().toFixed(2)
        }))
      };
    }
  }
  
  const manager = new SalesManager();
  
  manager.registerSale(new PhoneSale("Galaxy S21", 2, 800, "cash", new Date("2025-04-12")));
  manager.registerSale(new PhoneSale("iPhone 13", 1, 1000, "bank", new Date("2025-04-11")));
  manager.registerSale(new PhoneSale("Xiaomi Redmi", 5, 200, "cash", new Date("2025-04-10")));
  manager.registerSale(new PhoneSale("Galaxy S21", 3, 800, "bank", new Date("2025-04-09")));
  manager.registerSale(new PhoneSale("iPhone 13", 4, 1000, "cash", new Date("2025-04-08")));
  manager.registerSale(new PhoneSale("Nokia 3310", 1, 50, "bank", new Date("2025-04-07")));
  
  const start = new Date("2025-04-01");
  const end = new Date("2025-04-12");
  
  const report = manager.getSalesSummary(start, end);
  
  console.log("📦 Phones Sold from", start.toDateString(), "to", end.toDateString(), "\n");
  
  console.log("🔥 Top 20 Most Sold Phones:");
  report.top20.forEach(p => {
    console.log(`- ${p.model}: ${p.totalQuantity} units - $${p.totalRevenue.toFixed(2)} total`);
  });

  console.log("\n📉 Least Sold Phones:");
  report.bottomSales.forEach(p => {
    console.log(`- ${p.model}: ${p.totalQuantity} units - $${p.totalRevenue.toFixed(2)} total`);
  });

  console.log(`\n💰 Total Revenue: $${report.totalRevenue.toFixed(2)}`);
  console.log(`📱 Total Phones Sold: ${report.totalPhonesSold}`);

  console.log("\n🧾 Sale Details:");
  report.detailedSales.forEach(s => {
    console.log(`- ${s.date} | ${s.model} x${s.quantity} | $${s.total} | Payment: ${s.paymentType}`);
  });
  