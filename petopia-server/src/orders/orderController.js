const OrderService = require('./orderService');
const { v4: uuidv4 } = require('uuid'); // Use UUID to generate unique order IDs

class OrderController {
  async placeOrder(req, res) {
    try {
      const orderData = { ...req.body, orderId: uuidv4() }; // Generate a unique ID
      const order = await OrderService.createOrder(orderData);
      res.status(201).json({ message: 'Order placed successfully', order });
    } catch (error) {
      res.status(500).json({ message: 'Error placing order', error });
    }
  }

  async trackOrder(req, res) {
    try {
      const orderId = req.params.id;
      const order = await OrderService.getOrderById(orderId);
      res.status(200).json(order);
    } catch (error) {
      if (error.message === 'Order not found') {
        res.status(404).json({ message: 'Order not found' });
      } else {
        res.status(500).json({ message: 'Error tracking order', error });
      }
    }
  }
}

module.exports = new OrderController();
