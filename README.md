# Job Board Application (React)

A modern **Job Board web application** built with React, designed to simulate real-world applicant and recruiter workflows. This project focuses on clean architecture, scalable state management, and realistic UX patterns — making it **portfolio‑ready**.

---

## 🚀 Live Concept

This application allows:

- **Applicants** to browse jobs, view details, save jobs, and apply
- **Recruiters** to post jobs and review applicants per job

It is intentionally built as an **MVP** (Minimum Viable Product) to demonstrate strong frontend fundamentals without over‑engineering.

---

## ✨ Features

### Applicant Flow

- Browse available jobs
- View detailed job information
- Save jobs for later
- Apply to jobs
- Track submitted applications

### Recruiter Flow

- Recruiter dashboard
- View jobs posted
- See applicants per job
- Application status tags (Pending / Reviewed / Accepted)

---

## 🧠 Technical Highlights

- React (Vite)
- React Router v6 (nested routing)
- Context API for global state
- Modular, scalable folder structure
- Controlled forms & state persistence
- Defensive rendering to prevent runtime crashes
- Tailwind CSS

---

## 📁 Project Structure

```
src/
├── components/
│   ├── JobCard.jsx
│   ├── ApplyForm.jsx
│   └── StatusTag.jsx
│
├── context/
│   ├── AuthProvider.jsx
│   ├── SavedJobsProvider.jsx
│   └── ApplicationsProvider.jsx
│
├── pages/
│   ├── Home.jsx
│   ├── Jobs.jsx
│   ├── JobDetails.jsx
│   ├── Applications.jsx
│   ├── RecruiterDashboard.jsx
│   └── PostJob.jsx
│
├── data/
│   └── jobs.js
│
├── layouts/
│   └── DashboardLayout.jsx
│
├── App.jsx
└── main.jsx
```

---

## ⚠️ Known Limitations (By Design)

- No backend or authentication server
- Role‑based route protection not yet implemented

These were excluded to keep the project **focused, stable, and reviewable**.

---

## 🔮 Future Improvements

- Backend integration (Node / Firebase)
- Real authentication & authorization
- External job APIs (Adzuna etc.)
- Recruiter analytics
- Admin moderation panel

---

## 👨‍💻 Author

Barnabas Olayinka Affonshike

Built with care as a frontend engineering portfolio project.

Feedback is welcome.
