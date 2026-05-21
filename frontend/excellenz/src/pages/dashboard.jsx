import React from "react";
import Sidebar from "../components/Sidebar";
import ProgressBar from "../components/ProgressBar";
import ChartPlaceholder from "../components/ChartPlaceholder";
import Card from "../components/Card";
import "../styles/dashboard.css";

export default function Dashboard() {
  return (
    <div className="layout">
      <Sidebar />
      <main className="main">
        <h1 className="title">Fortschritt: Umsatzziel</h1>
        <ProgressBar value={68} />
        <ChartPlaceholder />
          <div className="cards">
              <Card title="Status" tooltip="Zeigt, ob dein Startup finanziell im Plan liegt.">🟢 Auf Kurs</Card>
              <Card title="Aktueller Fortschritt" tooltip="Dein aktueller Umsatz im Vergleich zum Gesamtziel.">68% - €136.000</Card>
              <Card title="Nächster Meilenstein" tooltip="Das nächste große Finanzziel, das erreicht werden soll.">75% - noch €14.000</Card>
              <Card title="Streak" tooltip="Anzahl der aufeinanderfolgenden Tage, an denen du deine Finanzen gepflegt hast.">🔥 12 Tage stark</Card>
          </div>
      </main>
    </div>
  );
}
