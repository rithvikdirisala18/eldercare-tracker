
---

## 🚀 Getting Started

### ✅ Prerequisites

- Node.js (v18+ recommended)
- Firebase account (for Auth + Firestore)
- GitHub access

---

## 📦 Backend Setup (`server/`)

> Location: `eldercare-tracker/server/`

### 📂 Key Files & Folders

| Path                         | Purpose                                      |
|------------------------------|----------------------------------------------|
| `index.js`                   | Entry point. Starts the Express server.      |
| `firebase.js`                | Firebase Admin SDK initialization            |
| `routes/patientRoutes.js`    | Defines patient-related API routes           |
| `controllers/`               | Logic for each route (e.g., add patient)     |
| `middleware/`                | Authentication and error handling middleware |

### ▶️ To Run Locally

```bash
cd server
npm install
node index.js
