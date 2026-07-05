# 🎬 Movie Explorer - Backend Setup Guide

## 📁 Project Structure

```
movie-explorer-backend/          ← YEH FOLDER (Express + MongoDB)
├── config/
│   └── db.js                   ← MongoDB connection
├── models/
│   └── User.js                 ← User schema (name, email, password, favorites)
├── middleware/
│   └── auth.js                 ← JWT token verify karna
├── routes/
│   ├── auth.js                 ← Register, Login, GetMe routes
│   └── favorites.js            ← Favorites CRUD routes
├── .env                        ← Environment variables
├── server.js                   ← Main server file
└── README.md                   ← Yeh file

frontend-files/                 ← Yeh files apne React project mein copy karo
├── AuthContext.jsx             → src/context/AuthContext.jsx
├── Login.jsx                   → src/pages/Login.jsx
├── Register.jsx                → src/pages/Register.jsx
├── App.jsx                     → src/App.jsx (replace karo)
└── Navbar.jsx                  → src/components/Navbar.jsx (replace karo)
```

---

## 🚀 Backend Setup (Step by Step)

### Step 1: MongoDB Install karo
MongoDB locally install karo ya MongoDB Atlas (free cloud) use karo.

**MongoDB Atlas (Recommended - Free):**
1. https://www.mongodb.com/atlas pe jao
2. Free account banao
3. Cluster create karo
4. Connection string copy karo
5. `.env` file mein `MONGODB_URI` update karo

### Step 2: Backend chalao
```bash
cd movie-explorer-backend
npm install
node server.js
```

Server `http://localhost:5000` par chalega ✅

---

## 🔗 API Endpoints

### Auth Routes
| Method | URL | Description | Auth Required |
|--------|-----|-------------|---------------|
| POST | `/api/auth/register` | Naya account banao | ❌ No |
| POST | `/api/auth/login` | Login karo | ❌ No |
| GET | `/api/auth/me` | Apni info dekho | ✅ Yes |

### Favorites Routes
| Method | URL | Description | Auth Required |
|--------|-----|-------------|---------------|
| GET | `/api/favorites` | Saare favorites dekho | ✅ Yes |
| POST | `/api/favorites/add` | Movie add karo | ✅ Yes |
| DELETE | `/api/favorites/:movieId` | Movie remove karo | ✅ Yes |

---

## 📝 API Request Examples

### Register
```json
POST /api/auth/register
{
  "name": "Sunil Bagdi",
  "email": "sunil@example.com",
  "password": "mypassword123"
}
```

### Login
```json
POST /api/auth/login
{
  "email": "sunil@example.com",
  "password": "mypassword123"
}
```

### Protected Route (Token chahiye)
```
GET /api/auth/me
Headers: Authorization: Bearer <your_jwt_token>
```

---

## ⚛️ Frontend Integration

### Step 1: Frontend files copy karo
```bash
# AuthContext
cp frontend-files/AuthContext.jsx ../MovieExplorerApp/src/context/

# Pages
cp frontend-files/Login.jsx ../MovieExplorerApp/src/pages/
cp frontend-files/Register.jsx ../MovieExplorerApp/src/pages/

# Replace existing files
cp frontend-files/App.jsx ../MovieExplorerApp/src/
cp frontend-files/Navbar.jsx ../MovieExplorerApp/src/components/
```

### Step 2: React project chalao
```bash
cd ../MovieExplorerApp
npm run dev
```

---

## 🔒 Security Features

- ✅ **bcryptjs** - Password hash hota hai (kabhi plain text save nahi)
- ✅ **JWT Tokens** - 7 din valid, secure authentication
- ✅ **express-validator** - Input validation
- ✅ **CORS** - Sirf allowed origins se requests
- ✅ **Password hidden** - API response mein password nahi aata

---

## ⚠️ .env File (Important!)

```env
PORT=5000
MONGODB_URI=mongodb://localhost:27017/movie-explorer
JWT_SECRET=aapka_secret_key_yahan_likhein  ← CHANGE THIS!
JWT_EXPIRES_IN=7d
```

**Production mein JWT_SECRET strong banana - random 64 character string use karo!**
