# TrendFlix

TrendFlix is a React web app that displays trending movies based on what users search for.  
It uses **React** for the frontend, **Tailwind CSS** for responsive styling, and **Appwrite** as the backend to manage the database.  

A key feature is **debouncing** in the search functionality — it prevents sending multiple API requests for every keystroke, significantly improving performance and user experience.

---

##  Demo
🔗 https://trend-flix.netlify.app

---

##  Features

-  **Smart Search with Debouncing:** Efficiently fetches results only after users stop typing.
-  **Trending Section:** Displays movies that are most frequently searched by users.
-  **Appwrite Integration:** Stores searches and trending data securely.
-  **Tailwind CSS Styling:** Beautiful, responsive UI with minimal code.
-  **Optimized Performance:** Reduces redundant requests and loads quickly.
-  **Component-Based Structure:** Clean, maintainable React architecture.

---

##  How It Works

1. When a user types in the search bar, the input is **debounced** — meaning TrendFlix waits a few milliseconds before sending the request.
2. Each successful search is logged into the **Appwrite database**.
3. The **Trending Section** dynamically updates based on the most-searched titles.
4. The frontend is fully responsive, adapting perfectly to both mobile and desktop screens.

---

## 🛠️ Tech Stack

| Layer | Technology |
|--------|-------------|
| Frontend | React, Tailwind CSS |
| Backend | Appwrite |
| Database | Appwrite Databases |
| Hosting | Netlify |
| Version Control | Git & GitHub |

---

##  Prerequisites

Before running the project, make sure you have the following installed:

- **Node.js** (version ≥ 16 recommended)
- **npm** or **yarn**
- **Git**
- A configured **Appwrite** project with:
  - Database
  - Collections (for storing searches/trending data)
  - Project ID and endpoint

---

## ⚙️ Environment Variables

Create a `.env.local` file in the root directory of your project.  

Example `.env.local` file:

```env
REACT_APP_APPWRITE_ENDPOINT=https://<YOUR_APPWRITE_ENDPOINT>
REACT_APP_APPWRITE_PROJECT_ID=<YOUR_APPWRITE_PROJECT_ID>


REACT_APP_APPWRITE_DATABASE_ID=<YOUR_DATABASE_ID>
REACT_APP_APPWRITE_SEARCHES_COLLECTION_ID=<YOUR_COLLECTION_ID>


# REACT_APP_APPWRITE_API_KEY=<YOUR_APPWRITE_API_KEY>

## Setup & Installation

### 1.Clone the repository:
```bash
git clone https://github.com/<your-username>/<repo-name>.git

### 2.Navigate to the project folder:
```bash
cd TrendFlix

### 3.Install dependencies:
```bash
npm install
or
yarn

### 4.Create a .env.local file with your Appwrite credentials (see above).

* Start the development server:

```bash
npm run dev

Open the app in your browser:
http://localhost:5173

### 5.Build for Production

* To create a production-ready build:
```bash
npm run build

* This generates a dist/ folder ready for deployment.
* To preview the production build locally:
```bash
npm run preview
