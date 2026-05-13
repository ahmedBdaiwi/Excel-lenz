
# Getting Started

## Install Dependencies

> Go into the `frontend/excellenz` folder (for example via cmdline `cd ./frontend/excellenz`)

```bash
npm install
```

## Start Development Server (Debug Mode)

```bash
npm run dev
```

The application will usually start at:

```text
http://localhost:5173
```

---


# Project Structure

Example structure:

```text
src/
├── styles/
├── components/
├── pages/
├── hooks/
├── App.jsx
└── main.jsx
```

## IMPORTANT

> Before you start coding, read through the docs, what a component, a page and hooks are (we prob. dont need hooks tho). If you cannot find it in docs, ask chatgpt. 
> If you create a new page, please setup a new stylesheet in `styles/`
> Example
```text
src/
├── styles/
├ ├── main.css #for the main.jsx file
├ ├── App.css #for the App.jsx file
├── App.jsx
└── main.jsx
```  

---

# Basic React Component Example

```jsx
function WelcomeMessage({ name }) {
  return <h1>Hello {name}!</h1>;
}

export default WelcomeMessage;
```

Usage:

```jsx
<WelcomeMessage name="Developer" />
```

---

# State Example

```jsx
import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <button onClick={() => setCount(count + 1)}>
      Count: {count}
    </button>
  );
}

export default Counter;
```

---

# Import Example

```jsx
import Header from "./components/Header";
```

---

# Build for Production

```bash
npm run build
```

Preview production build locally:

```bash
npm run preview
```

---

# Useful Commands

```bash
npm run dev       # Start development server
npm run build     # Create production build
npm run preview   # Preview production build
```

---

# Documentation

- React: https://react.dev
- Vite: https://vitejs.dev
- React Compiler: https://react.dev/learn/react-compiler
- npm: https://docs.npmjs.com


Readme changed