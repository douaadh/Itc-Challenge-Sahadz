# SahaDz – Digital Healthcare Platform

## Overview
SahaDz is a healthcare web platform designed to connect patients, doctors, pharmacies, and administrators in one system.  
The platform helps patients find doctors, book appointments, manage medical records, and quickly access emergency healthcare information.

---

## Abstract
SahaDz aims to improve healthcare accessibility through a digital platform that simplifies the interaction between patients and healthcare providers.

Patients can search for doctors using filters such as specialty, location, and availability, view doctor profiles, and schedule appointments easily. Doctors can manage their availability, appointments, and patient interactions through a dedicated dashboard. Pharmacies can update their duty status and working hours to help patients find nearby medication services.

The platform also includes an emergency module that allows users to quickly locate nearby hospitals and pharmacies. The system architecture is supported by UML diagrams including use case and class diagrams describing the relationships between system actors and entities.

The project focuses on building a Minimum Viable Product (MVP) that demonstrates the core healthcare workflow including doctor discovery, appointment booking, and emergency assistance.

---

# Features

## Patient
- Register and login
- Search doctors by specialty and location
- Book and manage appointments
- Upload and manage medical records
- Rate and review doctors
- Emergency button to locate nearby hospitals and pharmacies

## Doctor
- Manage profile and specialization
- Set availability schedule
- Confirm or cancel appointments
- View patient requests and reviews

## Pharmacy
- Register pharmacy profile
- Update working hours
- Set on-duty status
- Provide location and contact information

## Admin
- Approve doctor registrations
- Manage users
- Moderate reviews
- View platform statistics

---

# Tech Stack
# Tech Stack

### Frontend
- ⚛️ React 19.2.0
- 🎨 Tailwind CSS 3.4.19

### Tools
- 🐙 GitHub – Version control
- ▲ Vercel – Deployment
---

# Installation

Follow these steps to run the project locally.

## 1. Clone the Repository

```bash
git clone https://github.com/douaadh/Itc-Challenge-Sahadz.git
cd Itc-Challenge-Sahadz
```

## 2. Install Dependencies

Make sure you have **Node.js** installed.

```bash
npm install
```

## 3. Run the Development Server

```bash
npm run dev
```

The application will start at:

```
http://localhost:5173
```

---

# Application Routes

## Patient Interface
```
/patient-dashboard
/doctor-profile/1
/find-doctors
/book-appointment/1
```

## Pharmacy Interface
```
/pharmacy-interface
```

## Doctor Interface
```
/doctor-dashboard
/doctor-patients
/doctor-patient-profile/1
/doctor-appointments

```

---

# Setup React + Tailwind CSS

If you want to recreate the project from scratch:

## 1. Create a React Project (Vite)

```bash
npm create vite@latest sahadz
cd sahadz
npm install
```

Select:
- Framework → React  
- Variant → JavaScript  

---

## 2. Install Tailwind CSS

```bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

---

## 3. Configure Tailwind

Edit `tailwind.config.js`

```javascript
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

---

## 4. Add Tailwind to CSS

In `src/index.css`

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

---

## 5. Start the Project

```bash
npm run dev
```

---

# Live Demo

https://vercel.com/douaadhs-projects

---

# Author

Douaa  
ITC Challenge Project

GitHub:  
https://github.com/douaadh