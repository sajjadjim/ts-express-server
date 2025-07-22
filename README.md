# 🧠 Mini Event Scheduler Server (Node.js + TypeScript)

This is the **backend API** for the **Mini Event Scheduler with AI Categorization** app. It provides RESTful endpoints for creating, retrieving, and filtering event data, with MongoDB as the primary database.

---

## 🌐 Live API Base URL

> _(Add your deployed server URL here, e.g. `https://mini-event-api.onrender.com`)_  
If you're testing locally, the server runs on:  
`http://localhost:3000/`

---

## ⚙️ Tech Stack

- **Node.js** + **Express**
- **TypeScript**
- **MongoDB** with **Mongoose**
- **dotenv** for environment variables
- **CORS** & **Middleware** support
- Optional: Deployed on platforms like **Render**, **Railway**, or **Vercel**

---

## 📁 Project Structure

server/
├── src/
│ ├── controllers/ # Handles logic for event routes
│ ├── models/ # MongoDB schemas using Mongoose
│ ├── routes/ # API route definitions
│ ├── config/ # Database connection & env setup
│ ├── app.ts # Express app config
│ └── index.ts # Server entry point
├── .env # Environment variables
├── tsconfig.json # TypeScript config
├── package.json
└── README.md

yaml
Copy
Edit

---

## 🚀 Features

- ✅ Create new event with title, notes, time, date, email
- 🔍 Get all events or filter by user email
- 🔐 Secure environment setup with `.env`
- 💾 Connected to MongoDB using Mongoose
- 📦 Simple and scalable TypeScript architecture

---

## 📦 Installation

### 1. Clone and Install
```bash
git clone https://github.com/your-username/mini-event-server.git
cd mini-event-server
npm install
2. Environment Variables
Create a .env file in the root folder:

env
Copy
Edit
PORT=5000
MONGODB_URI=your_mongodb_connection_string
3. Run the Server
Development (with auto-reload)
bash
Copy
Edit
npm run dev
Production Build
bash
Copy
Edit
npm run build
node dist/index.js
🧪 API Endpoints
Method	Endpoint	Description
GET	/events	Get all events
GET	/events?email=x	Get events by user email
POST	/events	Create a new event

Example POST body:

json
Copy
Edit
{
  "title": "Project Meeting",
  "date": "2025-07-23",
  "time": "15:00",
  "notes": "Discuss sprint progress",
  "email": "user@example.com"
}
📤 Deployment
Can be deployed on:

Render

Railway

Vercel (Serverless)

📬 Contact
Developer: Jim
Email: (optional)
Frontend Repo: Mini Event Scheduler UI

📄 License
MIT License — free to use and modify.

Let me know if you'd like a working `server.ts` file setup too (with MongoDB model, route, controller), and I’ll generate that as well.

