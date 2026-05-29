# Green Tag Solutions - Cleaning Company Website

A modern, fully responsive cleaning company website for Green Tag Solutions Kerala, India.

## Tech Stack
- **Frontend**: Next.js 16, Tailwind CSS, Framer Motion
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Authentication**: JWT

## Installation

### Frontend
```bash
cd frontend
npm install
npm run dev
```

### Backend
```bash
cd backend
npm install
npm run dev
```

## Environment Variables (.env)

Create `.env` in root with:
```
MONGODB_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net/greentag
JWT_SECRET=your-jwt-secret-key-here
RAZORPAY_KEY_ID=rzp_test_your_key_id
RAZORPAY_KEY_SECRET=your_razorpay_secret
COMPANY_GST=GSTIN-32AAAAA0000AIZZ
WHATSAPP_NUMBER=919876543210
NEXT_PUBLIC_API_URL=http://localhost:5000/api
```

## Project Structure

```
green-tag-solutions/
├── frontend/           # Next.js React frontend
│   ├── src/app/       # App router pages
│   │   ├── page.tsx   # Home page
│   │   ├── services/  # Services pages
│   │   ├── products/  # Product shop pages
│   │   ├── cart/      # Cart page
│   │   ├── checkout/  # Checkout page
│   │   ├── invoice/   # Invoice page
│   │   ├── contact/   # Contact page
│   │   ├── gallery/   # Gallery page
│   │   └── admin/     # Admin dashboard
│   └── components/    # Reusable components
└── backend/           # Node.js Express API
    ├── models/        # MongoDB models
    ├── routes/        # API routes
    └── server.js      # Entry point
```

## Features

- **Home**: Hero banner, service categories, testimonials
- **Services**: 17+ cleaning services with booking
- **Products**: E-commerce with cart and WhatsApp checkout
- **Invoice**: GST-ready invoices with PDF download
- **Admin**: Full dashboard for managing products/orders

## Deployment

1. Frontend: Deploy to Vercel
2. Backend: Deploy to Railway/Render/Heroku
3. Database: MongoDB Atlas

## License
MIT