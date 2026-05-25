import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoadingScreen from "./components/loadingScreen";
import Dashboard from "./pages/Dashboard";
import Settings from "./pages/settings.jsx";
import Finance from "./pages/finance.jsx";
import Revenue from "./pages/finance/revenue.jsx";
import Sales from "./pages/sales.jsx";
import "./index.css";


export default function App() {
  const [done, setDone] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <BrowserRouter>
      <div
        style={{
          opacity: done ? 1 : 0,
          transition: "opacity 0.4s ease",
          background: "#0b0b10",
          minHeight: "100vh",
          display: "flex",     
          flexDirection: "column", 
        }}
      >
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/dashboard" element={
            <Dashboard
              sidebarOpen={sidebarOpen}
              setSidebarOpen={setSidebarOpen}
            />
            } 
          />
          <Route path="/settings" element={ <Settings
              sidebarOpen={sidebarOpen}
              setSidebarOpen={setSidebarOpen}
            />
            } 
          />

          {/* Finance routes */}

          <Route path="/finance" element={ <Finance
              sidebarOpen={sidebarOpen}
              setSidebarOpen={setSidebarOpen}
            />
            } 
          />

          <Route path="/finance/revenue" element={ <Revenue
              sidebarOpen={sidebarOpen}
              setSidebarOpen={setSidebarOpen}
            />
            } 
          />

          <Route path="/sales" element={ <Sales
              sidebarOpen={sidebarOpen}
              setSidebarOpen={setSidebarOpen}
            />
            } 
          />
        </Routes>
      </div>

      <LoadingScreen onComplete={() => setDone(true)} />
    </BrowserRouter>
  );
}