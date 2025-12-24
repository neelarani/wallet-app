# 💳 wallet-app (Frontend)

The **wallet-app frontend** is a modern digital wallet interface built with
**React, Redux Toolkit, TypeScript, Tailwind CSS, and Axios**. It connects to
the [Wallet APP API](https://wallet-api-psi.vercel.app) and provides role-based
dashboards for **Users, Agents, and Admins**.

[LIVE LINK -> https://wallet-app-mu-sooty.vercel.app](https://wallet-app-mu-sooty.vercel.app)

## 🚀 Tech Stack

- ⚛️ [React](https://react.dev/) – Component-based UI
- 🛠 [Redux Toolkit](https://redux-toolkit.js.org/) + RTK Query – State
  management & API handling
- ⌨️ [TypeScript](https://www.typescriptlang.org/) – Type safety
- 🎨 [Tailwind CSS](https://tailwindcss.com/) – Utility-first styling
- 🌐 [Axios](https://axios-http.com/) – HTTP requests
- ⚡ [Vite](https://vitejs.dev/) – Fast build tool
- ▲ [Vercel](https://vercel.com/) – Deployment

## 📂 Project Structure

```

src/
├── assets/          # Static images/icons
├── components/      # Reusable components
│ ├── dashboard/     # Role-based dashboard UIs
│ ├── global/        # Header, Footer, Navigation
│ └── ui/            # shadcn/ui components
├── config/          # App config & environment
├── context/         # React contexts (e.g. Theme)
├── hoc/             # Higher Order Components (Auth guards)
├── hooks/           # Custom React hooks
├── layout/          # Layouts (Dashboard, Root)
├── lib/             # Axios instance & helpers
├── pages/           # Route pages (Home, Login, Register, etc.)
├── providers/       # App-wide providers (Theme, Redux)
├── redux/           # Store, API slices (auth, admin, wallet, etc.)
├── routes/          # Sidebar items & routes
├── types/           # TypeScript types & enums
├── utils/           # Utility functions
├── index.css        # Tailwind styles
├── main.tsx         # App entry point
└── vite-env.d.ts    # Vite env types

```

## ⚡ Getting Started

### 1. Clone the repository

```bash
git clone https://gitlab.com/neelarani/wallet-app.git
cd wallet-app
```

### 2. Install dependencies

```bash
npm install
# or
bun install
# or
yarn install
```

### 3. Configure environment

Create a `.env` file in the root:

```bash
VITE_API_URL=https://wallet-api-psi.vercel.app/api/v1
```

### 4. Run development server

```bash
npm run dev
```

Visit 👉 [http://localhost:5173](http://localhost:5173)

## 🔑 Features

- 🔐 **Authentication**

  - Register, Login, Logout, Verify email

- 👤 **User Dashboard**

  - Send money, Withdraw, Cash Out, Transaction history

- 🧑‍💼 **Agent Dashboard**

  - Cash In, Handle user requests

- 🛠 **Admin Dashboard**

  - Manage users (block/unblock)
  - Manage agents (approve/suspend applications)
  - Overview with pagination

- 🎨 **Responsive UI** with Tailwind + shadcn/ui
- ⚡ **RTK Query** for API calls with cache & re-fetch
- 🛡 **Protected Routes** via HOCs

## 🛠 Available Scripts

```bash
npm run dev       # Start dev server
npm run build     # Build for production
npm run preview   # Preview production build
npm run lint      # Run ESLint
```

## 📜 License

MIT License © 2025 [neelarani](https://gitlab.com/neelarani)

## ❤️ Made with Love

Neela Rani
