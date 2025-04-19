
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
```

## 🌐 Frontend Setup (`client/`)

> Location: `eldercare-tracker/client/`  
> Built using **React + Vite + Firebase**

### 📂 Key Files & Folders

| Path                           | Purpose                                                  |
|--------------------------------|----------------------------------------------------------|
| `src/`                         | Main React source code directory                         |
| `src/main.jsx`                 | Entry point — renders the `<App />` component            |
| `src/App.jsx`                  | Root component for app-wide routing                      |
| `src/pages/Login.jsx`          | Login screen using Firebase Auth                         |
| `src/pages/Dashboard.jsx`      | Caretaker dashboard with patient info/logs               |
| `src/components/`              | Folder for reusable UI components                        |
| `src/utils/firebase.js`        | Firebase config for Auth + Firestore SDK                 |
| `src/context/AuthContext.jsx`  | (Optional) Auth context for managing global user state   |
| `.env`                         | Firebase credentials stored as environment variables     |
| `vite.config.js`               | Vite dev/build configuration                             |
| `package.json`                 | Frontend dependencies and scripts                        |

### ▶️ To Run Locally

```bash
cd client
npm install
npm run dev
