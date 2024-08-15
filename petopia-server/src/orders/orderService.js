const Order = require('./orderModel');

class OrderService {
  async createOrder(orderData) {
    const newOrder = new Order(orderData);
    try {
      const result = await newOrder.save();
      console.log(`Order inserted with the orderId: ${result.orderId}`);
      return result;
    } catch (error) {
      console.error("Error inserting order:", error);
      throw error;
    }
  }

  async getOrderById(orderId) {
    try {
      const order = await Order.findOne({ orderId: orderId });
      if (!order) {
        throw new Error('Order not found');
      }
      return order;
    } catch (error) {
      console.error("Error retrieving order:", error);
      throw error;
    }
  }
}

module.exports = new OrderService();
