GreenCart Logistics

## Overview
GreenCart Logistics is a full-stack web application for managing delivery operations, including driver management, routes, orders, and KPI simulation. The dashboard visualizes key performance indicators (KPIs) such as total profit, efficiency score, delivery performance, and fuel costs.

---

## Project Structure

greencart-logistics/ │ ├── backend/ │   ├── src/ │   │   ├── controllers/ │   │   ├── models/ │   │   ├── routes/ │   │   ├── utils/ │   │   └── server.js │   ├── package.json │   ├── package-lock.json │   └── .env │ ├── frontend/ │   ├── public/ │   ├── src/ │   │   ├── pages/ │   │   ├── services/ │   │   ├── styles/ │   │   └── App.jsx │   ├── package.json │   └── package-lock.json │ └── README.md

---

## Backend

### Technologies
- Node.js
- Express
- MongoDB
- Mongoose
- JWT Authentication

### Setup
1. Install dependencies:
```bash
cd backend
npm install

2. Create a .env file:



MONGO_URI=<your_mongo_connection_string>
PORT=5000
JWT_SECRET=<your_secret_key>

3. Start the server:



npm start

or for development with auto-reload:

npx nodemon src/server.js


---

Frontend

Technologies

React.js

Axios

Recharts (Charts & Graphs)


Setup

1. Install dependencies:



cd frontend
npm install

2. Start the development server:



npm start


---

Features

User authentication (login)

Driver, order, and route management

KPI simulation with business rules:

1. Late Delivery Penalty: ₹50 for delivery time > (base route time + 10 minutes)


2. Driver Fatigue Adjustment: delivery speed decreases by 30% if driver works >8 hours


3. High-Value Order Bonus: 10% profit bonus for orders > ₹1000 delivered on time


4. Fuel Cost Calculation: ₹5/km + ₹2/km if traffic is "High"



Overall Profit: sum of (order value + bonus – penalties – fuel cost)

Efficiency Score: (On-time deliveries / Total deliveries) × 100

Dashboard with charts:

Total Profit

Efficiency Score

On-time vs Late Deliveries

Fuel Cost Breakdown




---

Submission

GitHub Repository: https://github.com/thejeshbunty/greencart-logistics

Live Deployment: The site is live at https://thejeshbunty.github.io/greencart-logistics/
