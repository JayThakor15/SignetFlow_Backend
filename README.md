📜 SignetFlow Backend
The backend API for SignetFlow – a secure document e-signature system where users can upload PDFs, preview them, place signatures with custom fonts and precise coordinates, track signature status, and share signed documents via email.

Built with Node.js, Express, MongoDB, Multer, Nodemailer.

🚀 Features
User registration & login with JWT authentication

Secure PDF upload (Multer)

Serve uploaded PDFs

Signature placement with (x,y) coordinates and font style

Audit Trail: logs signer, timestamp, IP

Signature status (Pending, Signed, Rejected)

Email signed PDFs directly (Nodemailer)

Supports role-based sharing workflows

📂 Project Structure

/
├── server.js
├── /routes
│   ├── authRoutes.js
│   ├── docRoutes.js
│   ├── signature.js
│   └── share.js
├── /models
│   ├── User.js
│   ├── Document.js
│   └── Signature.js
├── /middleware
│   └── authMiddleware.js
├── /uploads
└── /signed
⚙️ Installation
1️⃣ Clone the repo:

git clone https://github.com/YOUR_USERNAME/signetflow-backend.git
cd signetflow-backend
2️⃣ Install dependencies:

npm install
🗝️ Environment Variables
Create a .env file in the root:

PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
EMAIL_USER=your_email@gmail.com
EMAIL_PASS=your_email_app_password
CLIENT_URL=http://localhost:5173
✅ EMAIL_USER and EMAIL_PASS should use a Gmail App Password (not your real password).

🏃‍♂️ Running Locally

npm start
Server runs at: http://localhost:5000

API base path: /api

📦 API Routes
Auth
POST /api/auth/register

POST /api/auth/login

Documents
POST /api/docs/upload

GET /api/docs

DELETE /api/docs/:id

Signatures
POST /api/signature/place

POST /api/signature/accept/:id

POST /api/signature/reject/:id

POST /api/signature/finalize

GET /api/audit/:fileId

Share
POST /api/share/send

✉️ Email Sending
Uses Nodemailer with Gmail SMTP. Make sure you:

Enable 2-Step Verification on your Gmail

Create an App Password and use it in .env

🌐 Deployment
✅ Recommended free services:

Render for backend

Netlify for frontend

MongoDB Atlas for database

Update your CORS and .env:

❤️ Contributions
Feel free to fork, star, or submit pull requests.
