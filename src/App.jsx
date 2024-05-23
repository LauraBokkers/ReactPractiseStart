import React from "react"
import { useState } from "react"
import Header from "./components/Header"
import InvestmentInput from "./components/InvestmentInput"
import InvestmentOutput from "./components/InvestmentOutput"
import { calculateInvestmentResults } from "./util/investment"



function App() {
  const [initialInvestment, setInitialInvestment] = useState(0);
  const [annualInvestment, setAnnualInvestment] = useState(0);
  const [expectedReturn, setExpectedReturn] = useState(0);
  const [duration, setDuration] = useState(0);

  let annualData = [];
  let durationError;

  if (initialInvestment && annualInvestment && expectedReturn && duration) {

    if (duration < 1) {
      durationError = "The duration must be above 0"
    }

    annualData = calculateInvestmentResults({
      initialInvestment,
      annualInvestment,
      expectedReturn,
      duration,
    });
  }

  return (
    <main>
      <div>
        <Header />
        <InvestmentInput
          initialInvestment={initialInvestment}
          setInitialInvestment={setInitialInvestment}
          annualInvestment={annualInvestment}
          setAnnualInvestment={setAnnualInvestment}
          expectedReturn={expectedReturn}
          setExpectedReturn={setExpectedReturn}
          duration={duration}
          setDuration={setDuration}
          durationError={durationError}
        />
        <InvestmentOutput annualDataArray={annualData} />
      </div>
    </main>

  )
}

export default App
