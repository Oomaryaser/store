# Next.js Store and Dashboard

This project is a minimal demonstration of a Next.js storefront with a basic order API and an orders dashboard. Orders are stored in memory and can be submitted via the API. The dashboard fetches the current list of orders from `/api/orders` and displays them.

## Getting Started

1. **Install Dependencies**

   ```bash
   npm install
   ```

2. **Run the Development Server**

   ```bash
   npm run dev
   ```

   The application will be available at `http://localhost:3000`.

3. **Build for Production**

   ```bash
   npm run build
   npm start
   ```

   This generates the production build and serves it.

## Placing an Order

Send a POST request to `/api/orders` with JSON payload specifying `item` and `quantity`. Example using `curl`:

```bash
curl -X POST http://localhost:3000/api/orders \
  -H "Content-Type: application/json" \
  -d '{"item":"Widget","quantity":2}'
```

## Viewing Orders

Navigate to `http://localhost:3000/dashboard` to see all orders that have been placed during the current server session.

