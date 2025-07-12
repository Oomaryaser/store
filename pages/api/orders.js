let orders = [];

export default function handler(req, res) {
  if (req.method === 'POST') {
    const order = req.body;
    orders.push(order);
    res.status(201).json(order);
  } else {
    res.status(200).json(orders);
  }
}
