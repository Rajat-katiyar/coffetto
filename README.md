# Coffetto - Coffee Shop Website

A modern coffee shop website built with Next.js, TypeScript, and MongoDB.

## Features

- 🎨 Beautiful and responsive UI
- ☕ Coffee product showcase
- 🔐 User authentication (Signup & Login)
- 📱 Mobile-friendly design
- 🚀 Built with Next.js 14 App Router

## Tech Stack

- **Framework**: Next.js 14
- **Language**: TypeScript
- **Database**: MongoDB
- **Styling**: CSS3
- **Icons**: RemixIcon

## Setup Instructions

### 1. Install Dependencies

```bash
npm install
```

### 2. Environment Variables

Create a `.env.local` file in the root directory:

```env
MONGODB_URI=your_mongodb_connection_string
```

To get your MongoDB connection string:
1. Go to [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
2. Create a free cluster
3. Get your connection string
4. Replace `<password>` with your database password

### 3. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 4. Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
├── app/
│   ├── api/           # API routes
│   ├── login/         # Login page
│   ├── signup/        # Signup page
│   └── page.tsx       # Home page
├── components/         # React components
├── lib/               # Utilities (MongoDB connection)
├── models/            # MongoDB models
└── public/            # Static files
```

## API Endpoints

### POST /api/auth/signup
Create a new user account.

**Request Body:**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "password123"
}
```

**Response:**
```json
{
  "success": true,
  "message": "User created successfully",
  "user": {
    "id": "...",
    "name": "John Doe",
    "email": "john@example.com"
  }
}
```

## License

MIT

