import { useState } from "react";
import "../styles/pages/companySetup.css";

export default function CompanySetup({})
{
  const [step, setStep] = useState(0);

  const [formData, setFormData] = useState({
    companyName: "",
    legalForm: "",
    companyHeadquarters: "",
    economicSector: "",
    preferredCurrency: "",
  });

  const steps = [
    {
      key: "companyName",
      label: "Bitte gib deinen Unternehmensnamen ein:",
      placeholder: "Unternehmensname",
    },
    {
      key: "legalForm",
      label: "Bitte gib den Rechtstyp deines Unternehmens ein:",
      placeholder: "Rechtstyp",
    },
    {
      key: "companyHeadquarters",
      label: "Bitte gib den Unternehmenssitz deines Unternehmens ein:",
      placeholder: "Unternehmenssitz",
    },
    {
      key: "economicSector",
      label: "Bitte gib den Wirtschaftssektor deines Unternehmens ein:",
      placeholder: "Wirtschaftssektor",
    },
    {
      key: "preferredCurrency",
      label: "Bitte gib deine bevorzugte Währung ein:",
      placeholder: "Bevorzugte Währung",
    },
  ];

  const currentStep = steps[step];

  function handleNext() {
    setStep(step + 1);
  }

  function handleBack() {
    setStep(step - 1);
  }

  return (
    <div className="companySetup">
      <header className="setup-title">
        <div>
          <h1>Neues Unternehmen anlegen!</h1>
          <p>In dieser Ansicht können sie ein neues Unternehmen anlegen</p>
        </div>
      </header>

      <main>
        <section className="window">
          <section className="inputBox">

            <label htmlFor={currentStep.key}>
              {currentStep.label}
            </label>

            <input
              id={currentStep.key}
              type="text"
              placeholder={currentStep.placeholder}
              value={formData[currentStep.key]}
              onChange={(event) =>
                setFormData({
                  ...formData,
                  [currentStep.key]: event.target.value,
                  })
              }
            />

            <div className="button-row">
              <button onClick={handleBack} disabled={step === 0}>Zurück</button>
              <button onClick={handleNext}>Weiter</button>
            </div>

          </section>
        </section>
      </main>
    </div>
  );
}
