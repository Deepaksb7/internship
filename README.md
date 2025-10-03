# Task Management System

A modern task management application built with Next.js, featuring user authentication and real-time task operations.

## 🚀 Features

- **User Authentication**: Secure login/signup with NextAuth.js
- **Task Management**: Create, update, delete, and mark tasks as complete
- **User Profiles**: Update user information
- **Responsive Design**: Mobile-friendly interface
- **Type Safety**: Built with TypeScript
- **Database**: MongoDB integration with Mongoose

## 🛠️ Tech Stack

- **Frontend**: Next.js 14, TypeScript, Tailwind CSS
- **Backend**: Next.js API Routes
- **Database**: MongoDB with Mongoose
- **Authentication**: NextAuth.js with JWT
- **UI Components**: Custom components with shadcn/ui
- **Styling**: Tailwind CSS

## 📋 Prerequisites

Before running this project, make sure you have:

- Node.js (v16 or higher)
- npm or yarn
- MongoDB database (local or cloud)

## ⚙️ Installation

1. **Clone the repository**
```bash
git clone https://github.com/Deepaksb7/internship.git
cd internship
```

2. **Install dependencies**
```bash
npm install
# or
yarn install
```

3. **Set up environment variables**

Create a `.env.local` file in the root directory:

```env
# Database
MONGODB_URI=mongodb://localhost:27017/taskmanager
# or use MongoDB Atlas connection string
# MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/taskmanager

# NextAuth Configuration
NEXTAUTH_SECRET=your-super-secret-key-here
NEXTAUTH_URL=http://localhost:3000
```

4. **Generate NextAuth Secret**
```bash
# Generate a secure random string for NEXTAUTH_SECRET
openssl rand -base64 32
```

## 🏃‍♂️ Running the Application

1. **Start the development server**
```bash
npm run dev
# or
yarn dev
```

2. **Open your browser**
Navigate to [http://localhost:3000](http://localhost:3000)

## 🏗️ Project Structure

```
internship/
├── app/                    # Next.js app directory
│   ├── api/               # API routes
│   │   ├── auth/          # NextAuth configuration
│   │   ├── profile/       # User profile endpoints
│   │   ├── signup/        # User registration
│   │   └── tasks/         # Task management endpoints
│   ├── dashboard/         # Dashboard page
│   ├── login/            # Login page
│   ├── profile/          # Profile page
│   └── signup/           # Signup page
├── components/           # Reusable UI components
│   └── ui/              # shadcn/ui components
├── context/             # React context providers
├── db/                  # Database connection
├── lib/                 # Utility functions and configs
├── models/              # Mongoose schemas
└── middleware.ts        # Next.js middleware
```

## 🔌 API Endpoints

### Authentication
- `POST /api/auth/[...nextauth]` - NextAuth.js handler
- `POST /api/signup` - User registration

### User Management
- `GET /api/profile` - Get user profile
- `PUT /api/profile` - Update user profile

### Task Management
- `GET /api/tasks` - Get all tasks for user
- `POST /api/tasks` - Create new task
- `PATCH /api/tasks/[id]` - Update task
- `DELETE /api/tasks/[id]` - Delete task

## 🗄️ Database Schema

### User Model
```javascript
{
  name: String (required),
  email: String (required, unique),
  password: String (required, hashed),
  createdAt: Date,
  updatedAt: Date
}
```

### Task Model
```javascript
{
  text: String (required),
  completed: Boolean (default: false),
  user: String (required, user email),
  createdAt: Date,
  updatedAt: Date
}
```

## 🔐 Authentication Flow

1. **Registration**: Users sign up with name, email, and password
2. **Password Hashing**: Passwords are hashed using bcrypt (10 rounds)
3. **Login**: Credentials are verified against the database
4. **JWT Tokens**: Secure tokens are generated for authenticated sessions
5. **Protected Routes**: Middleware protects authenticated pages

## 🚀 Deployment

### Vercel (Recommended)

1. **Push to GitHub**
```bash
git add .
git commit -m "Initial commit"
git push origin main
```

2. **Deploy on Vercel**
- Go to [vercel.com](https://vercel.com)
- Import your GitHub repository
- Add environment variables in Vercel dashboard
- Deploy

### Manual Deployment

1. **Build the application**
```bash
npm run build
```

2. **Start production server**
```bash
npm start
```

## 📁 Environment Variables

| Variable | Description | Required | Example |
|----------|-------------|----------|---------|
| `MONGODB_URI` | MongoDB connection string | Yes | `mongodb://localhost:27017/taskmanager` |
| `NEXTAUTH_SECRET` | Secret key for NextAuth.js | Yes | `generated-secret-key` |
| `NEXTAUTH_URL` | Application URL | Yes | `http://localhost:3000` |


## 🐛 Troubleshooting

### Common Issues

1. **MongoDB Connection Error**
   - Ensure MongoDB is running locally or check Atlas connection string
   - Verify network access and credentials

2. **NextAuth Session Error**
   - Check if `NEXTAUTH_SECRET` is set
   - Clear browser cookies and restart server

3. **Build Errors**
   - Clear `.next` folder and reinstall dependencies
   - Check TypeScript errors with `npm run build`

